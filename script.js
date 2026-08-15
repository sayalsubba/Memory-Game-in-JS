const arr = [
    "🍎",
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
    "🌈"
];


let firstCard = null;
let secondCard = null;
let score = 0;

function startGame() {

    let mainPrt = document.getElementById("mainArr");
    mainPrt.innerHTML = "";

    for (let i = arr.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[newIndex];
        arr[newIndex] = temp;
    }

    arr.forEach((value) => {
        text = value;
        const displayArr = document.createElement("div");
        displayArr.innerHTML = text;
        mainPrt.appendChild(displayArr);
    })
};





function playGame() {

}

