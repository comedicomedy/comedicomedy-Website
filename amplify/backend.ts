import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import fs from "fs/promises";
import http from "http"

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  data,
});


var  numOfVisits = await fs.readFile("visits").then((res) => {
    return parseInt(res.toString());
}).catch(() => {
    return 0;
});

const server =  http.createServer((req, res) => {
    
  if (req.url  === "http://localhost:8080/visits"){
    numOfVisits++;

    let visits = {"numOfVisits": numOfVisits} 
    let jsonResponse = Response.json(visits);

    if (numOfVisits % 10 == 0){
        fs.writeFile("visits", numOfVisits.toString()).catch(() => {console.error("Didn't Write Data")});
        console.log("Wrote Data To File")
    }
    console.log(visits.numOfVisits);

    jsonResponse.headers.set("Access-Control-Allow-Origin", "*")
  
    res.write(jsonResponse);

  }

  res.end();
})

server.listen(8080, () => {
  console.log("Listening on port 8080");
})