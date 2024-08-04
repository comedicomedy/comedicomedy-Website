// Albums

window.addEventListener("DOMContentLoaded", () => {
    const albums = { tpab_klamar: document.getElementById("To Pimp A Butterfly") }
    
    albums.tpab_klamar.addEventListener("mouseenter", () => {
       albums.tpab_klamar.innerHTML = 
       '<a href="musicReviews/tpab.html" ><img src="assets/albumCovers/TPAB.png" id="tpab-klamar" class="albumCoverGrid"></a>';
           
    });
    albums.tpab_klamar.addEventListener("mouseout", () => {
        albums.tpab_klamar.innerHTML =  
        '<a href="musicReviews/tpab.html" ><img src="assets/albumCovers/kLamar-TPAB.png" alt="To Pimp a Butterfly" class="albumCoverGrid" "id="tpab-klamar"></a>'
    });
    
})
