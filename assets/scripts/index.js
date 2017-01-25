'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
$(() => {

  //$('#box-id').on('click',bookEvents.onGetBooks);
  $('#0').on('click', function(){
  console.log('box clicked');
});
  $('#1').on('click', function(){
  console.log('box clicked');
});
  $('#2').on('click', function(){
  console.log('box clicked');
});
  $('#3').on('click', function(){
  console.log('box clicked');
});
  $('#4').on('click', function(){
  console.log('box clicked');
});
  $('#5').on('click', function(){
  console.log('box clicked');
});
  $('#6').on('click', function(){
  console.log('box clicked');
});
  $('#7').on('click', function(){
  console.log('box clicked');
});
  $('#8').on('click', function(){
  console.log('box clicked');
});
});

// use require without a reference to ensure a file is bundled
require('./example');
