'use strict';

// global variables
let board = ['', '', '', '', '', '', '', '', ''];

let player = 'X';
//look through board for
//switch between x and o function
// let switchPlayer = function(index) {
//   let countPlayer = 0;
//   for (let i = 0;) {
//     if (board[i] === "X" || board[i] === "O"){
//     countPlayer++;
//   }
// };
// };
let switchPlayer = function () {
  if (player === 'X') {
    player = 'O';
  }
  else {
    player = 'X';
  }
  console.log(player + '' + 'Your turn!');
};

//play x or o depending on player_turn;
let play_move = function(index){
  if(board[index] !== "X" && board[index] !== "O"){
    if (player === 'X') {
      board[index] = 'X';
    } else {
      board[index] = 'O';
    }
  }

  console.log('nice move');
};

//create game board that puts value in correct game board/tile index
// one of the two below?

// let setGameArray = function (tiles) {
//   let index = $(tiles).data('.board');
//   board[index] = player;
//   console.log(board);
// };

// let setGameArray = function (board) {
//   let index = $(this).parent().index('.board');
//   board[index] = player_turn;
//   console.log('board up to date' + '' + "next player's turn");
// };

//check for winners function
let diagonalWinner = function (board) {
  if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]){
    console.log('You Win!');//Jquery?
    return true;
  }
  else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    console.log('You Win');
    return true;
  }
  else {
    return false;
  }
};

let rowWinner = function (board) {
  if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]){
    console.log('You Win!');//Jquery?
    return true;
  }
  else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
    console.log('You Win');
    return true;
  }
  else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    console.log('You Win');
    return true;
  }
  else {
    return false;
  }
};

let columnWinner = function (board) {
  if ((board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
  (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
  (board[2] !== '' && board[2] === board[5] && board[2] === board[8])) {
    console.log('You Win!');//Jquery?
    return true;
  }
  // else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
  //   console.log('You Win');
  //   return true;
  // }
  // else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
  //   console.log('You Win');
  //   return true;
  // }
  // else {
  //   return false;
  // }
};


//combine all winning conditional functions for one exportable function.
const winner = function () {
  if(diagonalWinner === true || rowWinner === true || columnWinner === true) {
  console.log('player ' + player + ' ' + board + 'you win!');
}
};
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


const runGame = function (event) {
  switchPlayer();
  play_move(parseInt(event.target.id));
  console.log(board);
  updateBoard();
  winner();
};

  //if ($( !== X OR O))

    // // play_move();
    // setGameArray();
    // winner();
// };
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
    winner,
};
