const cells = document.querySelectorAll('[data-cell]');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = Array(9).fill(null);
const humanPlayer = 'X';
const computerPlayer = 'O';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

resetButton.addEventListener('click', resetGame);

function handleClick(event) {
    const cell = event.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (board[cellIndex] !== null || checkWin(humanPlayer) || checkWin(computerPlayer)) {
        return;
    }

    makeMove(cell, cellIndex, humanPlayer);

    if (!checkWin(humanPlayer) && !board.every(cell => cell !== null)) {
        setTimeout(computerMove, 500);
    }
}

function makeMove(cell, index, player) {
    board[index] = player;
    cell.textContent = player;

    if (checkWin(player)) {
        statusText.textContent = `${player} Wins!`;
        cells.forEach(cell => cell.removeEventListener('click', handleClick));
    } else if (board.every(cell => cell !== null)) {
        statusText.textContent = `It's a Draw!`;
    } else {
        currentPlayer = player === 'X' ? 'O' : 'X';
        statusText.textContent = `${currentPlayer}'s Turn`;
    }
}

function computerMove() {
    let availableCells = board
        .map((cell, index) => (cell === null ? index : null))
        .filter(index => index !== null);

    let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    let cell = cells[randomIndex];

    makeMove(cell, randomIndex, computerPlayer);
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function resetGame() {
    board.fill(null);
    currentPlayer = 'X';
    statusText.textContent = `${currentPlayer}'s Turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleClick, { once: true });
    });
}

statusText.textContent = `${currentPlayer}'s Turn`;
