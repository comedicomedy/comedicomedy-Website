let numOfVisits = 0;

const server =  Bun.serve({
    port: 8080,
    fetch(req) {
                
        if (new URL(req.url).pathname  === "/visits"){
            numOfVisits++;

            let visits = {"numOfVisits": numOfVisits} 
            let jsonResponse = Response.json(visits);

            console.log(visits.numOfVisits);

            jsonResponse.headers.set("Access-Control-Allow-Origin", "*")
            return jsonResponse; 
        }
        
    
      return Response.error();
    }

})

console.log(server.port);
console.log(server.url);