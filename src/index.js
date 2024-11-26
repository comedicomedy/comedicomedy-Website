// random quote
let Quotes = [
  '"Never finished a project since \'08"',
  '"Commiting tax fraud since \'98"',
  '"I just want to Grill"',
  '"I don\'t play games.... Unless I want to"',
  '"Comedic is comedy but I\'m bad at spelling"',
  '"Never Goon"',
  '"The Only Things that are in my vocabulary are real and true"',
  '"How to watch reels while coding a website!"',
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

// Call Backend for Number of Visitors

const jsonUrl = "https://api.comedicomedy.com/visits";

async function getNumOfVisits() {
  let numOfVisits;
  await fetch(jsonUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Https Request Status: " + response.status);
      }

      return response.json();
    })
    .then((response) => {
      let resVisits = response.numOfVisits;

      console.log("Visitors: " + resVisits);
      numOfVisits = resVisits;
    });

  return numOfVisits;
}

window.onload = async function () {
  document.getElementById("ranQuote").innerHTML = randomQuote;
  document.getElementById("numOfVisits").innerHTML =
    "Number of Employees: " + (await getNumOfVisits());

  if (window.visualViewport.width < 800) {
    document.getElementById("albumTitle").innerHTML =
      "Rotate Phone Horizontaly and Refresh";
  }
};
