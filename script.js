const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.Filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {style: 'currency',currency: 'BRL'})
    return newValue
} /* tolocaleString é pra formatar a moeda igual o Number formact*/

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
       <li>
       <img src=${product.src}>
       <p>${product.name}</p>
       <p class="item-price"> R$ ${formatCurrency(product.price)}</p>
       </li>
       `
    })
    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product, /* ... é spread operator os ..., para não colocar tudo somente o que quer alterar*/
        price: product.price * 0.9, /* 10% de desconto*/
    }))
    showAll(newPrices)
}
function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
    <li>
       <p>O Valor total dos itens é R$ ${formatCurrency(totalValue)} </p> 
    </li>
       `
}

function filterAllItens() {
    const filterJustVegan = menuOptions.filter(product => product.vegan)
    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions)) /* add uma função anonima para chamr só quando clica no botão, por causa dos parenteses chamando outra função, se for só uma não precisa*/
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllItens)
buttonFilterAll.addEventListener('click', filterAllItens)
















