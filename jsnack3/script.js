/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

usiamo un array vuoto

for loop finchè non è 10, pushando nell'array

then, console.log(array)

reduce.array

print
*/


//la mia array

let arrayDiAddendi = [];

for (let i=0; i<10; i++){
    let nuovoElemento = Number(prompt("Inserisci il "+(i+1)+"° elemento")); //number è un METODO per parsare la stringa in numero float
    arrayDiAddendi.push(nuovoElemento);
}

console.log(arrayDiAddendi);

//reduce è un METODO che riduce gli elementi alla loro somma (o differenza)
let valoreIniziale = 0;

let addizione = arrayDiAddendi.reduce( //lancia una funzione che somma, restituisce il risultato, finché non soddisfa la condizione. A, B.
  (valorePrecedente, valoreAttuale) => valorePrecedente + valoreAttuale,
  valoreIniziale);

console.log(addizione);