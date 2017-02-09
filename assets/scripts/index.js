'use strict';

require('./example');
require('./game-logic.js');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./../auth/events.js');


$(() => {
  authEvents.addHandlers();

});

$(() => {
  setAPIOrigin(location, config);
});
