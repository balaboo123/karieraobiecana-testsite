const arrows = document.querySelectorAll('.wydarzenie .arrow');

function calculateMaxHeight(content) {
    let totalHeight = 0;

    Array.from(content.children).forEach(child => {
        let styles = window.getComputedStyle(child);
        let marginTop = parseFloat(styles['marginTop']);
        let marginBottom = parseFloat(styles['marginBottom']);
        totalHeight += child.offsetHeight + marginTop + marginBottom;
    });

    if (totalHeight == 0) return null;
    return totalHeight + 1000;
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        let wydarzenie = arrow.parentElement.parentElement;
        let content = wydarzenie.querySelector('.content');

        // calculate the max height of the content
        let maxHeight = calculateMaxHeight(content);
        let maxHeightText = `${maxHeight}px`;

        // change the expanded attribute
        if (wydarzenie.dataset.expanded == "true") {
            wydarzenie.dataset.expanded = "false";
        } else {
            wydarzenie.dataset.expanded = "true";
        }

        let expand = wydarzenie.dataset.expanded == "true";

        if (expand) {
            let maxHeight = maxHeightText || wydarzenie.dataset.maxheight || '3500px';
            content.style.maxHeight = maxHeight;
            content.style.filter = `blur(0px)`;
            // content.style['content-visibility'] = 'visible';
            arrow.style.transform = `rotate(180deg)`;
        } else {
            content.style.maxHeight = ``;
            content.style.filter = ``;
            // content.style['content-visibility'] = '';
            arrow.style.transform = ``;
        }
    });
});

// on window resize, recalculate the max height of the content currently opened
window.addEventListener('resize', () => {
    let opened = document.querySelectorAll('.wydarzenie[data-expanded="true"]');

    opened.forEach(expanded => {
        let content = expanded.querySelector('.content');
        let maxHeight = calculateMaxHeight(content);
        let maxHeightText = `${maxHeight}px`;

        let expand = expanded.dataset.expanded == "true";
        if (expand) {
            let maxHeight = maxHeightText || expanded.dataset.maxheight || '3500px';
            content.style.maxHeight = maxHeight;
        }

    })
});