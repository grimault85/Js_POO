import Cart from "./modules/Cart.js";


const $cartTarget = document.querySelector('.productContainer');
const cart = new Cart('myCart:', $cartTarget);

cart.displayCart()

