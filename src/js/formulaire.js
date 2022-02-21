const CONTENEUR_FORMULAIRE =  document.querySelector('.js_form');

function formulaire(crant, couleurs, formulaire, essaiNumero) {

    // essai numéro
    if (typeof essaiNumero === "undefined") {
        var essaiNumero = 1;
    }

    // création des options
    let options = '';
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

    // Ajout bouton validation
    selects += `<button onclick="essaiCombinaison(${essaiNumero})">Try this</button>`;

    // Ajout du formulaire à la page
    formulaire.innerHTML = selects;

}