// Code your solution in this file!
function logDriverNames(drivers){
  for(i = 0; i < drivers.length; i++){
    console.log(drivers[i].name)
  }
}

function logDriversByHometown(drivers, location){
  drivers.filter(driver => driver.hometown === location).forEach(function(element) {
  console.log(element.name);
  })
}

function driversByRevenue(drivers, revenue){
  return drivers.sort)
}