function majPlateau(essaiNumero, combinaison, nbNoir, nbBlanc, tirage) {

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

    //sauvegarde le numero de l'essai
    localStorage.setItem('essaiNumero', essaiNumero);


    //sauvegarde du plateau
    localStorage.setItem('plateau', JSON.stringify(PLATEAU));


    //console.log(PLATEAU);


    // partie gagné ?
    if (JSON.stringify(combinaison) == JSON.stringify(tirage)) {
        gagne();
    } else {
        let difficulteChoisi = DIFFICULTE[DOM_DIFFICULTE_SELECT.value].nbEssai;
        if (difficulteChoisi == essaiNumero) {
            perdu();
        } else {
            //Set la manche suivante
            setPresent(essaiNumero);

            //Mise à jour du front HTML
            compileHanlebars();
        }
    }
   

}