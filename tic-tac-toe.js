let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let win = document.querySelector(".win");
let newGame = document.querySelector("#newGame")

let turnO = true;
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const play = () => {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.disabled != true) {
                if (turnO) {
                    box.textContent = "O";
                    turnO = false;
                }
                else {
                    box.textContent = "X";
                    turnO = true;
                }
                box.disabled = true;
                checkWinner();
            }
        })
    })
}

const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
        box.removeEventListener("click", play)
    })
}

const enableBoxes = () => {
    for (const box of boxes) {
        box.innerText = " "
        box.disabled = false;
        win.innerHTML = ""
    }
    play();
}

const checkWinner = () => {
    for (const pattern of winningPattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                disableboxes()
                win.innerHTML = `<h2> winner ${position3} </h2>`

            }
        }
    }
}
resetBtn.addEventListener("click", enableBoxes)
