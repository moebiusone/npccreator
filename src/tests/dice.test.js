const Dice = require('../utils/Dice');

var assert = require('assert');

function rangeValidator (num, lowerBound, upperBound) {
  return ((num >= lowerBound) && (num <= upperBound)) ? true : false;
}

function rollThoseDice (numSides, numberOfRolls) {
  for (var i = 0; i < numberOfRolls; i++) {
    var die = Dice.rollDie(numSides);
    console.log(`Rolling d${numSides}, roll ${i+1} of ${numberOfRolls}`);
    assert.equal(rangeValidator(die, 1, numSides), true);
  }
}

function pearsonX2Test (numSides) {
  rollThoseDice(numSides, numSides * 5);
}

describe('Dice tests', function() {
  describe('test some die rolling stuff', function() {
    it('roll some dice, make sure the number is in the right range', async function(){
      pearsonX2Test(3);
      pearsonX2Test(4);
      pearsonX2Test(6);
      pearsonX2Test(8);
      pearsonX2Test(10);
      pearsonX2Test(12);
      pearsonX2Test(20);
      pearsonX2Test(100);
    });
  });
});