/* Traccia 
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma (parola identica se letta da entrambi i lati)
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// Prendo la parola come stringa dall'utente, la metto come array di char e la leggo da entrambi i lati appendendo i char ad una stringa, confronto le due stringhe alla fine

const userWord = prompt('Inserisci una parola');

const charArray []