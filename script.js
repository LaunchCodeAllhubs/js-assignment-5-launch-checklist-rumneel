// Write your JavaScript code here!


window.addEventListener("load", function() {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name,planet.diameter,planet.star,planet.distance,planet.moons,planet.image);
  
   });
   console.log("Hello");
      // window.addEventListener("load",function () {
               const form = document.querySelector("form");
               let list = document.getElementById("faultyItems");
               form.addEventListener("submit", function (event) { 
                event.preventDefault();
                let pilot = document.querySelector("input[name=pilot]").value;
                let copilot = document.querySelector("input[name=copilot]").value;
                let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
                let cargoLevel = document.querySelector("input[name=cargoLevel]").value;
                console.log("Hello");
                formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
                
            });





 });


   
