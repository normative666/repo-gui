'use strict';

let burger = document.querySelector('.header__menu-button');
let menu = document.querySelector('.header__navigation');
let menuExit = document.querySelector('.header__navigation-exit');
let filter = document.querySelector('.dropdowns__heading--filter');
let trending = document.querySelector('.dropdowns__heading--trending');
let size = document.querySelector('.dropdowns__heading--size');
let price = document.querySelector('.dropdowns__heading--price');
let menuFilter = document.querySelector('.dropdowns__list--filter');
let menuTrending = document.querySelector('.dropdowns__list--trending');
let menuSize = document.querySelector('.dropdowns__list--size');
let menuPrice = document.querySelector('.dropdowns__list--price');
let widthWindow = window.screen.width;
let widthContainer;
let container = document.querySelectorAll('.container');

if (widthWindow > 1599) {
    widthContainer = 1140;
} else if (widthWindow <= 1599 && widthWindow > 768) {
    widthContainer = 361 + 0.487 * widthWindow;
} else if (widthWindow > 375) {
    widthContainer = 0.997 * widthWindow - 31;
} else widthContainer = 96;
if (widthWindow > 375) {
    container.forEach(elem => elem.style.width = `${widthContainer}px`);
} else container.forEach(elem => elem.style.width = `${widthContainer}%`);


window.addEventListener('resize', function () {
    widthWindow = window.screen.width;
    if (widthWindow > 1599) {
        widthContainer = 1140;
    } else if (widthWindow <= 1599 && widthWindow > 768) {
        widthContainer = 361 + 0.487 * widthWindow;
    } else if (widthWindow > 375) {
        widthContainer = 0.997 * widthWindow - 31;
    } else widthContainer = 96;

    if (widthWindow > 375) {
        container.forEach(elem => elem.style.width = `${widthContainer}px`);
    } else container.forEach(elem => elem.style.width = `${widthContainer}%`);
});

burger.addEventListener("click", () => {
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        burger.children[0].style.fill = '#F16D7F'
    }
    else {
        menu.style.display = 'none';
        burger.children[0].style.fill = ''
    }
});
menuExit.addEventListener("click", () => {
    menu.style.display = 'none';
    burger.children[0].style.fill = ''
});

// filter.addEventListener("click", () => {
//     if (menuFilter.style.display !== 'block') {
//         menuFilter.style.display = 'block';
//         filter.style.color = '#F16D7F';
//         filter.children[0].style.fill = '#F16D7F';
//         filter.children[0].style.transform = 'rotateX(0.5turn)';
//     }
//     else {
//         menuFilter.style.display = 'none';
//         filter.style.color = '';
//         filter.children[0].style.fill = '';
//         filter.children[0].style.transform = 'rotateX(1.0turn)';
//     }
// });

// trending.addEventListener("click", () => {
//     if (menuTrending.style.display !== 'block') {
//         menuTrending.style.display = 'block';
//         trending.style.color = '#F16D7F';
//         trending.children[0].style.fill = '#F16D7F';
//         trending.children[0].style.transform = 'rotateX(0.5turn)';
//     }
//     else {
//         menuTrending.style.display = 'none';
//         trending.style.color = '';
//         trending.children[0].style.fill = '';
//         trending.children[0].style.transform = 'rotateX(1.0turn)';
//     }
// });

// size.addEventListener("click", () => {
//     if (menuSize.style.display !== 'block') {
//         menuSize.style.display = 'block';
//         size.style.color = '#F16D7F';
//         size.children[0].style.fill = '#F16D7F';
//         size.children[0].style.transform = 'rotateX(0.5turn)';
//     }
//     else {
//         menuSize.style.display = 'none';
//         size.style.color = '';
//         size.children[0].style.fill = '';
//         size.children[0].style.transform = 'rotateX(1.0turn)';
//     }
// });

// price.addEventListener("click", () => {
//     if (menuPrice.style.display !== 'block') {
//         menuPrice.style.display = 'block';
//         price.style.color = '#F16D7F';
//         price.children[0].style.fill = '#F16D7F';
//         price.children[0].style.transform = 'rotateX(0.5turn)';
//     }
//     else {
//         menuPrice.style.display = 'none';
//         price.style.color = '';
//         price.children[0].style.fill = '';
//         price.children[0].style.transform = 'rotateX(1.0turn)';
//     }
// });