const BTN_RECOMMENCER = document.querySelector('.js_btn-recommencez');



BTN_RECOMMENCER.addEventListener('click', () => {

    //DEBUG DEV
    ECRAN_DEBUG.classList.add('hide');

    //Affiche écran commencez
    ECRAN_COMMENCER.classList.remove('hide');

    //Vide les datas PLATEAU
    PLATEAU = {manche:[]};

    //Supprime le plateau
    ECRAN_DECHIFFREUR.innerHTML = "";

    //Masque l'écran déchiffreur
    ECRAN_DECHIFFREUR.classList.add('hide');

    //Masque l'écran recommencez
    ECRAN_RECOMMENCEZ.classList.add('hide');

});