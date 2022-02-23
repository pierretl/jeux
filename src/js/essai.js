function essaiCombinaison(essaiNumero) {

    //récupération du tirage
    let tirage = INPUT_TIRAGE.value.split(",");

    //recupération des données saisi
    let combinaison = [];
    let selects = document.querySelectorAll(".essai-" + essaiNumero);
    for (var e = 0; e < selects.length; e++) {

        // si une valeur n'est pas saisi, finir le script 
        if ( selects[e].value == "" ) {
            return false;
        } else {
            combinaison.push(selects[e].value);
        }

    }

    // Vérification
    if (JSON.stringify(combinaison) == JSON.stringify(tirage)) {
        gagne();
    } else {

        //let correction = document.querySelector(".js--correction-" + essaiNumero);
        let nbNoir = 0;
        let nbBlanc = 0;

        console.log("tirage : " + tirage + "\n combinaison : " + combinaison);

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
    
        console.log("total noir : " + nbNoir + "\n total blanc : " + nbBlanc);
    }
}