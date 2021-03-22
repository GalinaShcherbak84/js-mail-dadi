/*//Chiedere al utente la sua mail.
var mail = prompt('Inserisci il tuo indirizzo email.');
document.getElementById('email').innerHTML = "Indirizzo email inserito: " + mail;
//Lista di chi può accedere. 
var lista = ['tecno@gmail.com', 'marcocar@libero.it', 'dipiù@gmail.com','lina@mail.ru' ];
console.log(lista);
//Controllare che la mail inserita dal utente sia nella lista.
var user;
for (var i = 0; i < lista.length; i++){
    console.log(lista[i]);
    if (lista[i] === mail) {
        user = true;
        break
    }
}
    if (user ===true){
        document.getElementById('answer').innerHTML = 'Questo indirizzo è presente nella lista. Puoi accedere.'
    } else {
        document.getElementById('answer').innerHTML = "Questo indirizzo non è presente nella lista. l'accesso è negato."
    }
*/


    //Gioco dei dadi.
    //Generare un numero random da 1 a 6 per il giocatore.
    var giocatore = Math.floor(Math.random() * 6) + 1;
    document.getElementById('numero-giocatore').innerHTML = "il tuo numero è " + giocatore;
    //Generare un numero random da 1 a 6 per il computer.
    var computer = Math.floor(Math.random() * 6) + 1;
    document.getElementById('numero-computer').innerHTML = "il numero del computer è " + computer;
    if(giocatore > computer){
        document.getElementById('vincitore').innerHTML = "Hai vinto!";
    } else if( giocatore < computer){
        document.getElementById('vincitore').innerHTML = "Hai perso!";
    } else{
        document.getElementById('vincitore').innerHTML = "Pareggio!";
    }



