let PLATEAU = {manche:[]};

function plateau(nbEssai, nbCrant, nbCouleur, essaiNumero) {

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




function setPresent(essaiNumero) {
    let difficulteChoisi = DOM_DIFFICULTE_SELECT.value;
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
    ECRAN_DECHIFFREUR.innerHTML = compile(PLATEAU);
}


/*
data DEMO : passer , present, futur

var dataPlateau = {
    dataList:[
        {
            essaiNumero : "03",
            type : "Futur",
            nombreCrant : 4,
        },
        {
            essaiNumero : "02",
            type : "Present",
            dropdown: [
                {crant : [
                    {idCouleur : 1},
                    {idCouleur : 2},
                    {idCouleur : 3},
                    {idCouleur : 4},
                    {idCouleur : 5},
                ]},
                {crant : [
                    {idCouleur : 1},
                    {idCouleur : 2},
                    {idCouleur : 3},
                    {idCouleur : 4},
                    {idCouleur : 5},
                ]},
                {crant : [
                    {idCouleur : 1},
                    {idCouleur : 2},
                    {idCouleur : 3},
                    {idCouleur : 4},
                    {idCouleur : 5},
                ]},
                {crant : [
                    {idCouleur : 1},
                    {idCouleur : 2},
                    {idCouleur : 3},
                    {idCouleur : 4},
                    {idCouleur : 5},
                ]},
            ],
        },
        {
            essaiNumero : "01",
            type : "Passer",
            essai: [
                {idCouleur : 1},
                {idCouleur : 2},
                {idCouleur : 4},
                {idCouleur : 3},
            ],
            correction: [
                {ficheType : " --n"},
                {ficheType : " --b"},
                {ficheType : ""},
                {ficheType : ""},
            ],
        }
    ]
};

*/