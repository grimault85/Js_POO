import Product from "./modules/Product.js";
import products from "./products/myProduct.js";

const $target = document.querySelector('.cards');

products.forEach(el => {
    const product = new Product(el.id, el.title, el.img, el.price)
    $target.insertAdjacentHTML('beforeend', product.displayCard())
})

const $addCart = document.querySelectorAll('button');
for (let i of $addCart) {


    i.addEventListener('click', () => {

        if (products[i] === Number(i.getAttribute('data-product')) !== -1) {
            console.log(products[i].id)

        }
    })
}