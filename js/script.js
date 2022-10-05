// Variabili dei dati utente 

const firstName = prompt('Inserisci il tuo Nome');
console.log(firstName);

const lastName = prompt('Inserisci il tuo Cognome');
console.log(lastName);

const favColor = prompt('Qual è il tuo colore preferito?');
console.log(favColor);

const userAge = prompt('Quanti anni hai?');
console.log(userAge);

// Variabile per il messaggio di benvenuto 
const welcome = `
Ciao ${firstName}!
`;
console.log(welcome);

// Prendo l'H1 e ci inserisco dentro il messaggio di benvenuto 
const h1Text = document.getElementById('title');
h1Text.innerHTML = welcome;

// Prendo il button e tramite il metodo .addEventListener gli dico di eseguire una funzione onclick 
const myBtn = document.getElementById('my_btn');
myBtn.addEventListener('click', reveal);

// Funzione per inserire nel p #psw il testo con tutte le variabili dei dati utente 

function reveal() {
    document.getElementById('psw').innerHTML = `
    ${firstName}${lastName}${favColor}${userAge}
    `
}



