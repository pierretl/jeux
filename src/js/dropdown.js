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