const button = document.getElementById("btn");
const imgDiv = document.getElementById("img");
const loader = document.getElementById("loader");
let source;

let apiArr = [
  "https://dog.ceo/api/breeds/image/random",
  "https://api.thecatapi.com/v1/images/search",
  "https://randomfox.ca/floof/",
  "https://api.alexflipnote.dev/birb",
];

let dataArr = ["message", "[0].url", "image", "file"];

let api1Data = function (data) {
  source = data.message;
};

let api2Data = function (data) {
  source = data[0].url;
};

let api3Data = function (data) {
  source = data.image;
};

let api4Data = function (data) {
  source = data.file;
};

let RANDOM_IMAGE_URL = apiArr[0];
let callBack = api1Data;

const dog = document.getElementById("dog");
const cat = document.getElementById("cat");
const fox = document.getElementById("fox");
const bird = document.getElementById("bird");

let weightElement = dog;

dog.addEventListener("click", () => {
  callBack = api1Data;
  RANDOM_IMAGE_URL = apiArr[0];
  weightElement.style.fontWeight = 100;
  dog.style.fontWeight = 600;
  weightElement = dog;
});
cat.addEventListener("click", () => {
  callBack = api2Data;
  RANDOM_IMAGE_URL = apiArr[1];
  weightElement.style.fontWeight = 100;
  cat.style.fontWeight = 600;
  weightElement = cat;
});
fox.addEventListener("click", () => {
  callBack = api3Data;
  RANDOM_IMAGE_URL = apiArr[2];
  weightElement.style.fontWeight = 100;
  fox.style.fontWeight = 600;
  weightElement = fox;
});
bird.addEventListener("click", () => {
  callBack = api4Data;
  RANDOM_IMAGE_URL = apiArr[3];
  weightElement.style.fontWeight = 100;
  bird.style.fontWeight = 600;
  weightElement = bird;
});

function getImg(url, callback) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      imgDiv.innerText = "";
      callback(data);
      const img = document.createElement("img");
      img.style.display = "none";
      img.addEventListener("load", () => {
        loader.style.display = "none";
        img.style.display = "block";
      });
      img.src = source;
      img.className = "img";
      imgDiv.append(img);
    });
}

button.addEventListener("click", () => {
  imgDiv.innerText = "";
  loader.style.display = "flex";
  getImg(RANDOM_IMAGE_URL, callBack);
});
