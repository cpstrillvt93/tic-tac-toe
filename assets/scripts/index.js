'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const game = require('./game-logic');
$(() => {
  setAPIOrigin(location, config);
  game.addHandlers();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
// $(() => {

  //

  //$('#box-id').on('click',bookEvents.onGetBooks);

// });

// use require without a reference to ensure a file is bundled
require('./example');
