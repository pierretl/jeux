const BTN_COMMENCER = document.querySelector('.js_btn-commencez');
const ECRAN_COMMENCER = document.querySelector('.js_ecran-commencez');



BTN_COMMENCER.addEventListener('click', () => {
    /*
  tirage(couleurs, crant);
  ajoutEssai(crant, couleurs, formulaire, conteneurSelect);
  bodyPlateau.classList.remove(classCssHide);
  initDropdown(couleurs);
  nouvelEssai(crant);
    */

   //Masque ecran commencez
   ECRAN_COMMENCER.classList.add('hide');

   //Génére un tirage
   let difficulteChoisi = DOM_DIFFICULTE_SELECT.value;
   tirage(difficulteChoisi);

   //Créer le formulaire de validation
   formulaire(
    DIFFICULTE[difficulteChoisi].crant,
    DIFFICULTE[difficulteChoisi].nbCouleur,
    CONTENEUR_FORMULAIRE,
    //'essaiNumero a faire'
   );

   //initialise le dropdown

   //Créer le plateau


});