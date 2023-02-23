import { DisplayCart } from "./DisplayCart.js";

class LocalStorage {
     cartData = []
     template = new DisplayCart


     getCartData() {
        
        if (localStorage.getItem("cartData") === null) {
            this.template.emptyCart();
        } else {
            this.cartData = JSON.parse(localStorage.getItem("cartData"));

            this.template.displayLS(this.cartData[0].img, this.cartData[0].name, this.cartData[0].price)
        }

    }

    addCartData(data) {
        this.cartData = this.getCartData();
        if (!Array.isArray(cartData)) {
            this.cartData = [];
        }
        this.cartData.push(data);
        localStorage.setItem("cartData", JSON.stringify(this.cartData));
    }
    

    clearItemCartData(data){
        localStorage.removeItem(data);
    }

    clearAllCartData() {
        localStorage.clear();
    }
}

export {LocalStorage} ;