const arr = ["🍎",
    "🍎",
    "🐈",
    "🐈",
    "☁️",
    "☁️",
    "🌸",
    "🌸",
    "🌿",
    "🌿",
    "🐷",
    "🐷",
    "🌎",
    "🌎",
    "🌈",
    "🌈"];


let firstCard = null;
let secondCard = null;
let score = 0;

function startGame() {
    let text = '';
    let mainPrt = document.getElementById("mainArr");
    mainPrt.innerHTML = "";
    arr.forEach((value) => {
        text = value;
        const displayArr = document.createElement("div");
        displayArr.innerHTML = text;
        mainPrt.appendChild(displayArr);
    })
}

function playGame() {

}

