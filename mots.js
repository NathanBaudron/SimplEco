// mots.js - Liste des mots à trouver
const mots = [
    "marché", "inflation", "crédit", "action", "dette", "pib", "budget", 
    "entreprise", "retraite", "assurance", "chômage", "prime", "mutuelle", 
    "devise", "plainte", "testament", "crise", "bénéfice", "comptabilité", 
    "caution"
];


let currentWordIndex = 0;

function getNextWord() {
    if (currentWordIndex < mots.length) {
        return mots[currentWordIndex++];
    } else {
        currentWordIndex = 0; // Reset si on atteint la fin de la liste
        return mots[currentWordIndex++];
    }
}