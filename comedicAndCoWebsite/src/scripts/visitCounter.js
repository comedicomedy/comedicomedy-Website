const jsonUrl =
  "https://raw.githubusercontent.com/comedicomedy/comedicomedy-Website/main/comedicAndCoWebsite/src/scripts/visits.json";

/*
window.onload(() => {
  // Fetch the Json, Edit a  value of the JSON file, Display the JSON
})
*/

function reqListener() {
  console.log(JSON.parse(this.responseText));
}

const jsonRequest = new XMLHttpRequest();
jsonRequest.addEventListener("load", reqListener);
jsonRequest.open("GET", jsonUrl);
jsonRequest.send();
