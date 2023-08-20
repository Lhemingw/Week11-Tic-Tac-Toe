// Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
//Create a Tic-Tac-Toe game grid using your HTML element of choice.
//When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
//A heading should say whether it is X's or O's turn and change with each move made.
//A button should be available to clear the grid and restart the game.
//When a player has won, or the board is full and the game results in a draw, 
//a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.

const tiles = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;

const boardState = Array(tiles.length);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", startNewGame);

//Sounds
const gameOverSound = new Audio("tng_phaser_strike.mp3");
const EnterGameSound1 = new Audio("tng_chime_clean.mp3");
const EnterGameSound2 = new Audio("tos_swoosh_1_long.mp3"); //had sounds/click.wav", change to  enter sound and door swip

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function setHoverText() {
  //remove all hover text
  tiles.forEach((tile) => {
    tile.classList.remove("x-hover");
    tile.classList.remove("o-hover");
  });

  const hoverClass = `${turn.toLowerCase()}-hover`;

  tiles.forEach((tile) => {
    if (tile.innerText == "") {
      tile.classList.add(hoverClass);
    }
  });
}

setHoverText();

function tileClick(event) {
  if (gameOverArea.classList.contains("visible")) {
    return;
  }

  const tile = event.target;
  const tileNumber = tile.dataset.index;
  if (tile.innerText != "") {
    return;
  }

  if (turn === PLAYER_X) {
    tile.innerText = PLAYER_X;
    boardState[tileNumber - 1] = PLAYER_X;
    turn = PLAYER_O;
  } else {
    tile.innerText = PLAYER_O;
    boardState[tileNumber - 1] = PLAYER_O;
    turn = PLAYER_X;
  }

  clickSound.play();
  setHoverText();
  checkWinner();
}

function checkWinner() {
  //Check for a winner
  for (const winningCombination of winningCombinations) {
    //Object Destructuring
    const { combo, strikeClass } = winningCombination;
    const tileValue1 = boardState[combo[0] - 1];
    const tileValue2 = boardState[combo[1] - 1];
    const tileValue3 = boardState[combo[2] - 1];

    if (
      tileValue1 != null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      strike.classList.add(strikeClass);//Add energize or phaser here
      gameOverScreen(tileValue1);
      return;
    }
  }

  //Check for a draw
  const allTileFilledIn = boardState.every((tile) => tile !== null);
  if (allTileFilledIn) {
    gameOverScreen(null);
  }
}

function gameOverScreen(winnerText) {
  let text = "Draw!";
  if (winnerText != null) {
    text = `Winner is ${winnerText}!`;
  }
  gameOverArea.className = "visible";
  gameOverText.innerText = text;
  gameOverSound.play();
}

function startNewGame() {
  strike.className = "strike";
  gameOverArea.className = "hidden";
  boardState.fill(null);
  tiles.forEach((tile) => (tile.innerText = ""));
  turn = PLAYER_X;
  setHoverText();
}

const winningCombinations = [
  //rows
  { combo: [1, 2, 3], strikeClass: "strike-row-1" },//Have energize/phaser_strike sound on striking
  { combo: [4, 5, 6], strikeClass: "strike-row-2" },
  { combo: [7, 8, 9], strikeClass: "strike-row-3" },
  //columns
  { combo: [1, 4, 7], strikeClass: "strike-column-1" },
  { combo: [2, 5, 8], strikeClass: "strike-column-2" },
  { combo: [3, 6, 9], strikeClass: "strike-column-3" },
  //diagonals
  { combo: [1, 5, 9], strikeClass: "strike-diagonal-1" },
  { combo: [3, 5, 7], strikeClass: "strike-diagonal-2" },
];

//DIFFERENT POSSIBILITES
// const WINNING_PROBABILITIES = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
  
//   let currentPlayer = "X";
//   let gameBoard = ["", "", "", "", "", "", "", "", ""];
//   let avatarX, avatarO;
  
//   const cells = document.querySelectorAll(".cell");
  
//   const board = document.getElementById("board");
  
//   const playerXFile = document.getElementById("player-x-file");
//   const playerOFile = document.getElementById("player-o-file");
  
//   const playerXAvatarAction = document.getElementById("player-x-avatar-action");
//   const playerOAvatarAction = document.getElementById("player-o-avatar-action");
  
//   const playerXAvatar = document.getElementById("player-x-avatar");
//   const playerOAvatar = document.getElementById("player-o-avatar");

//To make win sound
  var audio = document.getElementsByTagName("object")[0];
  audio.play(); 

  var audio = $("#object")[0];
  $("").mouseenter(function() {
    audio.play();
  }); 