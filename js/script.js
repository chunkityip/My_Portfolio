// js/script.js
let isHumanMode = false;
const modeImage = document.getElementById('modeImage');
const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
    isHumanMode = !isHumanMode;
    
    // Update image source
    modeImage.src = isHumanMode ? 
        'assets/human_mode.png' : 
        'assets/cat_mode.gif';
    
    // Update button text
    modeToggle.innerHTML = `
        <img src="assets/play-circle.svg" alt="play" />
        ${isHumanMode ? 'Cat mode' : 'Human mode'}
    `;
});