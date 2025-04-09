// mots.js - Liste des mots à trouver
const mots = [
    "liberalisme", "deflation", "krach", "allocations", "fiscalite", "imposition", 
    "investissement", "concurrence", "dividende", "rendement", "bourse", 
    "fusion", "acquisition", "filiale", "rtt", "heritage", "quotas", 
    "hypotheque", "microentreprise", "assurance-vie"
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
