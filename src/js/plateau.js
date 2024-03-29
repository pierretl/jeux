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