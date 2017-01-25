'use strict';


// let board = [1, 2, 3,
//              4, 5, 6,
//              7, 8, 9];

// let board = [null, null, null
//             null, null, null,
//             null, null, null];

// let board = [];


let board = ['', '', '', '', '', '', '', '', ''];

let player = 'x';

let player_move = function () {
  if(player === 'x') {
    player = 'y';
  }
  else {
    player = 'x';
  }
};
let checkDiagonalWinner = function (board) {
  if (board[0] !== '' && board[0] === board[5] && board[0] === board[9]){
    console.log('You Win!');//Jquery?
    return true;
  }
  else if (board[3] !== '' && board[3] === board[5] && board[3] === board[7]) {
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

let checkRowWinner = function (board) {
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

let checkColumnWinner = function (board) {
  if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]){
    console.log('You Win!');//Jquery?
    return true;
  }
  else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
    console.log('You Win');
    return true;
  }
  else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
    console.log('You Win');
    return true;
  }
  else {
    return false;
  }
};

module.exports = {
    board,
    checkDiagonalWinner,
    checkRowWinner,
    checkColumnWinner,
    player_move,
};
