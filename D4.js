/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(3, 4))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    let somma;
    if (a === b) {
        somma = (a + b) * 3;
    } else {
        somma = a + b;
    }
    return somma;
}

console.log(crazySum(2, 3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a, b = 19) {
    let diff;
    if (a > 19) {
        diff = (a - b) * 3;
    } else {
        diff = a - b;
    }
    return diff;
}

console.log(crazyDiff(5))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (!isNaN(n) && n >= 20 && n <= 100 || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
    if (typeof string === "string") {
        if (!string.startsWith("EPICODE")) {
            return "EPICODE " + string;
        } else {
            return string;
        }
    } else {
        return "non è una stringa";
    }
}

console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
    if (n > 0 && n % 3 === 0 || n % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(9))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
    return string.split("").reverse().join("");
}

console.log(reverseString("ocraM"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
    return string.replace(/\b\w/g, (a) => {
        return a.toUpperCase();
    });
}

console.log(upperFirst("ciao a tutti"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
    return string.slice(1,-1);
}

console.log(cutString("ciao belli"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let randomArray = []
    if (!isNaN(n)) {
        for (let i = 0; i < n; i++){
            let randomNumber = Math.floor(Math.random()* 11);
            randomArray.push(randomNumber);
        }
    }
    return randomArray;
}

console.log(giveMeRandom(6))