class LocalStorage {

    constructor(key, product) {
        this.key = key
        this.product = product
    }

    getCartData() {
        let cartData

        if (JSON.parse(localStorage.getItem(this.key)) === null) {
            cartData = []
        } else {
            cartData = JSON.parse(localStorage.getItem(this.key))
        }
        return cartData
    }

    addCartData(data) {
        let cartData = this.getCartData();
        cartData.push(data);
        localStorage.setItem(this.key, JSON.stringify(cartData));
    }

    clearAllCartData() {
        localStorage.clear();
    }
}

export default LocalStorage;