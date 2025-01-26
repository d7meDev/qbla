const degree = document.getElementById("degree");
const fire = () => { window.addEventListener('deviceorientation' ,event => {
    
    degree.textContent = `${event.alpha.toFixed(0)} deg`;
})};



async function compass(){

    if ( typeof DeviceOrientationEvent != undefined && typeof DeviceOrientationEvent.requestPermission === 'function') {
        
        const permissionState = await DeviceOrientationEvent.requestPermission();
            if (permissionState === 'granted') {
                fire();
               
            } else {
                alert('Permission denied for device orientation');
            }
      
    }
    else if('DeviceOrientationEvent' in window){
        fire();
        
    }
    else{
        alert("This device dose not support device orientation")
    }
}


