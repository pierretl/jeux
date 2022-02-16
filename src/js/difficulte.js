const DOM_DIFFICULTE_SELECT = document.getElementById('difficulte');
const DIFFICULTE = {
    'Debug' : {
        crant :     3,
        nbEssai :   3,
        nbCouleur : 3
    },
    'Normal' : {
        crant :     4,
        nbEssai :   10,
        nbCouleur : 6
    },
    'Difficile' : {
        crant :     5,
        nbEssai :   12,
        nbCouleur : 7
    }
};



// Paramètre la liste déroulante
for (const difficulte in DIFFICULTE) {
    DOM_DIFFICULTE_SELECT.innerHTML += `<option value="${difficulte}">${difficulte}</option>`;
}