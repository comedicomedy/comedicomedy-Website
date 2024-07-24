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

window.onload = function(){
    visits++;

    document.getElementById("ranQuote").innerHTML = randomQuote;
    document.getElementById("numOfVisits").innerHTML = "Number of Employees: " + visits;
}