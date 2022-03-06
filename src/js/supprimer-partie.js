const BTN_SUPPRIMER_PARTIE = document.querySelector('.js_supprimer-partie');

BTN_SUPPRIMER_PARTIE.addEventListener('click', () =>{

    let message = 'Êtes-vous sûr de vouloir supprimer cette partie ?';

    if (window.confirm(message)) {
        
        effaceSauvegarde();
        location.reload();

    }

});