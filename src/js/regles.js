const BTN_REGLES = document.querySelector('.js_regles');
const BTN_FERMER_REGLES = document.querySelector('.js_fermer-regles');
const ECRAN_REGLES = document.querySelector('.js_ecran-regles');

const ECRAN_DECHIFFREUR = document.querySelector('.js_ecran-dechiffreur');
const ECRAN_FIN = document.querySelector('.js_ecran-fin');

BTN_REGLES.addEventListener('click', () => {
    ECRAN_REGLES.classList.remove('hide');
    ECRAN_COMMENCER.classList.add('hide');
    ECRAN_DECHIFFREUR.classList.add('hide');
    ECRAN_FIN.classList.add('hide');
});

BTN_FERMER_REGLES.addEventListener('click', () => {
    ECRAN_REGLES.classList.add('hide');
    ECRAN_COMMENCER.classList.remove('hide');
    ECRAN_DECHIFFREUR.classList.remove('hide');
    ECRAN_FIN.classList.remove('hide');
});