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
    let btn = document.getElementById("btn");
    btn.style.display = "none";
    let matchedPair = 0;
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

        displayArr.dataset.value = value;


        displayArr.addEventListener("click", function showData(event) {
            if (lockCard) {
                return;
            }
            if (event.target.classList.contains("matched")) {
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
                if (firstCard.dataset.value === secondCard.dataset.value) {
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");
                    firstCard = null;
                    secondCard = null;
                    lockCard = false;
                    matchedPair++;
                    if (matchedPair === 8) {
                        const wonDisplay = document.createElement("h1");
                        wonDisplay.innerHTML = "You Have Won!!!";
                        wonDisplay.classList.add("wondisplayClass")
                        mainPrt.appendChild(wonDisplay);
                        btn.style.display = "block";
                      

                    }

                }
                else if (firstCard.dataset.value !== secondCard.dataset.value) {
                    setTimeout(() => {
                        let unknown = "❓";
                        firstCard.innerHTML = unknown;
                        secondCard.innerHTML = unknown;
                        firstCard = null;
                        secondCard = null;
                        lockCard = false;
                    }, 1000)
                }

            }
            console.log(matchedPair);
        });


    });
};



function playGame() {

}

