const arrows = document.querySelectorAll('.wydarzenie .arrow');

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        let wydarzenie = arrow.parentElement.parentElement;
        let content = wydarzenie.querySelector('.content');

        // change the expanded attribute
        if (wydarzenie.dataset.expanded == "true") {
            wydarzenie.dataset.expanded = "false";
        } else {
            wydarzenie.dataset.expanded = "true";
        }

        let expand = wydarzenie.dataset.expanded == "true";

        if (expand) {
            let maxHeight = wydarzenie.dataset.maxheight || '3500px';
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