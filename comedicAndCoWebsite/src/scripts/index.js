// random quote
let Quotes = [
    '"Never finished a project since \'08"', '"Commiting tax fraud since \'98"', '"I just want to Grill"', '"I don\'t play games.... Unless I want to"', '"Comedic is comedy but I\'m bad at spelling'
];

var visits = 0;

function selectRandomQuote() {
    let ranNum = Math.floor(Math.random() * Quotes.length + 1);

    for (let index = 0; index < Quotes.length; index++) {
        if (ranNum - 1 == index) {
            return Quotes[index];
            
        }
        console.log(index);
        
    }

    console.log("Random Number: " + ranNum);
}

let randomQuote = selectRandomQuote();

var numOfVisitors = 0;

window.onload = function(){
    document.getElementById("ranQuote").innerHTML = randomQuote;
    document.getElementById("numOfVisits").innerHTML = numOfVisitors;
}

const jsonUrl =
  "http://localhost:8080/visits";


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

