import fs from "fs/promises";

var  numOfVisits = await fs.readFile("visits").then((res) => {
    return parseInt(res.toString());
}).catch(() => {
    return 0;
});

const server =  Bun.serve({
    port: 8080,
    
    fetch(req) {
                
        if (new URL(req.url).pathname  === "/visits"){
            numOfVisits++;

            let visits = {"numOfVisits": numOfVisits} 
            let jsonResponse = Response.json(visits);

            if (numOfVisits % 10 == 0){
                fs.writeFile("visits", numOfVisits.toString()).catch(() => {console.error("Didn't Write Data")});
                console.log("Wrote Data To File")
            }
            console.log(visits.numOfVisits);

            jsonResponse.headers.set("Access-Control-Allow-Origin", "*")
            return jsonResponse; 
        }
        
    
      return Response.error();
    }

})




console.log(server.port);
console.log(server.url);