/*In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.

Array di nomi

prompta il nome

if presente bene, altrimenti no


*/


let listaInvitati = ["Jim Browning", "Mario Falcone", "Anne Jhonson", "Reverendo Smith", "Arthur Shelby","Jhon Wayne"]; //più corretto let, const funziona comunque
console.log(listaInvitati);

let input = prompt ("Scrivi il tuo nome");
console.log(input+" controlliamo se sei invitato");


//dichiariamo la nuova mail
let newUser;
//input è nella array degli invitati?
let trovato = false;

for (let i=0; i < listaInvitati.length; i++) {
    if (listaInvitati[i] == input) {
        trovato=true;
        break; //uscita anticipata dal loop
    }
}

if(trovato) {
    alert("Benvenuto" + listaInvitati[i]);
}else {
    //questo è il caso in cui non ho trovato l'utente
    alert("Non è in lista");
    }
