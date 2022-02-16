const INPUT_SWITCH = document.getElementById('theme')
const PREFERENCE_THEME = localStorage.getItem('mode');

if (PREFERENCE_THEME){
    document.documentElement.setAttribute('data-mode', PREFERENCE_THEME);
    if (PREFERENCE_THEME === 'light') {
        INPUT_SWITCH.checked = true;
    } 
} else {
    document.documentElement.setAttribute('data-mode', 'dark');
    localStorage.setItem('mode', 'dark');
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-mode', 'light');
        localStorage.setItem('mode', 'light');
    }else{
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem('mode', 'dark');
    }
}

INPUT_SWITCH.addEventListener('change', switchTheme, false);