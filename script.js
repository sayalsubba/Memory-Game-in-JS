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
let lockCard = false;

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
        displayArr.innerHTML = "❓";
        mainPrt.appendChild(displayArr);
       setTimeout(()=>{
            displayArr.innerHTML = displayArr.dataset.value;

       },1000)
        displayArr.dataset.value = value;

        displayArr.addEventListener("click", function showData(event) {
            if (lockCard) {
                return;

            }
            if (firstCard === null) {
                firstCard = event.target;
                firstCard.innerHTML = firstCard.dataset.value;
                console.log(firstCard.dataset.value);
            }
            else if (secondCard === null) {
                secondCard = event.target;
                secondCard.innerHTML = secondCard.dataset.value;
                console.log(secondCard.dataset.value);
                lockCard = true;
            }
        

        });
    });
};



function playGame() {

}

