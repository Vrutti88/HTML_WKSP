const boxes = document.querySelectorAll(".box");
const restartGameButton = document.querySelector("#restart-game");
const newGameButton = document.querySelector("#new-game");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector(".msg");

let turnX = true;
let moves = 0;

const winningPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

const disableBoxes = () => {
  boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = '';
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let [a, b, c] = pattern;
    let val1 = boxes[a].innerText;
    let val2 = boxes[b].innerText;
    let val3 = boxes[c].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      showWinner(val1);
      return true;
    }
  }
  return false;
};

const checkDraw = () => {
  if (moves === 9 && !checkWinner()) {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
  }
};

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turnX ? "X" : "O";
      box.disabled = true;
      turnX = !turnX;
      moves++;

      if (!checkWinner()) {
        checkDraw();
      }
    }
  });
});

const resetGame = () => {
  turnX = true;
  moves = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

restartGameButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);
