import LocalStorageManager from "./LocalStorage.js"

class Basket {
  constructor(product) {
    this.ls = new LocalStorageManager('Basket', product)
  }

  getProduct() {
    this.ls.getData()
  }

  addProduct() {
    this.ls.addData(this.product)
  }

  removeproduct() {
    this.le.remove(this.product.id)
  }

  setQuantity(quantity) {
    let foundProduct = this.basket.find(p => p.id == this.product.id)
    this.product.quantity = 0
    if (foundProduct != undefined) {
      foundProduct.quantity += quantity
      if (foundProduct.quantity <= 0) {
        ls.remove(product.id)
      } else {
        ls.save()
      }
    }
  }

  getQuantity() {
    let number = 0
    for (let product of this.product) {
      number += product.quantity
    }
    return number
  }

  getTotalPrice() {
    let total = 0
    for (let product of product) {
      total += product.price
    }
    return total
  }
  //fonction refresh
}
export default Basket