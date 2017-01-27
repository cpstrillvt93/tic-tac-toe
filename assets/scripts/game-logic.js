'use strict';

// global variables
let board = ['', '', '', '', '', '', '', '', ''];
let player = 'x';

//switch between x and o function
let player_turn = function () {
  if(player === 'x') {
    player = 'o';
  }
  else {
    player = 'x';
  }
  console.log(player + '' + 'Your turn!');
};

//play x or o depending on player_turn;
const play_move = function(player){
  $('.tiles').text(player);
  console.log('nice move');
};

//create game board that puts value in correct game board/tile index
// one of the two below?

let setGameArray = function (tiles) {
  let index = $(tiles).data('.board');
  board[index] = player;
  console.log(board);
};

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
  else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    console.log('You Win');
    return true;
  }
  else {
    return false;
  }
};

let rowWinner = function () {
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
//combine all winning conditional functions for one exportable function.
const winner = function () {
  if(diagonalWinner === true || rowWinner === true || columnWinner === true) {
    return true;
  }
  console.log(player + '' + 'you win!');
};
//Make tile click with appropriate function
const onTileClick = function (event) {
  if ($('.tiles').text() === '') {
    $( ".tiles" ).text(player);
  }
  else {
    alert('error');
  }
    play_move(event.target);
    setGameArray(event.target);
    player_turn();
    winner();
};

const addHandlers = () => {
  $('.tiles').on('click', onTileClick);
};
module.exports = {
    addHandlers,
    board,
    onTileClick,
    player_turn,
    play_move,
    setGameArray,
    winner,
};
