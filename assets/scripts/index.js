'use strict';

require('./example');
require('./game-logic.js');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
// const board = require('./board');
const authEvents = require('./../auth/events.js');
const game = require('./game-logic');


$(() => {
  authEvents.addHandlers();
  game.addTileHandlers();
  game.addGameButtons();

});

$(() => {
  setAPIOrigin(location, config);
});
