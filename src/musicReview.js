// Albums

var isLoaded = false;

window.addEventListener("DOMContentLoaded", () => {
  const albums = {
    tpab_klamar: document.getElementById("To Pimp A Butterfly"),
    minf_glaive: document.getElementById("May it Never Falter"),
  };

  albums.tpab_klamar.addEventListener("mouseenter", () => {
    isLoaded = true;
    console.log("true");
    albums.tpab_klamar.innerHTML =
      '<a href="musicReviews/tpab.html" ><img src="assets/albumCovers/TPAB.png" alt="To Pimp a Butterfly" id="tpab-klamar" class="albumCoverGrid"></a>';
  });

  albums.tpab_klamar.addEventListener("mouseleave", () => {
    isLoaded = false;
    albums.tpab_klamar.innerHTML =
      '<img src="assets/albumCovers/kLamar-TPAB.png" alt="To Pimp a Butterfly" class="albumCoverGrid" "id="tpab-klamar">';
  });

  albums.minf_glaive.addEventListener("mouseenter", () => {
    albums.minf_glaive.innerHTML =
      '<a href="musicReviews/minf.html" ><img src="assets/albumCovers/MayItNeverFalter.png" alt="May it Never Falter by Glaive Album Cover" id="minf-glaive" class="albumCoverGrid"></a>';
  });

  albums.minf_glaive.addEventListener("mouseleave", () => {
    albums.minf_glaive.innerHTML =
      '<a href="musicReviews/minf.html" ><img src="assets/albumCovers/glaive-MayItNeverFalter.jpg" alt="May it Never Falter by Glaive Album Cover" id="minf-glaive" class="albumCoverGrid"></a>';
  });
});
