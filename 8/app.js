
/* Search */

var search = document.querySelector('.navigation-search');
var popoverSearch = document.querySelector('.popover-search');
var closeSearch = document.querySelector('.search-close-button');

search.onclick = () => {
    popoverCart.classList.remove('open');
    popoverEnter.classList.remove('open');
    popoverSearch.classList.toggle('open');
}
closeSearch.onclick = () => popoverSearch.classList.remove('open');

/* Enter */

var enter = document.querySelector('.navigation-enter');
var popoverEnter = document.querySelector('.popover-enter-container');

enter.onclick = () => {
    popoverCart.classList.remove('open');
    popoverEnter.classList.toggle('open');
    popoverSearch.classList.remove('open');
}

/* Cart */

var cart = document.querySelector('.navigation-cart');
var popoverCart = document.querySelector('.popover-cart-container');

cart.onclick = () => {
    popoverCart.classList.toggle('open');
    popoverEnter.classList.remove('open');
    popoverSearch.classList.remove('open');
}

/* Modal */

var contact = document.querySelector('.button-contacts');
var modal = document.querySelector('.modal-container');

contact.onclick = () => modal.classList.add('open-modal');

var modalClose = document.querySelector('.modal-close-button');
modalClose.onclick = () => modal.classList.remove('open-modal');

/* Catalog */

var catalogMenu = document.querySelector('.catalog-menu');
var catalogButton = document.querySelector('.navigation-catalog');

catalogButton.onmouseover = () => catalogMenu.classList.add('open');
catalogButton.onmouseout = () => catalogMenu.classList.remove('open');

/* Cart quantity */

var cartList = document.querySelector('.cart-list');
var cartArr = cartList.children;
var cartEmpty = document.querySelector('.navigation-cart-empty');
var cartFull = document.querySelector('.navigation-cart-full');
var cartQuantity = document.querySelector('.navigation-cart-quantity');

console.log(cartArr.length);

if (cartArr.length>0) {
    cartEmpty.classList.add('visually-hidden');
    cartFull.classList.remove('visually-hidden');
    cartQuantity.textContent = cartArr.length + ' '
} else if (cartArr.length===1) {
    cartFull.textContent = 'Товар';
}