// mots.js - Liste des mots à trouver
const mots = [
    "oligopsone", "oligopole", "batx", "amortissement", "liquidite", "creance", 
    "monopole", "liquidation", "faillite", "senat", "cac40", "gafam", 
    "cryptomonnaie", "quotient", "acompte", "interet", "capitalisme", 
    "communisme","soutenabilite","modele"
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
