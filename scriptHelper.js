// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
`;
}


function validateInput(testInput) {
    let input = Number(testInput);
    if(testInput === "") {
        return "Empty";
    } else if (isNaN(input)) {
        return "Not a Number";
    } else if (!isNaN(input)){
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel,cargoMass) { 
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");  
    let launchStatus = document.getElementById("launchStatus");  
    

    if (validateInput(pilot)=== "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" ||
     validateInput(cargoMass) === "Empty") {
      alert("All fields are required");

    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number" ||
     validateInput(pilot) === "Is a Number"|| validateInput(copilot) === "Is a Number") {
      alert ("Correct datatype required");
        

    } else if (fuelLevel < 10000 && cargoMass > 10000) {
      
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)"; // Red color
           // alert("Fuel too low and Cargo too high!!!");

    } else if (fuelLevel > 10000 && cargoMass > 10000) {
      
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)"; // Red color
            alert("Cargo too heavy!! ");
                
    } else if (fuelLevel < 10000 && cargoMass < 10000) {
           
                    list.style.visibility = "visible";
                    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
                    fuelStatus.innerHTML = "Fuel level too low for launch";
                   cargoStatus.innerHTML = "Cargo mass low enough for launch";
                    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                    launchStatus.style.color = "rgb(199, 37, 78)"; // Red color
                   // alert("Fuel too low!!");

       } else {
            list.style.visibility = "visible";  
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            launchStatus.style.color = "rgb(65, 159, 106)";
            launchStatus.innerHTML = 'Shuttle is Ready for Launch';
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

    }

  async function myFetch() {
   let planetsReturned;
  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
  return response.json();   
  });
return planetsReturned;
}

function pickPlanet(planets) {
    const index = Math.floor(Math.random()*planets.length);
    return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
