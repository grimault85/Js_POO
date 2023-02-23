class Cart {


    displayCart(img, name, price) {

        document.querySelector('.productContainer').innerHTML =
            `
                            <ul>
                                <li>${img}</li>
                                <li>${name}</li>
                                <li>${price}</li>
                            </ul>
                            `
    }

    emptyCart() {
        return '<h2> Le panier est vide </h2>'
    }
}

export default Cart;