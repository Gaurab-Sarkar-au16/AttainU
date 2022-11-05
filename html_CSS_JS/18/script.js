var getLcnBtn = document.getElementById('getLocationBtn')

function onPositionReceived(position){
  console.log('Position received')
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
}

function onPositionBlocked(){
  console.log('Position denied')
}


function getUserLocation(){
  console.log('Trying to get users location')
  
  navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionBlocked)
}

getLcnBtn.addEventListener('click', getUserLocation)

