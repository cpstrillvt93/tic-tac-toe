'use strict';

// const success = (data) => {
//   if (data) { console.log(data); }
// };
//
// const failure = (error) => {
//   console.error(error);
// };

const onSignUpSuccess = () => {
  $('.hide-sign-up').on('click').hide();
  // $('.hide-sign-in').on('click').hide();
  $('.hide-change-pw').on('click').show();
  $('.hide-sign-out').on('click').show();
  $('.board').show();
  $('#start').show();
  $('#show-games').show();
};

const onSignInSuccess = () => {
  $('.hide-sign-in').on('click').hide();
  $('.hide-sign-up').on('click').hide();
  $('.hide-change-pw').on('click').show();
  $('.hide-sign-out').on('click').show();
  $('.board').show();
  $('#start').show();
  $('#show-games').show();
  $('#scoreboard').show();
  $('#game-log').show();
  $('#scoreboard').text(' ');
  $('#game-log').text(' ');

};

const onSignOutSuccess = () => {
  $('.hide-sign-up').on('click').show();
  $('.hide-sign-in').on('click').show();
  $('.hide-change-pw').on('click').hide();
  $('.hide-sign-out').on('click').hide();
  $('.board').hide();
  $('#start').hide();
  $('#show-games').hide();
  $('#scoreboard').hide();
  $('#game-log').hide();
};

const showGameSuccess = (data) => {
  $('#game-log').on('click').text('You\'ve played ' + data.games.length + ' games!');
};







module.exports = {
  // failure,
  // success,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  showGameSuccess,

};
