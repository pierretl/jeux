function plateau(nbEssai, nbCrant, essaiNumero) {

    /*
    for (let i = nbEssai; i > 0; i--) {

        if ( i == 1) {
            //present
        } else {
            //futur
        }
        
    }
    */

    //Demo du plateau
    var dechiffreur = document.querySelector('#manche').innerHTML;
    var compile = Handlebars.compile(dechiffreur);
    document.querySelector('.js_ecran-dechiffreur').innerHTML = compile(dataPlateau);

    // affiche le plateau
    ECRAN_DECHIFFREUR.classList.remove('hide');

}






//utilitaire
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('repeat', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});





// data de demo
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