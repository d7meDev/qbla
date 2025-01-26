const degree = document.getElementById("degree");
const fire = () => { window.addEventListener('deviceorientation' ,event => {
    
    degree.textContent = `${event.alpha} deg`;
})};

if(typeof DeviceOrientationEvent.requestPermission === 'function'){
    
    DeviceOrientationEvent.requestPermission().then(permissionState => {
        if(permissionState === 'granted'){

            fire();
        }
        else{
            alert('access denide');
        }
    })
}
else{
    fire();
}




