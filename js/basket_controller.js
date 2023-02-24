import Basket from "./modules/Basket.js"


//Affichage du panier en recuprant les données du LocalStorage
const $basketContainer = document.querySelector('.basket-container')
const basket = JSON.parse(localStorage.getItem('basket'))


if (basket.length === 0) {
  $basketContainer.innerHTML = '<h2>Le panier est vide</h2>'
} else {
  for (let element in basket) {
    const $list = document.createElement('ul')
    $basketContainer.appendChild($list)
    const $item = document.createElement('li');
    $list.appendChild($item);
    const $img = document.createElement('img')
    $img.src = '.' + basket[element].img
    $item.appendChild($img)
    const $title = document.createElement('p')
    $title.innerHTML = `${basket[element].quantity}  -  ${basket[element].title} ${basket[element].price}€ TTC`
    $item.appendChild($title)
    const $suppBtn = document.createElement('button')
    $suppBtn.setAttribute('class', 'supp')
    $suppBtn.setAttribute('data-id', `${basket[element].id}`)
    $suppBtn.innerHTML = 'Supprimer'
    $item.appendChild($suppBtn)
  }

  const $supp = document.querySelectorAll('.supp')
  $supp.forEach((item) => {
    item.addEventListener("click", () => {


      const basket = new Basket()
      console.log(item.getAttribute('data-id'))
      basket.remove(Number(item.getAttribute('data-id')))
      location.reload()

    });
  });
}
