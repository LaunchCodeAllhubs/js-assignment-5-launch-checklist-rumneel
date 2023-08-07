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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    //let list = document.getElementById("faultyItems");
    list.style.visibility = "visible";
    
    alert("all fields required");

    if(!pilot) {
        pilotStatus = "Empty";
    } else {
        pilotStatus = validateInput(pilot);

    }
    if(!copilot) {
        copilotStatus = "Empty";
    } else {
        copilotStatus = validateInput(copilot);
        
    }
    if(!fuelLevel) {
        fuelStatus = "Empty";
    } else {
        fuelStatus = validateInput(fuelLevel);
        
    }
    if(!cargoLevel) {
        cargoStatus = "Empty";
    } else {
        cargoStatus = validateInput(cargoLevel);
        
    }
   }
    pilotStatus.innerHTML = `Pilot: ${pilot}`;
    copilotStatus.innerHTML = `Co-Pilot: ${copilot}`;

    if (validateInput(pilotStatus)=== "" || validateInput(copilotStatus) === "" || validateInput(fuelStatus) === "" ||
     validateInput(cargoStatus) === "") {
      alert("All fields are required");

    } else if (fuelStatus === "Not a Number" || cargoStatus === "Not a Number" || pilotStatus === "Is a Number"|| 
    copilotStatus === "Is a Number") {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level and Cargo mass must be numbers!";
        pilotStatus.innerHTML = "Pilot and Co-pilot names must be strings!";
        launchStatus.innerHTML = "Shuttle not Ready for launch";
        launchStatus.style.color = "rgb(199, 37, 78)"; // Red color

    } else if (fuelLevel < 10000 || cargoMass > 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle not Ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)"; // Red color
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            
        } else {
            list.style.visibility = "hidden";  
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
            launchStatus.innerHTML = " Shuttle is Ready for Launch";
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
