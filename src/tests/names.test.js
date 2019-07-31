const Names = require('../data/Names');

var assert = require('assert');

describe('Names tests', function() {
  describe('test first set of randomizers', function() {
    const names = new Names();
    it('sequential me', async function() {
        let bits = [];
        let size = 2;
        for (var i = 0; i < size; i++) {
            var bit = names.pickBit();
            bits.push(bit);
        }
        let output = names.sequential(bits);
        output  = names.jsUcfirst(output);
        console.log(`Sequential output of ${bits} = ${output}`);
        assert.ok(`Sequential output of ${bits} = ${output}`);
    });

    it('reverse me', async function() {
        let bits = [];
        let size = 2;
        for (var i = 0; i < size; i++) {
            var bit = names.pickBit();
            bits.push(bit);
        }
        let output = names.reverse(bits);
        output  = names.jsUcfirst(output);
        console.log(`Reversed output of ${bits} = ${output}`);
        assert.ok(`Reversed output of ${bits} = ${output}`);
    });

    it('backwards me', async function() {
        let bits = [];
        let size = 2;
        for (var i = 0; i < size; i++) {
            var bit = names.pickBit();
            bits.push(bit);
        }
        let output = names.backwards(bits);
        output  = names.jsUcfirst(output);
        console.log(`backwards output of ${bits} = ${output}`);
        assert.ok(`backwards output of ${bits} = ${output}`);
    });

    it('mix me', async function() {
        let bits = [];
        let size = 2;
        for (var i = 0; i < size; i++) {
            var bit = names.pickBit();
            bits.push(bit);
        }
        let output = names.mixed(bits);
        output  = names.jsUcfirst(output);
        console.log(`mixed output of ${bits} = ${output}`);
        assert.ok(`mixed output of ${bits} = ${output}`);
    });

    it('randomize me', async function() {
        let output = names.pickName();
        output  = names.jsUcfirst(output);
        console.log(`random ${output}`);
        assert.ok(`random ${output}`);
    });
});
});