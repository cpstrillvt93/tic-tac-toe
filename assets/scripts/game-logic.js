'use strict';


const api = require('../auth/api');
// const store = require('./store');
const store = require('./store');
// const ui = require('../auth/ui');
// global variables
let board = ['', '', '', '', '', '', '', '', ''];

let player = 'X';

let turnCount = 0;

let winner = false;

let tie = false;

// let xWin = 0;
//
// let oWin = 0;

// let gameCount = 0;


const switchPlayer = function () {
  if (turnCount % 2 === 0 ) {
      player = 'X';
    } else {
      player = 'O';
    }
    turnCount++;
  // console.log(player + '' + 'Your turn!');
  return turnCount;
};

//play x or o depending on player_turn;
const play_move = function(index){
  if (board[index] !== '') {
    // console.log('spot already taken');
    turnCount--;
    return 'spot already taken';
  } else if(board[index] !== "X" && board[index] !== "O"){
    if (player === 'X') {
      board[index] = 'X';
    } else {
      board[index] = 'O';
    }
  }
  // console.log('nice move');
};

//check for winners function
let checkWinner = function () {
  if ((board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
  (board[2] !== '' && board[2] === board[4] && board[2] === board[6])) {
    // console.log('You Win!');
    winner = true;
    return true;
  } else if ((board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
  (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
  (board[6] !== '' && board[6] === board[7] && board[6] === board[8])) {
    // console.log('You Win!');
    winner = true;
    return true;
  } else if ((board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
  (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
  (board[2] !== '' && board[2] === board[5] && board[2] === board[8])) {
    // console.log('You Win!');//Jquery?
    winner = true;
    return true;
  }

  else if (winner !== true && turnCount >= 9) {
    tie = true;
    // gameCount++;
    // console.log('Tie game!');
    return true;
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

const runGame = function (event) {
  switchPlayer();
  play_move(parseInt(event.target.id));
  updateBoard();
    // console.log(board);
  winner = checkWinner();
  api.storeGame(player, winner, parseInt(event.target.id));
  if (winner === true) {
    // resetBoard();
    turnCount--;
    // gameCount++;
    $('#scoreboard').text(player + '' + ' Wins!');
    $('.tiles').off('click');
    // console.log(board);
  }
  if (tie === true) {
    turnCount--;
    // gameCount++;
       $('#scoreboard').text('Tie Game!');
       $('.tiles').off('click');
      //  console.log(board);
  }
};

const onCreateGameSuccess = () => {
  $('.board').show();
  $('.tiles').off('click');
  $('.tiles').on('click', runGame);
  // $('#game-log').on('click').text('You\'ve played ' + gameCount + ' games!');
};


const onCreateGameFailure = () => {

};

const resetBoard = function () {
  // setting all the values on the board to blank
  for (let index = 0; index < board.length; index++) {
    board[index] = '';
    $('#' + index).text('');
  }
  // setting count, winner and tie
    turnCount = 0;
    winner = false;
    tie = false;
    // creates the game in the api
    api.createGame()
      .then((response)=> {
        store.game = response.game;
      })
      .then(onCreateGameSuccess)
      .catch(onCreateGameFailure)
    ;
    // console.log('game board was reset! Thats another game played!');
};


module.exports = {
    board,
    updateBoard,
    switchPlayer,
    play_move,
    runGame,
    checkWinner,
    resetBoard,
};
