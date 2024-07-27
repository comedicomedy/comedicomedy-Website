const jsonUrl =
  "https://nd8jm5jn-8080.use.devtunnels.ms/visits.json";

/*
window.onload(() => {
  // Fetch the Json, Edit a  value of the JSON file, Display the JSON
})
*/

let jsonFile = fetch(jsonUrl).then((response) => {
  if (!response.ok){
    throw new Error("Https Request Status: " + response.status) 
  }

  return response.json();
})
.then((response) => {
  console.log(JSON.parse(response))
})
