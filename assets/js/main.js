// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const groceryList = [
    "milk",
    "cheese",
    "yogurt",
    "vegetables",
];

document.createElement('ul');
document.querySelector('col').appendChild('ul');

let k = 0;
while (k < groceryList.length) {

    const thisItem = groceryList[k];
    console.log(groceryList[k]);





    k++
}