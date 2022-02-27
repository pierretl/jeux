const MESSAGE = document.querySelector('.js_message-fin');

function gagne(){
    MESSAGE.innerHTML = `Gagné !`;
    ecranFin();
}

function perdu(){
    MESSAGE.innerHTML = `Perdu !`;
    ecranFin();
}

function ecranFin() {
    // affiche l'ecrande fin
    ECRAN_RECOMMENCEZ.classList.remove('hide');

    // masque le plateau
    ECRAN_DECHIFFREUR.classList.add('hide');

    // change etat écran
    ECRAN_DECHIFFREUR.dataset.enCours = 'false';

    // masque bouton aide et switch theme
    ZONE_BTN_REGLES.classList.add('hide');
    ZONE_SWITCH.classList.add('hide');
}