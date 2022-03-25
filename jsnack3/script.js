/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

usiamo un array vuoto

pusha 1, pusha 2, pusha 3 dal prompt if i<10

else esco

fuori, li elenco e li conto*/


//la mia array
let daSommare = [];

/*let input1 = prompt("Primo numero");
input1 = parseInt(input1);
let input2 = prompt("Secondo numero");
input2 = parseInt(input2);*/


for (let i=0; i<10; i++){
    pushata = prompt("Inserisci un numero");
    daSommare.push(pushata);
    console.log(pushata);
}

console.log(daSommare);

let somma = daSommare.reduce(getSum);
console.log(somma);
alert(somma);

//aaaaaaaaaa
function getSum(total, num) {
  return total + num;
}