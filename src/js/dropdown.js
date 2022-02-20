const DROPDOWNS = document.querySelectorAll('.js_dropdown');

for (const DROPDOWN of DROPDOWNS) {
    DROPDOWN.addEventListener('click', () => {

        if ( DROPDOWN.getAttribute('aria-expanded') === 'true' ) {
            DROPDOWN.setAttribute('aria-expanded', 'false');
            DROPDOWN.parentNode.classList.remove('--ouvert');
            DROPDOWN.parentNode.querySelector('ul').classList.add('hide');
        } else {
            DROPDOWN.setAttribute('aria-expanded', 'true');
            DROPDOWN.parentNode.classList.add('--ouvert');
            DROPDOWN.parentNode.querySelector('ul').classList.remove('hide');
        }

    })
};

