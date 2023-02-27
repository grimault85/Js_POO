
import Basket from "./modules/Basket.js";
import Product from "./modules/Product.js";
import products from "./products/myProduct.js";

//Affichage des produits
const $target = document.querySelector('.cards');
products.forEach(el => {
  const product = new Product(el.id, el.title, el.img, el.price)
  $target.insertAdjacentHTML('beforeend', product.displayCard())
})

//Enregistrement des produit selectionner dans le LocalStorage
const $addCart = document.querySelectorAll('button');
$addCart.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (products[index].id === Number(item.getAttribute("data-product"))) {
      const basket = new Basket(products[index])
      console.log(products[index])

    }
  });
});

