'use strict';

const config = require('./../scripts/config');
const store = require('./../scripts/store');

const signUp = function(data){
  // console.log(data);
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function(atdata){
  // console.log(data);
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function(){
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const changePassword = function(data){
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: data,
  });
};

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const storeGame = function (player, winner, index) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      game: {
        cell: {
          index: index,
          value: player,
        },
        over: winner,
      }
}
  });
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame,
  showGames,
  storeGame,
};
