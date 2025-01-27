const degree = document.getElementById("degree");
const img = document.querySelector('img');
const fire = () => { window.addEventListener('deviceorientation' ,event => {
    
    setTimeout(() => {
        let heading = event.webkitCompassHeading || event.alpha;
        heading = Math.floor(heading) % 360;
        degree.textContent = `${heading} deg`;
        img.style.transform = `translate(-50%,-50%) rotate(${-heading}deg)`
    },250)
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

    document.querySelector('button').remove();
}


