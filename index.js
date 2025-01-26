const degree = document.getElementById("degree");
const img = document.querySelector('img');

const fire = () => { window.addEventListener('deviceorientation' ,event => {
    
    setTimeout(() => {
        degree.textContent = `${event.alpha.toFixed(0)} deg`;
        img.style.transform = `rotate(${event.alpha.toFixed(0)}deg)`
    },500)
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


