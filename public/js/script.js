function toggleClass() {
    const openMenu = document.getElementsByClassName("open-menu");
    for (let i of openMenu) {
        i.addEventListener('click', function (e) {
            e.target.nextElementSibling.classList.toggle('display-menu')
        })
    }

}

function addClass() {
    const getButton = document.getElementsByClassName('open-category-btn');
    if (getButton.length > 0) {
        getButton[0].addEventListener('click', function (e) {
            e.stopPropagation();
            const add = document.getElementsByClassName('category-navbar');
            add[0].classList.toggle('display-category');
        })
    }

}

function removeClass() {
    const removeClass = document.getElementsByClassName('body-content');
    if (removeClass.length > 0) {
        removeClass[0].addEventListener('click', function (e) {
            e.stopPropagation();
            const remove = document.getElementsByClassName('category-navbar display-category');
            if (remove.length > 0) {
                remove[0].classList.remove('display-category');
            }
        })
    }

}
toggleClass();
removeClass();
addClass();
