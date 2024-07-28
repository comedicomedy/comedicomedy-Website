const jsonUrl =
  "http://localhost:8080/visits";

var numOfVisitors = 0;
/*

*/

let jsonFile = fetch(jsonUrl).then((response) => {
  if (!response.ok){
    throw new Error("Https Request Status: " + response.status) 
  }

  return response.json();
})
.then((response) => {
  numOfVisitors = response.numOfVisits;
  console.log(response.numOfVisits);
})

window.onload = function(){
  document.getElementById("numOfVisits").innerHTML = numOfVisitors;
}

console.log(numOfVisitors);