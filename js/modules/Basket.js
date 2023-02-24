class Basket {
  constructor() {

    const basket = localStorage.getItem('basket')
    if (basket == null) {
      this.basket = []
    } else {
      this.basket = JSON.parse(basket)
    }

  }

  save() {
    localStorage.setItem("basket", JSON.stringify(this.basket));
  }

  add(product) {
    let foundProduct = this.basket.find(p => p.id == product.id)
    if (foundProduct != undefined) {
      foundProduct.quantity++
    } else {
      product.quantity = 1
      this.basket.push(product)
    }
    this.save()
  }

  remove(id) {
    this.basket = this.basket.filter(p => p.id != id)
    this.save()
  }
}

export default Basket