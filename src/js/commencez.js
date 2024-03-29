const BTN_COMMENCER = document.querySelector('.js_btn-commencez');
const ECRAN_COMMENCER = document.querySelector('.js_ecran-commencez');
const ECRAN_DEBUG = document.querySelector('.js_debug');



BTN_COMMENCER.addEventListener('click', () => {

    //DEBUG DEV
    //ECRAN_DEBUG.classList.remove('hide');
    //ECRAN_RECOMMENCEZ.classList.remove('hide');

    //Masque ecran commencez
    ECRAN_COMMENCER.classList.add('hide');

    //Génére un tirage
    let difficulteChoisi = DOM_DIFFICULTE_SELECT.value;
    tirage(difficulteChoisi);

    //Créer le formulaire de validation
    formulaire(
        DIFFICULTE[difficulteChoisi].crant,
        DIFFICULTE[difficulteChoisi].nbCouleur,
        CONTENEUR_FORMULAIRE
    );

    //sauvegarde de la dificulté
    localStorage.setItem('difficulte', difficulteChoisi);

    //Adapte l'interface si besoin
    document.documentElement.setAttribute('data-diffulte', difficulteChoisi);

    //Créer le plateau
    plateau(
        DIFFICULTE[difficulteChoisi].nbEssai, 
        DIFFICULTE[difficulteChoisi].crant
    );

    // change l'etat des écrans
    ECRAN_COMMENCER.dataset.enCours = 'false';
    ECRAN_DECHIFFREUR.dataset.enCours = 'true';

    //Nous déplace sur la manche actuel si nécessaire
    document.querySelector('.js_actuel').scrollIntoView();
});