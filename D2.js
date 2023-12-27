/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 5
let num2 = 19

function grosso(a, b) {
  if (a > b) {
    return console.log(`${a} è più grande di ${b}`);
  } else if (b > a) {
    return console.log(`${b} è piu grande di ${a}`);
  } else {
    return console.log(`${a} è uguale a ${b}`)
  }
}

grosso(num1, num2)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function diverso(a) {
  if (a !== 5) {
    return console.log("not equal");
  } else {
    return console.log("equal");
  }
}

diverso(num1)

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function divisibilePer5(a) {
  if (a % 5 === 0) {
    return "divisibile per 5"
  } else {
    return "non è divisibile per 5"
  }
}

console.log(divisibilePer5(num1))

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num3 = 12
let num4 = 4

function verifica(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
    return "Verifica superata"
  } else {
    return "Verifica NON superata"
  }
}
console.log(verifica(num3, num4))

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 50
let spedizione = 10

function promozione(a, b) {
  let c = a + b;
  if (a > 50) {
    return `La spesa totale è ${a}`
  } else {
    return `La spesa totale è ${c}`
  }
}

console.log(promozione(totalShoppingCart, spedizione))

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let sconto = 0.8

function blackFriday(a, b, c) {
  let totale;
  if (a > 50) {
    totale = a * c
  } else {
    totale = (a + b) * c
  }
  return `La spesa totale è ${totale}` // si potrebbe sostituire con ${totale.toFixed(2)}`
}

console.log(blackFriday(totalShoppingCart, spedizione, sconto))

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numero1 = 8
let numero2 = 4
let numero3 = 7

function ordina(a, b, c) {
  if (a > b && b > c) {
    console.log(`${a} > ${b} > ${c}`)
  } else if (a > b && b < c && a > c) {
    console.log(`${a} > ${c} > ${b}`)
  } else if (b > a && a > c) {
    console.log(`${b} > ${a} > ${c}`)
  } else if (b > a && c > a && b > c) {
    console.log(`${b} > ${c} > ${a}`)
  } else if (c > a && a > b) {
    console.log(`${c} > ${a} > ${b}`)
  } else if (c > a && b > a && c > b) {
    console.log(`${c} > ${b} > ${a}`)
  } else {
    console.log("almeno 2 dei 3 numeri sono uguali fra di loro")
  }
}

ordina(numero1, numero2, numero3)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore1 = 2

function scopriTipo(a) {
  if (typeof a === "number") {
    console.log(`${a} è un numero`);
  } else if (typeof a === "string") {
    console.log(`${a} è una stringa`)
  } else {
    console.log(`${a} non è né un numero nè una stringa`)
  }
}

scopriTipo(valore1)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num5 = 284248923

function pariOdispari(a) {
  if (a % 2 === 0) {
    console.log(`${a} è un numero pari`)
  } else if (a % 2 !== 0) {
    console.log(`${a} è numero dispari`)
  } else {
    console.log(`${a} la variabile non è numero oppure è uguale a 0`)
  }
}

pariOdispari(num5)

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numeri = []

function riempiArray () {
  for (let i = 1; i < 11; i++){
    numeri.push(i)
  }
}
riempiArray()
console.log(numeri)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri.pop()
numeri.push(100)
console.log(numeri)