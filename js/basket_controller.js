import Basket from "./modules/Basket.js"
import products from "./products/myProduct.js"


//Affichage du panier en recuprant les données du LocalStorage
const $basketContainer = document.querySelector('.basket-container')
const basket = JSON.parse(localStorage.getItem('basket'))

if (!basket) {
  $basketContainer.innerHTML = '<h2>Le panier est vide</h2>'
} else {
  for (let element in basket) {
    $basketContainer.insertAdjacentHTML("afterbegin", `
    <ul>
        <li>
        <img src=".${basket[element].img}">
        <p>${basket[element].quantity}  -  ${basket[element].title} ${basket[element].price}€ TTC </p>
        <button data-product='${basket[element].id}' class='supp'>Supprimer</button>
        <button data-product='${basket[element].id}' class='
        </li>
    </ul>
    `)
  };
}
const $supp = document.querySelectorAll('supp');
console.log($supp)
$supp.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log('click')
    if (products[index].id === Number(item.getAttribute("data-product"))) {
      console.log(products[index])
      const basket = new Basket()
      if (products[index].quantity < 1)
        basket.remove(products[index])
    }
  });
});