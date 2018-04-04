'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water * this.flour) / 100;
  },

};
// console.log(`${loaf.flour} ${loaf.water}`);
// console.log(loaf.hydration());

const fooBar = {
  foo: 'some foo',
  bar: 'some bar',
  fum: 'more fum',
  quux: 3.14,
  spam: false,
};

// for (let fb in fooBar) {
//   console.log(fb, fooBar[fb]);
// }

const hobbitsMeals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};
//console.log(hobbitsMeals.meals[3]);

const persons = [
  {
    name: 'Bob',
    jobTitle: 'Preacher',
  },
  {
    name: 'Jeff',
    jobTitle: 'Astronaut',
  },
  {
    name: 'Jill',
    jobTitle: 'Networking Engineer',
  },
];

//persons.forEach(e => console.log(e.name, e.jobTitle));

const persons2 = [
  {
    name: 'Bob',
    jobTitle: 'Preacher',
    boss: 'big bother',
  },
  {
    name: 'Jeff',
    jobTitle: 'Astronaut',
    boss: 'big brother',
  },
  {
    name: 'Jill',
    jobTitle: 'Networking Engineer',
  },
];

persons2.forEach(e => {
  let message = e.hasOwnProperty('boss') ? `${e.jobTitle} ${e.name} reports to ${e.boss}` : `${e.jobTitle} ${e.name} doesn't report to anybody`;
  //console.log(message);
});


const toBeDecoded = 'craft block argon meter bells brown croon droop';

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

function decodeWords(string) {
  let words = string.split(' ');
  let decodedWord = '';
  words.forEach(e => decodedWord += decode(e));
  return decodedWord;
}

function decode(string) {
  if (cipher.hasOwnProperty(string[0])) {
    return string.charAt(cipher[string[0]]);
  }
  return ' ';
}
//console.log(decodeWords(toBeDecoded));

// function mammal(name, numEyes) {
//   return {
//     name: name,
//     isWarmblooded: true,
//     numEyes: numEyes,
//   };
// }


function createCharacter(name, nickName, race, origin, attack, defense) {
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin}`;
    },
    evaluateFight: function(opponent) {
      let thisDamage = this.defense > opponent.attack ? 0 : opponent.attack - this.defense; 
      let opponentDamage = opponent.defense > this.attack ? 0 : this.attack - opponent.defense;
      return `Your opponent takes ${opponentDamage} damage and you receive ${thisDamage} damage`;
    },
  };
}
const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Arogorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 7));

//console.log(characters.find(e => e.nickName === 'aragorn'));
const hobbits = characters.filter(e => e.race === 'Hobbit');
//console.log(hobbits);
const tuffGuys = characters.filter(e => e.attack > 5);
console.log(tuffGuys);
//console.log(characters);