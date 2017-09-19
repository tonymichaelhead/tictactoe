// Game logic
// 3 * 3 matrix
// users take turns placing an x or o
// game ends when user gets 3 in a row
// game returns winner

// create 3 * 3empty matrix: ' ' for empty space
// prompt first user to enter an x into a grid space x, y integers
// populate matrix with that x 
// check if there are any winners vertically or horizontally, iterating over entire board. 
    //use checkRows and checkColumns and checkGrid functions
// if so, log last person to place as winner
//repeat for o player, switching players until winner is found

const grid = [
    [' ', ' ', ' '], 
    [' ', ' ', ' '], 
    [' ', ' ', ' ']
];

let winnerFound = false;
let gameOver = false;
let tieGame = false;
let allMovesCompleted = false;
let lastPlayer = null;
let winner;



const playerXMoves = () => {
    getGridInputs('X');
    lastPlayer = 'x';
}

const playerOMoves = () => {
    lastPlayer = 'O';
}

const nextPlayerMoves = () => {
    if (lastPlayer === null) {
        playerXMoves();
    }

    if (lastPlayer === 'x') {
        playerOMoves();
    } else {
        playerXMoves();
    }
    // keeps track of last player that moved
}

const showBoard = () => {
    console.log(
        `grid[0]
        grid[1]
        grid[2]`
    )
}

const getGridInputs = (letter) => {
    let columnIndex = prompt(`Please enter a column index ('0 through 2')`);
    let rowIndex = prompt(`Pleas enter a row index ('0 through 2)`);

    grid[rowIndex][columnIndex] = letter;
}

const logWinner = () => {

}

const checkRows = () => {

}

const checkColumns = () => {

}

const checkGrid = () => {
    
}

while (!gameOver) {
    nextPlayerMoves();
    showBoard();
    // checkGrid();
    // if (winnerFound) {
    //     gameOver = true;
    //     winner = lastPlayer;
    // } else if (allMovesCompleted) {
    //     gameOver = true;
    //     tieGame = true;
    // }
}

if (tieGame) {
    console.log('You are both winners at life!')
} else {
    console.log(`Congrats $(winner) for killing it in all facets of life, and tic-tac-toe!`);
}

