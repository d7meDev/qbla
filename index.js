const degree = document.getElementById("degree");


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



const fire = () => { window.addEventListener('deviceorientation' ,event => {
    
    degree.textContent = `${event.alpha} deg`;
})};
