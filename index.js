const degree = document.getElementById("degree");
const fire = message => { window.addEventListener('deviceorientation' ,event => {
    
    degree.textContent = `${event.alpha} deg\n ${message}`;
})};



async function compass(){

    if ( typeof DeviceOrientationEvent != undefined && typeof DeviceOrientationEvent.requestPermission === 'function') {
        
        const permissionState = await DeviceOrientationEvent.requestPermission();
            if (permissionState === 'granted') {
                fire(1);
               
            } else {
                alert('Permission denied for device orientation');
            }
      
    }
    else if('DeviceOrientationEvent' in window){
        fire(2);
        
    }
    else{
        alert("This device dose not support device orientation")
    }
}


