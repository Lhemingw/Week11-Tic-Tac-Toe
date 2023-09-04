const board = document.getElementById('board');//This gets board set
const turnText = document.getElementById('turn');//This is the turn area
const restartButton = document.getElementById('restart'); //This is the restart button to make sure it restarts

let currentPlayer = 'X';  //I used X as a current player, but we have O as a player too
let gameBoard = ['', '', '', '', '', '', '', '', ''];//This is used for possible ways for players

function handleCellClick(index) { //This is the function for the click in the game board, it is the array above
  if (!gameBoard[index]) {
    gameBoard[index] = currentPlayer;//The way of getting the current player
    renderBoard();
    checkGameStatus();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnText.textContent = `${currentPlayer}'s Turn`;
  }
}

function renderBoard() {
  board.innerHTML = '';
  for (let i=0; i<3; i++){
    const rowElement = document.createElement('div');
    rowElement.classList.add('row', 'mb-2');
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      const cellElement = document.createElement('div');
      cellElement.classList.add('col', 'cell');
      
      const imgElement = document.createElement('img');//The way of getting the images
      imgElement.src = gameBoard[index] === 'X' ? 'Photos/James-T.Kurt_cropped_135x135.png' : (gameBoard[index] === 'O' ? 'Photos/Jean-Luc_Picard_cropped_135x135.png' : ''); // Replace with actual image URLs
      imgElement.alt = gameBoard[index] || '';
      
      cellElement.appendChild(imgElement);//Took the imgs to make it click
      cellElement.addEventListener('click', () => handleCellClick(index));//You have an event listener here to get the charters
      
      rowElement.appendChild(cellElement);//took a child from the parent and put it here.
    }
    
    board.appendChild(rowElement);
  }
}
  gameBoard.forEach((cell, index) => {// this is the gameboard area which brings up foreach
    const cellElement = document.createElement('div');//This is taking the html stuff out of the div
    cellElement.classList.add('cell');//This is further code to get it to add to the cell
    cellElement.textContent = cell;//the name that is called cellElement brings up the textcontent from in the cell
    cellElement.addEventListener('click', () => handleCellClick(index));//add another event listener, to get the characters to go
    board.appendChild(cellElement);//more appenChild, this was the only way that I knew how to do this.  No time to research further
  });
//}

function checkGameStatus() {//This is checking for game status on who won.  The list of combos
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]            // Diagonals
  ]; 

  for (const combo of winningCombos) {//Winning combos
    const [a, b, c] = combo;//I have a,b,c for the gameboard with && gameboard a& gamebord a.  The same for gamebord b && gamebord a c is alone
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      showResult(`${currentPlayer} wins!`);//There is not much in c with diagonals
      return;
      //((gameBoard[a] === 'X' && gameBoard[b] === 'X' && gameBoard[c] === 'X') || 
    //(gameBoard[a] === 'O' && gameBoard[b] === 'O' && gameBoard[c] === 'O'));
    }
    //const winner = gameBoard[a] === `X`? 'James Kirk' : 'Jean-Luc Picard';
    //showResult(`${winner} wins!`);  Took this out!!!! and it was my problem! on not working, it was saying that each player was winning on each move!
      //return;  This is for to declare the winner-James or Pickard
  }

  if (!gameBoard.includes('')) {//Show result, it is a draw if it is a draw, I have not created one
   showResult("It's a draw!");
  }


function showResult(message) {//This is the message area, I tried to say that Kurt or Jean would win, but I broke it, I will play later
  const alertElement = document.createElement('div');//after I hand this in
  alertElement.classList.add('alert', 'alert-success', 'mt-3');
  alertElement.innerHTML = message; // Combine the message and results;
  board.appendChild(alertElement);
}
//showResult("Congratulations! Player X wins!", "Winning Results: [0, 1, 2]");

function restartGame() {//Restart game area, with empty gameboard and current X, and current player turn
  gameBoard = ['', '', '', '', '', '', '', '', ''];//and then an alert to remover
  currentPlayer = 'X';
  renderBoard();
  turnText.textContent = `${currentPlayer}'s Turn`;
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => alert.remove());
}

restartButton.addEventListener('click', restartGame);//and a restart button for a button

renderBoard();//this works as the war game and a start gameboard this reners the board.




/*
 * Event object: 
 * https://developer.mozilla.org/en-US/docs/Web/API/Event
 *
 * Target object:
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/target
 *
 * textContent property:
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 *
 * getAttribute method:
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute 
 *
*/
//function displayValue(e) {

   // console.log(e); // information on the event
    
    // value:
    // e.target => node
    // e.target.textContent => node property that gives us the value
   // alert(`value: ${e.target.textContent}`) 
    // position:
    // e.target.getAttribute => node property that gets value of a attribute
    //alert(`position: ${e.target.getAttribute("data-index")}`);
    
}