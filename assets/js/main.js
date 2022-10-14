/* Traccia 
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma (parola identica se letta da entrambi i lati)
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// Prendo la parola come stringa dall'utente la leggo da destra verso sinistra in un loop "al contrario", salvo la stringa e la confronto con la stringa data dall'utente

//prompt
//function
//for loop
//string methods 
//reverse

/* const userWord = prompt('Inserisci una parola'); 

if(isPalindrome(userWord)){
    
} */

// creazione dei metodi
//soluzione 1
function isPalindrome(word) {
    // case insesitive
    word = word.toLocaleLowerCase();
    let reversedWord = '';
    //console.log(word);
    // percorro la stringa da destra verso sinistra
    for(let i = word.length - 1; i >= 0; i--){
        //console.log(word[i].toString());
        reversedWord += word[i];
    }
    // rimozione degli spazi
    word = word.replace(' ','');
    if(word === ''){
        return false;
    }
    reversedWord =reversedWord.replace(' ','');
    //console.log(word,reversedWord)
    // controllo se la parola è palindromo
    if(word === reversedWord){
        return true;
        
    } else {
        return false;
       
    }
}
// soluzione 2 reverse()
function isPalindromeReverse (string){
    // la parola è definita come un array di caratteri per poter usare il metodo reverse
    let word = [];
    // creazione della parola (case insensitive)
    for(let i = 0; i < string.length; i++){
        word.push(string[i].toLocaleLowerCase());
    }
    // rimozione degli spazi
    const resultWord = word.filter(element => element !== ' ' );
    if (resultWord.length === 0){
        return false;
    }
    // inversione della parola
    let reversedWord = word.filter(element => element !== ' ' ).reverse();
    //console.log(resultWord, reversedWord);
    // controllo se la parola è palindromo
    for (let i = 0; i < resultWord.length; i++) {
        if(resultWord[i] !== reversedWord[i]){
            return false;
        }
    
    }
    return true;
    
}




//test 
/* const testsArray = [
    'Acca',
    'Ada',
    'Kayak',
    'Palindromo',
    'Test',
    'Idi',
    'Pop',
    'Ingegni',
    ' ',
    'Ada Idi',
    'Ada Ada',
]



for(let i = 0; i < testsArray.length; i++){
     console.log( testPalindrome(testsArray[i]), testPalindromeReverse(testsArray[i]));
}

function testPalindrome(word){
    return isPalindrome(word);
    
}

function testPalindromeReverse(word){
    return isPalindromeReverse(word);
}  */