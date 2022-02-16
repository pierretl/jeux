const COULEURS = ["limegreen", "deepskyblue", "firebrick", "gold", "darkorange", "hotpink", "brown"];
let inputTirage = document.getElementById('tirage');



let tirage = (difficulteChoisi) => {
    
    let nbCouleur = DIFFICULTE[difficulteChoisi].nbCouleur;
    let nbCrant = DIFFICULTE[difficulteChoisi].crant;

    let c = 0;
    let t = 0;

    let couleurs = [];
    let tirage = [];

    //Nouveau de tableau de couleurs en fonction de la difficulté
    while (c < nbCouleur) {
        couleurs.push(COULEURS[c]);
        c++;
    }

    // Définit un tirage aléatoire
    while (t < nbCrant) {
        let nouveauTirage = couleurs[Math.floor(Math.random() * couleurs.length)];
        tirage.push(nouveauTirage);
        t++;
    }

    //stocke le tirage
    inputTirage.value = tirage;
}