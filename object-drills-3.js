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

