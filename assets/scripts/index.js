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
  $('.tiles').on('click', game.onTileClick);
  //

  //$('#box-id').on('click',bookEvents.onGetBooks);

});

// use require without a reference to ensure a file is bundled
require('./example');
