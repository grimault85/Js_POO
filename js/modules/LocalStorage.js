class LocalStorageManager {
    constructor(key, product) {
        this.key = key
        this.product = product
    }

    getData() {
        let data = localStorage.getItem(this.key)
        if (basket == null) {
            return []
        } else {
            return JSON.parse(basket)
        }
    }
    add(data) {
        let foundProduct = this.product.find(p => p.id == data.id)
        if (foundProduct != undefined) {
            this.product.push(data)
            this.save()
        }
    }

    save() {
        localStorage.setItem(this.key, JSON.stringify(this.product));
    }

    remove(id) {
        this.product = this.product.filter(p => p.id != id)
        this.save()
    }
}

export default LocalStorageManager