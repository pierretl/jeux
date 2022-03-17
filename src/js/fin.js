const MESSAGE = document.querySelector('.js_message-fin');
const AFFICHE_SOLUTION = document.querySelector('.js_affiche-solution');
const DOM_SOLUTION = document.querySelector('.js_solution');
const DOM_RESUME = document.querySelector('.js_resume');

function gagne(){
    MESSAGE.innerHTML = `Gagné !`;
    ecranFin();
    afficheResume();
    effaceSauvegarde();
}

function perdu(){
    MESSAGE.innerHTML = `Perdu !`;
    ecranFin();
    afficheSolution();
    afficheResume();
    effaceSauvegarde();
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

function afficheSolution() {

    //initialise les datas SOLUTION
    SOLUTION = {crant:INPUT_TIRAGE.value.split(",")};

    //généré la solution
    let solutionTemplate = document.querySelector('#solution').innerHTML;
    let compile = Handlebars.compile(solutionTemplate);
    DOM_SOLUTION.innerHTML = compile(SOLUTION);
    
    //affiche le bloc
    AFFICHE_SOLUTION.classList.remove('hide');
}

function afficheResume() {
    //généré le résumé
    let resumeTemplate = document.querySelector('#resume').innerHTML;
    let compile = Handlebars.compile(resumeTemplate);
    DOM_RESUME.innerHTML = compile(PLATEAU);

    console.log(PLATEAU);
}

function effaceSauvegarde() {
    localStorage.removeItem('tirage');
    localStorage.removeItem('plateau');
    localStorage.removeItem('difficulte');
    localStorage.removeItem('essaiNumero');
}