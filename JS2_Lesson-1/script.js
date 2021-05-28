'use strict';

const products = [
    { id: 1, title: 'notebook', price: 150 },
    { id: 2, title: 'mouse', price: 80 },
    { id: 3, title: 'gamepad', price: 100 },
    { id: 4, title: 'pc', price: 200 },
]

const renderProduct = (item, img ='https://placehold.it/200x150') =>
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);