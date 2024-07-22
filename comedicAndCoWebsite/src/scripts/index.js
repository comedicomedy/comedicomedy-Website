// random quote
let Quotes = ['"Never finished a project since \'08"', '"Commiting tax fraud since \'98"', '"I just want to Grill"'];

function selectRandomQuote() {
    let ranNum = Math.floor(Math.random() * Quotes.length + 1);

    switch (ranNum) {
        case 1:
            return Quotes[0];
            break;
        case 2:
            return Quotes[1];
        case 3:
            return Quotes[2];
            break;
        default:
            return ranNum;
            break;
    }
}

let randomQuote = selectRandomQuote();

window.onload = function(){
    document.getElementById("ranQuote").innerHTML = randomQuote;
}