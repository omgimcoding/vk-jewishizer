const alphabet = {
  ru: {
    vowels: ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
    consonants: [
      'б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п',
      'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь'
    ],
    all: function() {
      return this.consonants.concat(this.vowels);
    }
  },
  en: {
    vowels: ['a', 'e', 'i', 'o', 'u', 'y'],
    consonants: [
      'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
      'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
    ],
    all: function() {
      return this.consonants.concat(this.vowels);
    }
  },
};

module.exports = alphabet;
