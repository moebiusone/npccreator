const Traits = require('../data/Traits');

var assert = require('assert');

describe('Traits tests', function() {
  describe('test some dependency stuff', function() {
    const myTraits = ['Bits & Bytes'];
    const traits = new Traits();
    it('should return true when prereq is present', async function(){
      let robotics = await traits.getTrait('Robotics');
      let hasBitsAndBytes = await traits.hasPrerequisites(robotics, myTraits);
      console.log(`has Bits & Bytes, prereq for Robotics = ${hasBitsAndBytes}`);
      assert.equal(hasBitsAndBytes, true);
    });
    it('should return false when prereq is missing', async function(){
      let necropsy = await traits.getTrait('Necropsy');
      let missingBiologyOrXenoBiology = await traits.hasPrerequisites(necropsy, myTraits);
      console.log(`missing Biology or Xenobiology, prereq for Necropsy = ${missingBiologyOrXenoBiology}`);
      assert.equal(missingBiologyOrXenoBiology, false);
    });

    it('should return one or more attributes to modify for certain traits', async function(){
      let back2school = await traits.getTrait('Back to School');
      assert.equal(back2school.attributesToMod, 'Education');

      let hittingTheGym = await traits.getTrait('Hitting the Gym');
      assert.equal(hittingTheGym.attributesToMod, 'Toughness');

      let cyberEnhancement = await traits.getTrait('Cybernetic Enhancement');
      assert.equal(cyberEnhancement.attributesToMod.length > 1, true);

      let geneticEnhancement = await traits.getTrait('Genetic Enhancement');
      assert.equal(geneticEnhancement.attributesToMod.length > 1, true);

    });
  });
});