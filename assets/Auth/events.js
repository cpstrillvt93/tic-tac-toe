'use strict';
const getFormFields = require('../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
// const config = ('./../scripts/config');
const store = require('./../scripts/store');

// $('#sign-up').hide();

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
    console.log('signed up');
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store;
    })
    .then(ui.success)
    .then(() => {
      console.log(store);
    })
    .catch(ui.failure)
    ;
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
  .then(ui.success)
  .catch(ui.failure)
  ;
};

const onCreateGame = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.createGame(data)
  .then((response)=> {
    store.game = response.game;
  })
  .then(ui.success)
  .catch(ui.failure)
  ;
};

const onShowGame = function () {
  event.preventDefault();

  api.showGames()
  .then(ui.success)
  .catch(ui.failure)
  ;
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#start').on('click', onCreateGame);
  $('#show-games').on('click', onShowGame);


};

module.exports = {
  addHandlers,
};
