/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

let prompt parola 1
let lunghezza1 parola1.lunghezza

let prompt parola 2
let lunghezza2 parola2.lunghezza

if lung1 > lung 2 printa parola1
    else if lung 2 > lung 1 printa parola 2
    else printa "sono lunghe uguali"*/

    let primaParola = prompt("Inserisci una parola");
    let primaLunghezza = primaParola.length;

    let secondaParola = prompt("Inseriscine un altra");
    let secondaLunghezza = secondaParola.length;

    let piùLunga;

    if (primaLunghezza > secondaLunghezza) {
        piùLunga = primaParola;
    }else if(primaLunghezza < secondaLunghezza) {
        piùLunga = secondaParola;
    }else{
        piùLunga = "Nessuna delle due";
    }
    
    alert(piùLunga + " ha più lettere");