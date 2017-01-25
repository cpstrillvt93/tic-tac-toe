'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const game = require('./game-logic');
$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
$(() => {
  //

  //$('#box-id').on('click',bookEvents.onGetBooks);
  $('#0').on('click', function(){
    if ($('#0').text() === '') {
      $( "#0" ).text(game.player);
    }
    else {
      alert('error');
    }
    // $( "#0" ).text('game.player');
  console.log('box 0 clicked'); //how to block second move
});
  $('#1').on('click', function(){
    if ($('#1').text() === '') {
      $( "#1" ).text(game.player);
    }
    else {
      alert('error');
    }
  console.log('box 1 clicked');
});
  $('#2').on('click', function(){
    if ($('#2').text() === '') {
      $( "#2" ).text(game.player);
    }
    else {
      alert('error');
    }
  console.log('box 2 clicked');
});
  $('#3').on('click', function(){
    if ($('#3').text() === '') {
      $( "#3" ).text(game.player);
    }
    else {
      alert('error');
    }
  console.log('box 3 clicked');
});
  $('#4').on('click', function(){
    if ($('#4').text() === '') {
      $( "#4" ).text(game.player);
    }
    else {
      alert('error');
    }
  console.log('box 4 clicked');
});
  $('#5').on('click', function(){
    if ($('#5').text() === '') {
      $( "#5" ).text(game.player);
    }
    else {
      alert('error');
    }
  console.log('box 5 clicked');
});
  $('#6').on('click', function(){
    if ($('#6').text() === '') {
      $( "#6" ).text(game.player);
    }
    else {
      alert('error');
    }
  console.log('box 6 clicked');
});
  $('#7').on('click', function(){
    if ($('#7').text() === '') {
      $( "#7" ).text(game.player);
    }
    else {
      alert('error');
    }
  console.log('box 7 clicked');
});
  $('#8').on('click', function(){
    if ($('#8').text() === '') {
      $( "#8" ).text(game.player);
    }
    else {
      alert('error');
    }
  console.log('box 8 clicked');
});
});

// use require without a reference to ensure a file is bundled
require('./example');
