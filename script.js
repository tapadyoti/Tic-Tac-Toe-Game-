let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn")

let msg = document.querySelector(".msg");
let newBtn = document.querySelector("#ng-btn")
let winnerMsg = document.querySelector(".winnerMsg")

let modeBtn = document.querySelector("#modeBtn")
let container = document.querySelector(".container")

let turnO = true;

const winningCon = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const resetGame = () => {
    turnO = true;
    enableboxes();
    winnerMsg.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked")
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is '${winner}'`
    winnerMsg.classList.remove("hide");
    disableboxes();
}


const checkWinner = () => {
    for (let con of winningCon) {

        let con1val = boxes[con[0]].innerText;
        let con2val = boxes[con[1]].innerText;
        let con3val = boxes[con[2]].innerText;

        if (con1val != "" && con2val != "" && con3val != "") {
            if (con1val === con2val && con2val === con3val) {
                console.log("winner", con1val);
                showWinner(con1val);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

 


let mode = true;
modeBtn.addEventListener("click", () => {
    if (mode === true) {
        modeBtn.innerText = "Dark Mode"
        container.classList.remove("darkmode")
       
        mode = false;
    }
    else {
        modeBtn.innerText = "Light Mode"
        container.classList.add("darkmode")
        mode = true;

    }

})



