// Albums

var isLoaded = false;

window.addEventListener("DOMContentLoaded", () => {
  const albums = {
    tpab_klamar: document.getElementById("To Pimp A Butterfly"),
    minf_glaive: document.getElementById("May it Never Falter"),
    gnx_klamar: document.getElementById("GNX"),
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

  albums.gnx_klamar.addEventListener("mouseenter", () => {
    albums.gnx_klamar.innerHTML =
      '<a href="musicReviews/gnx.html" ><img src="assets/albumCovers/GNX.png" alt="GNX Album Cover" id="gnx-klamar" class="albumCoverGrid"></a>';
  });

  albums.gnx_klamar.addEventListener("mouseleave", () => {
    albums.gnx_klamar.innerHTML =
      '<a href="musicReviews/gnx.html" ><img src="assets/albumCovers/klamr-GNX.png" alt="GNX Album Cover" id="gnx-klamar" class="albumCoverGrid"></a>';
  });
});
