// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const groceryList = [
    "milk",
    "cheese",
    "yogurt",
    "vegetables",
];

const ulElement = document.createElement('ul');
document.querySelector('.col').appendChild(ulElement);

let k = 0;
while (k < groceryList.length) {

    const thisItem = groceryList[k];
    console.log(groceryList[k]);


    const liElement = document.createElement("li");
    liElement.innerHTML = groceryList[k];
    document.querySelector('ul').appendChild(liElement);


    k++
}