const CONTENEUR_FORMULAIRE =  document.querySelector('.js_form');

function formulaire(crant, couleurs, formulaire, essaiNumero) {

    // essai numéro
    if (typeof essaiNumero === "undefined") {
        var essaiNumero = 1;
    }

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
        selects += `<select id="essai-${essaiNumero}-${n}" class="essai-${essaiNumero}">${options}</select>`;
        n++;
    }

    // Ajout du formulaire à la page
    formulaire.innerHTML = selects;

}