const body = document.body;
const nav = document.querySelector('nav');
const menuBtn = document.querySelector('#menu-btn');
const menuItems = document.querySelector('#items');
const logo = document.querySelector('#logo');
const logoHeight = (logo.clientHeight * 4/5).toString() + 'px';
const icon = document.querySelectorAll('.icon');
const link = document.querySelectorAll('.link');

for (let i = 0; i < 3; i++) {
    logo.children[i].style.fontSize = logoHeight;
}

function openLogo() {
    const curlyBracketW = logo.children[0].clientWidth + 1;
    const textW = logo.children[1].clientWidth + 1;
    logo.children[1].style.left = curlyBracketW.toString() + 'px';
    logo.children[2].style.left = (curlyBracketW + textW).toString() + 'px';
}

function closeLogo() {
    const move = logo.children[0].clientWidth.toString() + 'px';
    logo.children[2].style.left = move;
}

window.onload = () => { logo.classList.add('open'); closeLogo(); };

function removeActiveClass() {
    for (let i = 0; i < menuItems.children.length; i++) {
        menuItems.children[i].classList.remove('active');
    }
}

for (let i = 0; i < menuItems.children.length; i++) {
    const fontSize = parseInt((body.clientHeight * 2.5/50))
    link[i].children[0].style.fontSize = fontSize.toString() + 'px';
    const menuItem = menuItems.children[i];
    menuItem.children[0].addEventListener('click', () => {
        if (!menuItem.classList.value.includes('active')) {
            removeActiveClass();
            menuItem.classList.add('active');
        } else {
            menuItem.classList.remove('active');
        }
    });
}

menuBtn.addEventListener('click', () => {
    if (!nav.classList.value.includes('open')) {
        nav.classList.add('open');
        document.querySelector('main').classList.add('open');
        logo.classList.remove('open');
        openLogo();
    } else {
        logo.classList.add('open');
        document.querySelector('main').classList.remove('open');
        closeLogo();
        removeActiveClass();
        nav.classList.remove('open');
    }
});