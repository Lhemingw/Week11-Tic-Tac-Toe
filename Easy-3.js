const board = document.getElementById('board');
const turnText = document.getElementById('turn');
const restartButton = document.getElementById('restart');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(index) {
  if (!gameBoard[index]) {
    gameBoard[index] = currentPlayer;
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
      
      const imgElement = document.createElement('img');
      imgElement.src = gameBoard[index] === 'X' ? 'Photos/James-T.Kurt_cropped_135x135.png' : (gameBoard[index] === 'O' ? 'Photos/Jean-Luc_Picard_cropped_135x135.png' : ''); // Replace with actual image URLs
      imgElement.alt = gameBoard[index] || '';
      
      cellElement.appendChild(imgElement);
      cellElement.addEventListener('click', () => handleCellClick(index));
      
      rowElement.appendChild(cellElement);
    }
    
    board.appendChild(rowElement);
  }
}
//Step 2: Update CSS

//You may also want to adjust the CSS to style the game board cells properly. Here's a basic example of how you might structure your CSS for the cells:

//css
//Copy code
//.cell {
 // border: 1px solid #ccc;
 // width: 100px;
 // height: 100px;
 // display: flex;
  //justify-content: center;
  //align-items: center;
//}

//.cell img {
//  max-width: 100%;
//  max-height: 100%;
//}
//Make sure to replace the image URLs and adjust the CSS as needed for your specific design.

//With these modifications, your Tic-Tac-Toe game should have a 3x3 grid layout resembling a "#" sign, and images will be displayed in the cells.





  //}
  gameBoard.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => handleCellClick(index));
    board.appendChild(cellElement);
  });
//}

function checkGameStatus() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]            // Diagonals
  ]; 

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      showResult(`${currentPlayer} wins!`);
      return;
      //((gameBoard[a] === 'X' && gameBoard[b] === 'X' && gameBoard[c] === 'X') || 
    //(gameBoard[a] === 'O' && gameBoard[b] === 'O' && gameBoard[c] === 'O'));
    }
    //const winner = gameBoard[a] === `X`? 'James Kirk' : 'Jean-Luc Picard';
    //showResult(`${winner} wins!`);  Took this out!!!! and it was my problem! on not working, it was saying that each player was winning on each move!
      //return;  This is for to declare the winner-James or Pickard
  }

  if (!gameBoard.includes('')) {
   showResult("It's a draw!");
  }


function showResult(message) {
  const alertElement = document.createElement('div');
  alertElement.classList.add('alert', 'alert-success', 'mt-3');
  alertElement.innerHTML = message; // Combine the message and results;
  board.appendChild(alertElement);
}
//showResult("Congratulations! Player X wins!", "Winning Results: [0, 1, 2]");

function restartGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  renderBoard();
  turnText.textContent = `${currentPlayer}'s Turn`;
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => alert.remove());
}

restartButton.addEventListener('click', restartGame);

renderBoard();




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