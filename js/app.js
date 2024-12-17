const gameboardEl = document.querySelector('.board'); // Selects board
const newGame = document.querySelector('.new-game'); //Selects button
const message = document.querySelector('#message'); // Selects message

let playerOne = null;
let playerTwo = null;


document.addEventListener('DOMContentLoaded', () => {


  // Step 3: Define the Game Start Function
  function gameStart() {
    playerOne = true;
    playerTwo = null;

    const squares = document.querySelectorAll('.sqr');
    squares.forEach(sqr => sqr.innerText = '');

    message.innerText = ''; // Reset the message
    console.log("New game started");
  }

  // Automatically start the game on page load
  gameStart();

  // Add event listener to New Game button
  newGame.addEventListener('click', gameStart);

  // Handle clicks on the game board
  gameboardEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('sqr')) {
      if (e.target.innerText === '') {  // Check if the square is empty
        if (playerOne === true) {
          e.target.innerText = 'X';
          playerOne = null;
          playerTwo = true;
        } else if (playerTwo === true) {
          e.target.innerText = 'O';
          playerTwo = null;
          playerOne = true;
        }
        gameStop(); // Check for a winner after each move
      }
    }
  });
}); // <- Add this closing parenthesis and curly bracels

// Step 4: Define the Check Win Function
function checkWin() {
  const squares = document.querySelectorAll('.sqr');
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]  // Diagonals
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (squares[a].innerText && squares[a].innerText === squares[b].innerText && squares[a].innerText === squares[c].innerText) {
      return squares[a].innerText; // Returns 'X' or 'O'
    }
  }
  return null; // No winner
}

// Step 5: Define the Game Stop Function
function gameStop() {
  const winner = checkWin();
  if (winner) {
    document.querySelector('#message').innerText = `${winner} wins!`;
  }
}
