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

    //Mise à jour du font HTML
    compileHanlebars();

    //console.log(PLATEAU);

}