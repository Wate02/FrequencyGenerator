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

document.getElementById('default').addEventListener('click', () => {
  location.href = 'index.html';
})

document.getElementById('playButton').addEventListener('click', () => {
  // Make the div visible
document.getElementById('indicator').style.display = 'block';


})

document.getElementById('stopButton').addEventListener('click', () => {
  document.getElementById('indicator').style.display = 'none';

})

document.getElementById('indicator').style.display = 'none';
document.getElementById('beepin').style.display = 'none';
;


