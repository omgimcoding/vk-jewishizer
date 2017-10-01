const nameBuilder = require('./nameBuilder');
const alphabet = require('../config/alphabet');
const names = require('../config/names');

function jewishize({ id, first_name, last_name, photo_100 }, mode) {
  if (mode === 'second') {
    last_name = trimLastName(last_name) +
      nameBuilder.secondHalf([checkCyrillicLatin(last_name[0])]);
    return { id, name: `${first_name} ${last_name}`, photo: photo_100 };
  } else if (mode === 'full') {
    last_name = nameBuilder.fullNormal([checkCyrillicLatin(last_name[0])]);
    return { id, name: `${first_name} ${last_name}`, photo: photo_100 };
  } else {
    last_name = nameBuilder.fullFunny([checkCyrillicLatin(last_name[0])]);
    return { id, name: `${first_name} ${last_name}`, photo: photo_100 };
  }
};

function trimLastName(lastName) {
  if (lastName.length > 3) {
    do {
      lastName = lastName.slice(0, -1);
    } while (isVowel(lastName[lastName.length - 1]));
  }

  return lastName;
};

function isVowel(lastNameLetter) {
  return alphabet[checkCyrillicLatin(lastNameLetter)].vowels
    .some(letter => letter === lastNameLetter.toLowerCase()) ? true : false;
};

function checkCyrillicLatin(lastNameLetter) {
  return alphabet.en.all()
    .some(alphabetLetter => alphabetLetter === lastNameLetter.toLowerCase()) ? 'en' : 'ru';
};

module.exports = jewishize;
