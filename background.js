const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {
    console.log("finished loading");
}

function paintImage(imgNumber) {
    const image = new Image();
    //image.src = `images/${imgNumber + 1}.jpg`;
    image.src = `https://source.unsplash.com/random/1080×1920`;
    image.classList.add('bgImage');
    body.appendChild(image);
    image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * 3);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();