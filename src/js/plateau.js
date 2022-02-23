let PLATEAU = {manche:[]};

function plateau(nbEssai, nbCrant, nbCouleur, essaiNumero) {

    let numero = nbEssai;

    //initialise les datas PLATEAU
    for (let i = 0; i < nbEssai; i++) {

        PLATEAU.manche[i] = {};
        PLATEAU.manche[i].essaiNumero = numero--;

        if ( i == (nbEssai - 1)) {
            //present
            PLATEAU.manche[i].type = "Present";
            PLATEAU.manche[i].dropdown = [];
            PLATEAU.manche[i].dropdown.crant = [];

            for (let j = 0; j < nbCrant; j++) {
                PLATEAU.manche[i].dropdown.crant[j] = [];
                PLATEAU.manche[i].dropdown.crant[j].idCouleur = [];

                for (let k = 0; k < nbCouleur; k++) {
                    PLATEAU.manche[i].dropdown.crant[j].idCouleur[k] = k+1;
                }
            }

        } else {
            //futur
            PLATEAU.manche[i].type = "Futur";
            PLATEAU.manche[i].nombreCrant = nbCrant;
        }
        
    }

    console.log(PLATEAU);

    // Construit le HTML du PLATEAU
    var dechiffreur = document.querySelector('#manche').innerHTML;
    var compile = Handlebars.compile(dechiffreur);
    ECRAN_DECHIFFREUR.innerHTML = compile(PLATEAU);

    // affiche le plateau
    ECRAN_DECHIFFREUR.classList.remove('hide');

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