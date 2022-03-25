/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

let prompt 1
let prompt 2
rendili da string number

if a > b printa a
else printa b  || se sono uguali sarà comunque il maggiore*/

let a = prompt("Inserisci un numero");
a = parseInt(a);
let b = prompt("inseriscine un altro");
b = parseInt(b);

if (a > b) {
    document.getElementById("output").innerHTML = a;
}else{
    document.getElementById("output").innerHTML = b;
}
