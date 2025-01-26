const degree = document.getElementById("degree");
window.addEventListener('deviceorientation' ,event => {
    
    degree.textContent = `${event.alpha} deg`;
})