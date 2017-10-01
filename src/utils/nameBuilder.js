const names = require('../config/names');

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

let nameBuilder = {
  firstHalfNormal: (characterSet) => getRandom(names[characterSet].firstHalf.normal),
  firstHalfFunny: (characterSet) => getRandom(names[characterSet].firstHalf.funny),
  secondHalf: (characterSet) => getRandom(names[characterSet].secondHalf),
  fullNormal: function(characterSet) {
    return this.firstHalfNormal(characterSet) + this.secondHalf(characterSet);
  },
  fullFunny: function(characterSet) {
    return this.firstHalfFunny(characterSet) + this.secondHalf(characterSet);
  }
};

module.exports = nameBuilder;
