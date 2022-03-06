let sauvegardeTirage = localStorage.getItem('tirage');
let sauvegardePlateau = localStorage.getItem('plateau');
let sauvegardeDifficulte = localStorage.getItem('difficulte');
let sauvegardeEssaiNumero = localStorage.getItem('essaiNumero');

//reprise d'une partie sauvegarder
if (sauvegardeTirage !== null 
    && sauvegardePlateau !== null 
    && sauvegardeDifficulte !== null 
    && sauvegardeEssaiNumero !== null) {
    
    //paramètre le tirage
    INPUT_TIRAGE.value = sauvegardeTirage;

    //paramètre la diffculté
    formulaire(
        DIFFICULTE[sauvegardeDifficulte].crant,
        DIFFICULTE[sauvegardeDifficulte].nbCouleur,
        CONTENEUR_FORMULAIRE
    );

    //Adapte l'interface si besoin
    document.documentElement.setAttribute('data-diffulte', sauvegardeDifficulte);

    //Créer le plateau
    plateau(
        DIFFICULTE[sauvegardeDifficulte].nbEssai, 
        DIFFICULTE[sauvegardeDifficulte].crant
    );

    // change l'etat des écrans
    ECRAN_COMMENCER.dataset.enCours = 'false';
    ECRAN_DECHIFFREUR.dataset.enCours = 'true';

    // Récupére le plateau
    PLATEAU = JSON.parse(sauvegardePlateau);
   
    // paramètre la manche actuel
    setPresent(
        Number(sauvegardeEssaiNumero),
        sauvegardeDifficulte
    );

    // Construit le HTML du PLATEAU
    compileHanlebars();

    //Masque ecran commencez
    ECRAN_COMMENCER.classList.add('hide');

    //Nous déplace sur la manche actuel si nécessaire
    document.querySelector('.js_actuel').scrollIntoView();

} 