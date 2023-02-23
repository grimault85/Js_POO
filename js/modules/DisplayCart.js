class DisplayCart {

    constructor(id, title, img, price) {

        this.id = id
        this.title = title
        this.img = img
        this.price = price
    }


    displayCart() {
        return `
            <div class="card">
                <h2>${this.title}</h2>
                <img src="../.${this.img}" alt="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorem.</p>
                <p class="price">${this.price}€ TTC</p>
                <button data-supp="${this.id}">Supprimer</button>
            </div>`
    }

}
export default DisplayCart