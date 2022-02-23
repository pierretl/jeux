const BTN_REGLES = document.querySelector('.js_regles');
const BTN_FERMER_REGLES = document.querySelector('.js_fermer-regles');
const ECRAN_REGLES = document.querySelector('.js_ecran-regles');

const ECRAN_DECHIFFREUR = document.querySelector('.js_ecran-dechiffreur');
const ECRAN_RECOMMENCEZ = document.querySelector('.js_ecran-recommencez');

BTN_REGLES.addEventListener('click', () => {
    ECRAN_REGLES.classList.remove('hide');
    ECRAN_COMMENCER.classList.add('hide');
    ECRAN_DECHIFFREUR.classList.add('hide');
    ECRAN_RECOMMENCEZ.classList.add('hide');
});

BTN_FERMER_REGLES.addEventListener('click', () => {
    ECRAN_REGLES.classList.add('hide');
    ECRAN_COMMENCER.classList.remove('hide');
    ECRAN_DECHIFFREUR.classList.remove('hide');
    ECRAN_RECOMMENCEZ.classList.remove('hide');
});