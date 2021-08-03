const imgSources = [
  "Artium.jpg",
  "Avishag.jpg",
  "Sagi.jpg",
  "Timna.jpg",
  "Arik.jpg",
  "Yarden.jpg",
  "Gal.jpg",
  "Ori.jpg",
];
const basePath = "./assets/";
let currentImg = "Artium.jpg";
const $currentImgEl = document.getElementById("my-img");

function generateImg() {
  const nextImg = getNewImg(currentImg);
  currentImg = nextImg;
  $currentImgEl.src = basePath + nextImg;
  document.title = currentImg.substring(0, currentImg.indexOf("."));
}

function getNewImg(currentImg) {
  const currentImgIndx = imgSources.indexOf(currentImg);
  if (currentImgIndx == imgSources.length - 1) {
    return imgSources[0];
  }
  return imgSources[currentImgIndx + 1];
}

// handle button click
document.getElementById("button").addEventListener("click", generateImg);
