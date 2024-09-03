const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';


function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}


function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}


if (darkModeEnabled) {
    enableDarkMode();
}


document.getElementById('toggleBtn').addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
})

document.getElementById('alternating').addEventListener('click', () => {
  location.href = 'alternating.html';
})


;
