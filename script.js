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
const INPUT_SWITCH = document.getElementById('theme')
const PREFERENCE_THEME = localStorage.getItem('mode');

if (PREFERENCE_THEME){
    document.documentElement.setAttribute('data-mode', PREFERENCE_THEME);
    if (PREFERENCE_THEME === 'light') {
        INPUT_SWITCH.checked = true;
    } 
} else {
    document.documentElement.setAttribute('data-mode', 'dark');
    localStorage.setItem('mode', 'dark');
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-mode', 'light');
        localStorage.setItem('mode', 'light');
    }else{
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem('mode', 'dark');
    }
}

INPUT_SWITCH.addEventListener('change', switchTheme, false);
const DOM_DIFFICULTE_SELECT = document.getElementById('difficulte');
const DIFFICULTE = {
    /**/
    'Debug' : {
        crant :     3,
        nbEssai :   3,
        nbCouleur : 3
    },
    
    'Normal' : {
        crant :     4,
        nbEssai :   10,
        nbCouleur : 6
    },
    'Difficile' : {
        crant :     5,
        nbEssai :   12,
        nbCouleur : 8
    }
};



// Paramètre la liste déroulante
for (const difficulte in DIFFICULTE) {
    DOM_DIFFICULTE_SELECT.innerHTML += `<option value="${difficulte}">${difficulte}</option>`;
}
// Affiche/masque la liste déroulante
function dropdown(e) {

    if ( e.getAttribute('aria-expanded') === 'true' ) {
        e.setAttribute('aria-expanded', 'false');
        e.parentNode.classList.remove('--ouvert');
        e.parentNode.querySelector('ul').classList.add('hide');
    } else {
        e.setAttribute('aria-expanded', 'true');
        e.parentNode.classList.add('--ouvert');
        e.parentNode.querySelector('ul').classList.remove('hide');
    }

}

// Récupère la couleur selectionné
function choixCouleur(e, idCouleur, idItem) {
    let labelDropdown = e.parentNode.parentNode.parentNode.querySelector('.js_dropdown-label');
    
    // Apercus de la couleru selectionner
    if ( labelDropdown.dataset.code != '' ) {
        //  Met a jour la couleur du bouton
        labelDropdown.classList.remove(labelDropdown.dataset.code);
        labelDropdown.classList.add(`code${idCouleur}`);
        labelDropdown.dataset.code = `code${idCouleur}`;
    } else {
        // Affiche a couleur dans le bouton
        labelDropdown.classList.add(`code${idCouleur}`);
        labelDropdown.dataset.code = `code${idCouleur}`;
    }

    // Saisi la valeur dans le formulaire avant correction
    CONTENEUR_FORMULAIRE.children[idItem].value = `code${idCouleur}`;

    // Ferme la dropdown
    dropdown(labelDropdown);
}
function essaiCombinaison(essaiNumero) {

    //récupération du tirage
    let tirage = INPUT_TIRAGE.value.split(",");

    //recupération des données saisi
    var combinaison = [];
    var selects = document.querySelectorAll(".js_select");
    for (var e = 0; e < selects.length; e++) {

        // si une valeur n'est pas saisi, finir le script 
        if ( selects[e].value == "" ) {
            return false;
        } else {
            combinaison.push(selects[e].value);
        }

    }

    // Correction
    if (JSON.stringify(combinaison) == JSON.stringify(tirage)) {
        gagne();
    } else {

        // vérification si la manche est autorisé
        let difficulteChoisi = DOM_DIFFICULTE_SELECT.value;
        if (DIFFICULTE[difficulteChoisi].nbEssai == essaiNumero) {
            perdu();
            //return false;
        }


        let nbNoir = 0;
        let nbBlanc = 0;

        //console.log(`tirage : ${tirage} \ncombinaison : ${combinaison}`);

        //--------------------------------------------------------------
        // Gestion des Noir : bonne couleur bien placé
        var tirageSansNoir = [];
        var combinaisonSansNoir = [];
        for (var i = 0; i < tirage.length; i++) {
            if (tirage[i] === combinaison[i]) {
                nbNoir++;
            } else {
                tirageSansNoir.push(tirage[i]);
                combinaisonSansNoir.push(combinaison[i]);
            }
        }

        //--------------------------------------------------------------
        // Gestion des Blanc : bonne couleur mal placé
        for (var j = 0; j < tirageSansNoir.length; j++) {
            if (tirageSansNoir[j] != "") {
                for (var k = 0; k < combinaisonSansNoir.length; k++) {
                    if (tirageSansNoir[j] === combinaisonSansNoir[k]) {
                        tirageSansNoir[j] = "";
                        combinaisonSansNoir[k] = "";
                        nbBlanc++;
                        break;
                    }
                }
            }
        }

        //console.log(`total noir : ${nbNoir} \ntotal blanc : ${nbBlanc}`);

        //--------------------------------------------------------------
        //Met à jour le plateau
        majPlateau(essaiNumero, combinaison, nbNoir, nbBlanc);
        
    }
}
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
const CONTENEUR_FORMULAIRE =  document.querySelector('.js_form');

function formulaire(crant, couleurs, formulaire) {

    // création des options
    let options = '';

    // Option vide par défaut
    options += `<option value="">Selectionnez</option>`;

    // Ajout des options selon les couleurs
    for (let i = 1; i < (couleurs+1); i++) {
        options += `<option value="code${i}">Code ${i}</option>`;
    }

    // création du nombre de select nécessaire
    let n = 0;
    let selects = ''
    while (n < crant) {
        selects += `<select id="crant-${n}" class="js_select">${options}</select>`;
        n++;
    }

    // Ajout du formulaire à la page
    formulaire.innerHTML = selects;

}
let PLATEAU = {manche:[]};
const DOM_PLATEAU = document.querySelector('.js_plateau');

function plateau(nbEssai, nbCrant) {

    //initialise les datas PLATEAU
    for (let i = 0; i < nbEssai; i++) {

        PLATEAU.manche[i] = {};
        PLATEAU.manche[i].essaiNumero = i + 1 ;

        if ( i == 0) {
            //present
            setPresent(i);

        } else {
            //futur
            PLATEAU.manche[i].type = "Futur";
            PLATEAU.manche[i].nombreCrant = nbCrant;
        }
        
    }

    // Construit le HTML du PLATEAU
    compileHanlebars();

    // affiche le plateau
    ECRAN_DECHIFFREUR.classList.remove('hide');

}




function setPresent(essaiNumero, difficulteChoisi) {

    difficulteChoisi = difficulteChoisi || DOM_DIFFICULTE_SELECT.value;
    
    let nbCrant = DIFFICULTE[difficulteChoisi].crant;
    let nbCouleur = DIFFICULTE[difficulteChoisi].nbCouleur;

    PLATEAU.manche[essaiNumero].type = "Present";
    PLATEAU.manche[essaiNumero].dropdown = [];
    PLATEAU.manche[essaiNumero].dropdown.crant = [];

    for (let j = 0; j < nbCrant; j++) {
        PLATEAU.manche[essaiNumero].dropdown.crant[j] = [];
        PLATEAU.manche[essaiNumero].dropdown.crant[j].idCouleur = [];

        for (let k = 0; k < nbCouleur; k++) {
            PLATEAU.manche[essaiNumero].dropdown.crant[j].idItem = j;
            PLATEAU.manche[essaiNumero].dropdown.crant[j].idCouleur[k] = k+1;
        }
    }
}




function compileHanlebars(){
    let dechiffreur = document.querySelector('#manche').innerHTML;
    let compile = Handlebars.compile(dechiffreur);
    DOM_PLATEAU.innerHTML = compile(PLATEAU);
}
function majPlateau(essaiNumero, combinaison, nbNoir, nbBlanc) {

    // Passe la manche en mode Passer
    PLATEAU.manche[essaiNumero - 1].type = "Passer";

    // Supprime le tableau devenu inutile
    delete PLATEAU.manche[essaiNumero - 1].dropdown;

    // Sauvegarde l'essai de combinaison
    PLATEAU.manche[essaiNumero - 1].essai = [];
    for (const code in combinaison) {
        PLATEAU.manche[essaiNumero - 1].essai[code] = combinaison[code];
    }

    // Sauvegarde la Correction
    PLATEAU.manche[essaiNumero - 1].correction = [];
    let nbCrant = combinaison.length;
    let nbErreur = nbCrant - nbNoir - nbBlanc;

    for (let i = 0; i < combinaison.length; i++) {

        if (nbNoir != 0) {
            PLATEAU.manche[essaiNumero - 1].correction[i] = " --n";
            nbNoir--;
        } else {
            if (nbBlanc != 0) {
                PLATEAU.manche[essaiNumero - 1].correction[i] = " --b";
                nbBlanc--;
            } else {
                //ni blanc ni noir
                PLATEAU.manche[essaiNumero - 1].correction[i] = "";
            }
        }
    }

    //Set la manche suivante
    setPresent(essaiNumero);

    //sauvegarde le numero de l'essai
    localStorage.setItem('essaiNumero', essaiNumero);

    //Mise à jour du font HTML
    compileHanlebars();

    //sauvegarde du plateau
    localStorage.setItem('plateau', JSON.stringify(PLATEAU));

    //console.log(PLATEAU);

}
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
// Opérateurs d’égalité
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

// Boucle
Handlebars.registerHelper('repeat', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

// Ajoute un 0 si le chiffre est inférieur à 10
Handlebars.registerHelper('addZero', function(n, block) {
    let longueur = n.toString().length;
    let valeur = '';
    if (longueur == 1){
        valeur = '0'+n;
    } else {
        valeur = n;
    }
    return valeur;
});
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
const BTN_SUPPRIMER_PARTIE = document.querySelector('.js_supprimer-partie');

BTN_SUPPRIMER_PARTIE.addEventListener('click', () =>{

    let message = 'Êtes-vous sûr de vouloir supprimer cette partie ?';

    if (window.confirm(message)) {
        
        effaceSauvegarde();
        location.reload();

    }

});
const COULEURS = ["code1", "code2", "code3", "code4", "code5", "code6", "code7", "code8"];
const INPUT_TIRAGE = document.getElementById('tirage');



let tirage = (difficulteChoisi) => {
    
    let nbCouleur = DIFFICULTE[difficulteChoisi].nbCouleur;
    let nbCrant = DIFFICULTE[difficulteChoisi].crant;

    let c = 0;
    let t = 0;

    let couleurs = [];
    let tirage = [];

    //Nouveau de tableau de couleurs en fonction de la difficulté
    while (c < nbCouleur) {
        couleurs.push(COULEURS[c]);
        c++;
    }

    // Définit un tirage aléatoire
    while (t < nbCrant) {
        let nouveauTirage = couleurs[Math.floor(Math.random() * couleurs.length)];
        tirage.push(nouveauTirage);
        t++;
    }

    //stocke le tirage
    INPUT_TIRAGE.value = tirage;

    //sauvegarde le tirage
    localStorage.setItem('tirage', tirage);
}
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