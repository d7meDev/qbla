const degree = document.getElementById("degree");
const img = document.querySelector('img');
const fire = () => { window.addEventListener('deviceorientation' ,event => {
    
    
        let heading = event.webkitCompassHeading || event.alpha;
        heading = heading % 360;
        degree.textContent = `${Math.floor(heading)} deg`;
        img.style.transform = `translate(-50%,-50%) rotate(${-heading}deg)`
   
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


