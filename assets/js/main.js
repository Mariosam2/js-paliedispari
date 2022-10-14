/* Traccia 
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma (parola identica se letta da entrambi i lati)
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// Prendo la parola come stringa dall'utente la leggo da destra verso sinistra in un loop "al contrario", salvo la stringa e la confronto con la stringa data dall'utente

//Strumenti
//prompt
//Number()
//document.createElement()
//function
//for loop
//string methods 
//reverse()


const container = document.querySelector('.container');
const userWord = prompt('Inserisci una parola'); 
const userEvenOdd = prompt('Inserisci "pari" o "dispari"');
const userNum = Number(prompt('Inserisci un numero da 1 a 5'));
//creo elemento html
const boxEl = document.createElement('div');
boxEl.classList.add('box');
container.append(boxEl);
// userò solo la soluzione 1
if(isPalindrome(userWord)){
    boxEl.innerHTML = "La parola inserita è palindromo" + "<br>";
} else {
    boxEl.innerHTML = "La parola inserita non è palindromo" + "<br>";
}

if(isEvenOddGame(userEvenOdd, userNum)){
    boxEl.innerHTML += "Hai vinto" + "<br>";
} else {
    boxEl.innerHTML += "Hai perso" + "<br>";
}

// creazione dei metodi
//soluzione 1
function isPalindrome(word) {
    // case insesitive
    word = word.toLocaleLowerCase();
    //console.log(word);
    // rimozione degli spazi
    word = word.replace(' ','');
    // controllo che la parola inserita non sia vuota
    if(word === ''){
        return false;
    }
    let reversedWord = '';
    // percorro la stringa da destra verso sinistra
    for(let i = word.length - 1; i >= 0; i--){
        //console.log(word[i]);
        reversedWord += word[i];
    }
    //console.log(word,reversedWord)
    // controllo se la parola è palindromo
    if(word === reversedWord){
        return true;
        
    } 
    return false;
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
    const resultWord = word.filter(element => element !== ' ');
    // controllo che la parola inserita non sia vuota
    if (resultWord.length === 0){
        return false;
    }
    // inversione della parola
    const reversedWord =  word.filter(element => element !== ' ').reverse();
    //console.log(resultWord, reversedWord); 
    // controllo se la parola è palindromo
    for (let i = 0; i < resultWord.length; i++) {
        if(resultWord[i] !== reversedWord[i]){
            return false;
        }
    
    }
    return true;
    
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max) + min;
}

function isEvenOddGame(string, num){
    //genero un numero random
    const randomNum = Math.floor(getRandomArbitrary(1,5));
    console.log(randomNum);
    //calcolo la somma
    const sum = randomNum + num;
    console.log(sum)
    if(string.toLocaleLowerCase() === "pari" && sum % 2 == 0){
        return true;
    } else if(string.toLocaleLowerCase() === "dispari" && sum % 2 != 0) {
        return true;
    }
    return false;    

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
     const testWord = testsArray[i];
     console.log(testPalindrome(testWord), testPalindromeReverse(testWord);
}

function testPalindrome(word){
    return isPalindrome(word);
    
}

function testPalindromeReverse(word){
    return isPalindromeReverse(word);
}  */