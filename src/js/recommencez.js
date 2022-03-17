const BTN_RECOMMENCER = document.querySelector('.js_btn-recommencez');



BTN_RECOMMENCER.addEventListener('click', () => {

    //DEBUG DEV
    ECRAN_DEBUG.classList.add('hide');

    //Affiche écran commencez
    ECRAN_COMMENCER.classList.remove('hide');

    //Vide les datas PLATEAU
    PLATEAU = {manche:[]};

    //Supprime le plateau
    DOM_PLATEAU.innerHTML = "";

    //Masque l'écran déchiffreur
    ECRAN_DECHIFFREUR.classList.add('hide');

    //Masque l'écran recommencez
    ECRAN_RECOMMENCEZ.classList.add('hide');

    // Affiche bouton aide et switch theme
    ZONE_BTN_REGLES.classList.remove('hide');
    ZONE_SWITCH.classList.remove('hide');

    //Masque le bloc solution dans l'écran de fin
    SOLUTION.classList.add('hide');

});