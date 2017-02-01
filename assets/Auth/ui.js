'use strict';

const success = (data) => {
  if (data) { console.log(data); }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  if (data) {
    console.log(data);
  }
};






module.exports = {
  failure,
  success,
  signInSuccess,
};
