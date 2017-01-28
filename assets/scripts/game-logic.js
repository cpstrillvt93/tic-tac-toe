'use strict';

// global variables
let board = ['', '', '', '', '', '', '', '', ''];

let player = 'X';

let turnCount = 0;

let winner = false;

const switchPlayer = function () {
  if (turnCount % 2 === 0) {
      player = 'X';
    } else {
      player = 'O';
    }
    turnCount++;
  console.log(player + '' + 'Your turn!');
  return turnCount;
};

//play x or o depending on player_turn;
const play_move = function(index){
  if(board[index] !== "X" && board[index] !== "O"){
    if (player === 'X') {
      board[index] = 'X';
    } else {
      board[index] = 'O';
    }
  }
  console.log('nice move');
};

//check for winners function
let checkWinner = function () {
  if ((board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
  (board[2] !== '' && board[2] === board[4] && board[2] === board[6])) {
    console.log('You Win!');
    winner = true;
  } else if ((board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
  (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
  (board[6] !== '' && board[6] === board[7] && board[6] === board[8])) {
    console.log('You Win!');
    winner = true;
  } else if ((board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
  (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
  (board[2] !== '' && board[2] === board[5] && board[2] === board[8])) {
    console.log('You Win!');//Jquery?
    winner = true;
  }

};
//combine all winning conditional functions for one exportable function.
// const winner = function () {
//   if(diagonalWinner === true || rowWinner === true || columnWinner === true) {
//   console.log('player ' + player + ' ' + board + 'you win!');
// }
// };

//Make tile click with appropriate function
const updateBoard = function () {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 'X') {
      $('#' + i).text('X');
    } else if (board[i] === 'O') {
      $('#' + i).text('O');
    }
  }
};

const resetBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('#' + i).text('');
  }
};

const runGame = function (event) {
  switchPlayer();
  play_move(parseInt(event.target.id));
  updateBoard();
  checkWinner();
  if (winner === true) {
    resetBoard();
  }
};
const addHandlers = () => {
  $('#0').on('click', runGame);
  $('#1').on('click', runGame);
  $('#2').on('click', runGame);
  $('#3').on('click', runGame);
  $('#4').on('click', runGame);
  $('#5').on('click', runGame);
  $('#6').on('click', runGame);
  $('#7').on('click', runGame);
  $('#8').on('click', runGame);
};

module.exports = {
    addHandlers,
    board,
    updateBoard,
    switchPlayer,
    play_move,
    runGame,
    checkWinner,
    resetBoard,
};
