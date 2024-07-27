import {writeFile, rm}  from "node:fs";

const jsonUrl = "visits.json";
var visits = { "numOfVisits": 0 };

const server =  Bun.serve({
    port: 8080,
    fetch(req) {
        const url = new URL(req.url);
        
        if (url.pathname === jsonUrl) {
            visits.numOfVisits++;
            updateJson();
            let jsonFile = Bun.file("visits.json");

            return new Response(jsonFile);
        }
        
    },

})

function updateJson() {
    rm("visits.json", (Error) => { 
        if (Error) throw Error
    });
    writeFile("visits.json", JSON.stringify(visits), (Error) => {
        if (Error) throw Error
    } )
}

console.log(server.port);