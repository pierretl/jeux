const BTN_REGLES = document.querySelector('.js_regles');
const BTN_FERMER_REGLES = document.querySelector('.js_fermer-regles');
const ECRAN_REGLES = document.querySelector('.js_ecran-regles');
const ZONE_BTN_REGLES = document.querySelector('.js_affiche-regle');
const ZONE_SWITCH = document.querySelector('.js_affiche-switch');

const ECRAN_DECHIFFREUR = document.querySelector('.js_ecran-dechiffreur');
const ECRAN_RECOMMENCEZ = document.querySelector('.js_ecran-recommencez');

BTN_REGLES.addEventListener('click', () => {
    ECRAN_COMMENCER.classList.add('hide');
    ZONE_BTN_REGLES.classList.add('hide');
    ECRAN_REGLES.classList.remove('hide');
    ECRAN_DECHIFFREUR.classList.add('hide');
    ECRAN_RECOMMENCEZ.classList.add('hide');
});

BTN_FERMER_REGLES.addEventListener('click', () => {
    masque(ECRAN_COMMENCER);
    masque(ZONE_BTN_REGLES);
    masque(ECRAN_REGLES);
    masque(ECRAN_DECHIFFREUR);
    masque(ECRAN_RECOMMENCEZ);
});

function masque(element) {
    let enCours = element.dataset.enCours;
    let elClass = element.classList;
    
    if (enCours === 'true' && elClass.contains('hide')) {
        elClass.remove('hide');
    } else {
        elClass.add('hide');
    }
}