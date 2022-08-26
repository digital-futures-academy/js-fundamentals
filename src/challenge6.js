"use strict";
const encryption = function (unencrypted) {
  const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:."\\|,.<>/?\`~§±1234567890`; // value = [i] + 1. Note space before a, which will be character no. 1.
  let encrypted = "";
  for (let i = 0; i < unencrypted.length; i++) {
    encrypted += characters.indexOf(unencrypted[i]) + 1;
  }
  return encrypted;
};

const testStr = "My name is Deryn";
console.log(encryption(testStr));
