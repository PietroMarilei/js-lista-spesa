// // Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// const groceryList = [
//     "milk",
//     "cheese",
//     "yogurt",
//     "vegetables",
// ];

// const ulElement = document.createElement('ul');
// document.querySelector('.col').appendChild(ulElement);

// let k = 0;
// while (k < groceryList.length) {
//     console.log(groceryList[k]);

//     const liElement = document.createElement("li");
//     liElement.innerHTML = groceryList[k];
//     document.querySelector('ul').appendChild(liElement);

//     k++
// }

const listaSpesa = [
    "pane",
    "pane",
    "latte",
    "uova",
    "cose",
    "robe",
]

const listaEl = document.querySelector('.lista');
console.log(listaEl);

let y = 0
while (y < listaSpesa.length) {
    listaEl.insertAdjacentHTML(listaEl, `${listaSpesa[y]}`)
}