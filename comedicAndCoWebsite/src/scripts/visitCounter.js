const jsonUrl = "visits.json";

/*
window.onload(() => {
  // Fetch the Json, Edit a  value of the JSON file, Display the JSON  
})
*/
function loadJson(){
    fetch(jsonUrl)
    .then((response) => {
        if(!response.ok){
            throw new Error(`Response Status: ${response.status}`);
        }
        
        response.json;
    })
    .then((response) => {
        console.log(response);
    })
}