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
}