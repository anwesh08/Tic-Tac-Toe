"use strict";

const playSquares = document.querySelectorAll("td");
const btnRestart = document.querySelector("#restart-button");

//turn to determine whether ❌ or ⭕ is added next
let turn = 1;

// Clear the board
const clearBoard = () => {
  for (const board of playSquares) {
    board.textContent = " \u00A0";
  }
  turn = 1;
};

// Restart Button
btnRestart.addEventListener("click", clearBoard);

// Check the Marker
const changeMarker = function () {
  if (this.textContent != "❌" && this.textContent != "⭕") {
    if (turn % 2 != 0) {
      this.textContent = "❌";
      turn++;
    } else {
      this.textContent = "⭕";
      turn++;
    }
  }
  checkWinner();
  checkDraw();
};

for (const playMarker of playSquares) {
  playMarker.addEventListener("click", changeMarker);
}

// Check Winner
const checkWinner = () => {
  if (
    (playSquares[0].textContent == "❌") &&
    (playSquares[1].textContent == "❌") &&
    (playSquares[2].textContent == "❌")
  ) {
    alert("Player 1 Won");
    clearBoard();
  } else if (
    (playSquares[0].textContent == "⭕") &&
    (playSquares[1].textContent == "⭕") &&
    (playSquares[2].textContent == "⭕")
  ) {
    alert("Player 2 Won");
    clearBoard();
  } else if (
    (playSquares[3].textContent == "❌") &&
    (playSquares[4].textContent == "❌") &&
    (playSquares[5].textContent == "❌")
  ) {
    alert("Player 1 Won");
    clearBoard();
  } else if (
    (playSquares[3].textContent == "⭕") &&
    (playSquares[4].textContent == "⭕") &&
    (playSquares[5].textContent == "⭕")
  ) {
    alert("Player 2 Won");
    clearBoard();
  } else if (
    playSquares[6].textContent == "❌" &&
    playSquares[7].textContent == "❌" &&
    playSquares[8].textContent == "❌"
  ) {
    alert("Player 1 Won");
    clearBoard();
  } else if (
    playSquares[6].textContent == "⭕" &&
    playSquares[7].textContent == "⭕" &&
    playSquares[8].textContent == "⭕"
  ) {
    alert("Player 2 Won");
    clearBoard();
  } else if (
    playSquares[0].textContent == "❌" &&
    playSquares[3].textContent == "❌" &&
    playSquares[6].textContent == "❌"
  ) {
    alert("Player 1 Won");
    clearBoard();
  } else if (
    playSquares[0].textContent == "⭕" &&
    playSquares[3].textContent == "⭕" &&
    playSquares[6].textContent == "⭕"
  ) {
    alert("Player 2 Won");
    clearBoard();
  } else if (
    playSquares[1].textContent == "❌" &&
    playSquares[4].textContent == "❌" &&
    playSquares[7].textContent == "❌"
  ) {
    alert("Player 1 Won");
    clearBoard();
  } else if (
    playSquares[1].textContent == "⭕" &&
    playSquares[4].textContent == "⭕" &&
    playSquares[7].textContent == "⭕"
  ) {
    alert("Player 2 Won");
    clearBoard();
  } else if (
    playSquares[2].textContent == "❌" &&
    playSquares[5].textContent == "❌" &&
    playSquares[8].textContent == "❌"
  ) {
    alert("Player 1 Won");
    clearBoard();
  } else if (
    playSquares[2].textContent == "⭕" &&
    playSquares[5].textContent == "⭕" &&
    playSquares[8].textContent == "⭕"
  ) {
    alert("Player 2 Won");
    clearBoard();
  } else if (
    playSquares[0].textContent == "❌" &&
    playSquares[4].textContent == "❌" &&
    playSquares[8].textContent == "❌"
  ) {
    alert("Player 1 Won");
    clearBoard();
  } else if (
    playSquares[0].textContent == "⭕" &&
    playSquares[4].textContent == "⭕" &&
    playSquares[8].textContent == "⭕"
  ) {
    alert("Player 2 Won");
    clearBoard();
  } else if (
    playSquares[2].textContent == "❌" &&
    playSquares[4].textContent == "❌" &&
    playSquares[6].textContent == "❌"
  ) {
    alert("Player 1 Won");
    clearBoard();
  } else if (
    playSquares[2].textContent == "⭕" &&
    playSquares[4].textContent == "⭕" &&
    playSquares[6].textContent == "⭕"
  ) {
    alert("Player 2 Won");
    clearBoard();
  }
};

// Check Draw
let draw = 0;

const checkDraw = () => {
  draw = 0;
  for (const square of playSquares) {
    if (square.textContent == "❌" || square.textContent == "⭕") {
      draw++;
    }
    if (draw == 9) {
      alert("It's a draw.");
      clearBoard();
    }
  }
};
