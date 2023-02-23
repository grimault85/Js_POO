import LocalStorage from "./LocalStorage.js";
import DisplayCart from "./DisplayCart.js";

class Cart {
    constructor(key, $target) {
        this.key = key;
        this.$target = $target;
    }

    displayCart() {
        const cartData = new LocalStorage(this.key).getCartData();
        if (!cartData) {
            this.$target.innerHTML = '<h2> Panier Vide </h2>';
        } else {
            cartData.forEach(el => {
                const product = new DisplayCart(el.id, el.title, el.img, el.price);
                this.$target.insertAdjacentHTML('beforeend', product.displayCart());
            });
        }

    }
}

export default Cart