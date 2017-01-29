'use strict';

// global variables
let board = ['', '', '', '', '', '', '', '', ''];

let player = 'X';

let turnCount = 0;

let winner = false;

let xWin = 0;

let oWin = 0;

const switchPlayer = function () {
  if (turnCount % 2 === 0 ) {
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
  if (board[index] !== '') {
    console.log('spot already taken');
    turnCount--;
    return 'spot already taken';
  }
  else if(board[index] !== "X" && board[index] !== "O"){
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

//add tile clicked to array
const updateBoard = function () {
  for (let index = 0; index < board.length; index++) {
    if (board[index] === 'X') {
      $('#' + index).text('X');
    } else if (board[index] === 'O') {
      $('#' + index).text('O');
    }
  }
};

const resetBoard = function () {
  for (let index = 0; index < board.length; index++) {
    board[index] = '';
    $('#' + index).text('');
  }
};

const updateScoreboard = function () {
  if (winner === true && player === 'X') {
      xWin++;
  } else {
      oWin++;
  }
};
const runGame = function (event) {
  switchPlayer();
  play_move(parseInt(event.target.id));
  updateBoard();
    console.log(board);
  checkWinner();
  if (winner === true) {
    resetBoard();
    console.log(board);
    updateBoard();
    updateScoreboard();
  }
};



const addTileHandlers = () => {
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

// const addGameButtons = () => {
//   $('#start').on('click', resetBoard);
// };

module.exports = {
    addTileHandlers,
    // addGameButtons,
    board,
    updateBoard,
    switchPlayer,
    play_move,
    runGame,
    checkWinner,
    resetBoard,
    updateScoreboard,

};
