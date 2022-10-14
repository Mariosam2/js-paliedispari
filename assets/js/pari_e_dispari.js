//Traccia
/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */


//Strumenti
//prompt
//Number()
//document.createElement()
//function

const container = document.querySelector('.container');
const userEvenOdd = prompt('Inserisci "pari" o "dispari"');
const userNum = Number(prompt('Inserisci un numero da 1 a 5'));
const boxEl = document.createElement('div');
boxEl.classList.add('box');
container.append(boxEl);
if(isEvenOddGame(userEvenOdd, userNum)){
    boxEl.innerHTML = "Hai vinto";
} else {
    boxEl.innerHTML = "Hai perso";
}


// creazione dei metodi

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
