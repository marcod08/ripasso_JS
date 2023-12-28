// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
let randomArray = []

function giveMeRandom(n) {
    if (!isNaN(n)) {
        for (let i = 0; i < n; i++) {
            let randomNumber = Math.floor(Math.random() * 11);
            randomArray.push(randomNumber);
        }
    }
}

function checkArray(n) {
    giveMeRandom(n);
    let somma = 0;
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] > 5) {
            console.log(`${randomArray[i]} è maggiore di 5`)
        } else if (randomArray[i] < 5) {
            console.log(`${randomArray[i]} è minore di 5`)
        } else {
            console.log(`${randomArray[i]} è uguale a 5`)
        } somma += randomArray[i]
    } console.log(`la somma dei valori è ${somma}`)
}

checkArray(2)
console.log(randomArray)

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
    { id: 1, name: 'Prodotto A', price: 19.99, quantity: 2 },
    { id: 2, name: 'Prodotto B', price: 29.99, quantity: 1 },
    { id: 3, name: 'Prodotto C', price: 9.99, quantity: 3 },
];

function shoppingCartTotal() {
    let somma = 0;
    shoppingCart.forEach(element => {
        somma += (element.price * element.quantity);
    }); return `Il totale è ${somma.toFixed(2)} €;`
}

console.log(shoppingCartTotal())

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let nuovoProdotto = { id: 4, name: 'Prodotto D', price: 39.99, quantity: 1 }

function addToShoppingCart() {
    shoppingCart.push(nuovoProdotto);
    shoppingCartTotal();
}

addToShoppingCart()
console.log(shoppingCartTotal())

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart() {
    let prodottoPiuCostoso = shoppingCart[0]
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price > prodottoPiuCostoso.price){
            prodottoPiuCostoso = shoppingCart[i]
        }   
    } return prodottoPiuCostoso
}

console.log(maxShoppingCart())

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart () {
    return shoppingCart[shoppingCart.length - 1]
}

console.log(latestShoppingCart())

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil (x) {
    let contatore = 0;
    while (contatore < 3) {
        let random = Math.floor(Math.random() * 10);
        if (random > x) {
            contatore++;
        } else {
            contatore = 0;
        }
        console.log(random);
    }
}

console.log(loopUntil(3))

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
