
import LocalStorage from "./modules/LocalStorage.js";
import Product from "./modules/Product.js";
import products from "./products/myProduct.js";

const $target = document.querySelector('.cards');
const $addCart = document.querySelectorAll('button');


products.forEach(el => {
    const product = new Product(el.id, el.title, el.img, el.price)
    $target.insertAdjacentHTML('beforeend', product.displayCard())
})

$addCart.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (products[index].id === Number(item.getAttribute("data-product"))) {
            const ls = new LocalStorage('myCart:', products[index])
            ls.addCartData(products[index])
        }
    });
});

