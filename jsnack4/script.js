/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine


creo array vuoto
chiedo sei prompt
solo se è dispari lo leggo
stampa*/

let arrayDiAddendi = [];

//voglio una funzione che decide se l'elemento + dispari.

function decidiIfDispari(numeroInseritoDallUtente) {
    if (numeroInseritoDallUtente % 2 === 0) {
        return arrayDiAddendi.push(numeroInseritoDallUtente);
    }
}    
//---------------------------------------

// il codice che runna
//filtro l'array lanciando i prompt, ed esegio la funzione per decidere se è pari

for (let i=0; i<6; i++){
    let ennesimo = i+1;
    let nuovoElemento = Number(prompt("Inserisci il "+ ennesimo +"° elemento")); //number è un METODO per parsare la stringa in numero float
    decidiIfDispari(nuovoElemento);
}
console.log(arrayDiAddendi);