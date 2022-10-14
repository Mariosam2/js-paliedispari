/* Traccia 
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma (parola identica se letta da entrambi i lati)
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// Prendo la parola come stringa dall'utente la leggo da destra verso sinistra usando charAt
// in un loop "al contrario", salvo la stringa e la confronto con la stringa data dall'utente

// charAt(position)
//prompt
//function
//for loop

const userWord = prompt('Inserisci una parola');

// creazione dei metodi
function isPalindrome(string) {
    let rightToLeft;
    // percorro la stringa da destra verso sinistra
    for(let i = string.length; i > 0; i--){
        rightToLeft.concat(string.charAt(i));
    }

    if(string === rightToLeft){
        console.log('is palindrome');
    } else {
        console.log('is not palindrome');
    }
}