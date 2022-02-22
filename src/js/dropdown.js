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
function choixCouleur(e, idCouleur) {
    let labelDropdown = e.parentNode.parentNode.parentNode.querySelector('.js_dropdown-label');
    
    // Affiche la couleur dans le label
    labelDropdown.classList.add(`code${idCouleur}`);

    // Ferme la dropdown
    dropdown(labelDropdown);
}