const rollDie = require('../utils/Dice').rollDie;

class Names {

    constructor() {
        this.nameBits = [];
        this.nameBits.push('ellen');
        this.nameBits.push('ripley');
        this.nameBits.push('kerr');
        this.nameBits.push('avon');                
        this.nameBits.push('malcolm');
        this.nameBits.push('reynolds');
        this.nameBits.push('kar');
        this.nameBits.push('hal');
        this.nameBits.push('rick');
        this.nameBits.push('deckard');
        this.nameBits.push('han');
        this.nameBits.push('solo');
        this.nameBits.push('spock');
        this.nameBits.push('john');
        this.nameBits.push('crichton');
        this.nameBits.push('roy');
        this.nameBits.push('batty');
        this.nameBits.push('jack');
        this.nameBits.push('harkness');
        this.nameBits.push('james');
        this.nameBits.push('kirk');
        this.nameBits.push('jean');
        this.nameBits.push('picard');
        this.nameBits.push('londo');
        this.nameBits.push('mollari');
        this.nameBits.push('dana');
        this.nameBits.push('scully');
        this.nameBits.push('ianto');
        this.nameBits.push('jones');
        this.nameBits.push('yoda');

        this.numberOfNamesToPick = [];
        this.numberOfNamesToPick.push('1');
        this.numberOfNamesToPick.push('2');
//        this.numberOfNamesToPick.push('3');

        this.transformations = [];
        this.transformations.push('sequential');
        this.transformations.push('reverse');
        this.transformations.push('backwards');
        this.transformations.push('shuffle');
    }

    sequential(bits) {
        var output = '';
        if (bits) {
            for (var i = 0; i < bits.length; i++) {
                output += bits[i];
            }
        }
        return output;
    }

    reverse(bits) {
        var output = '';
        if (bits) {
            for (var i = bits.length - 1; i > -1; i--) {
                output += bits[i];
            }
        }
        return output;
    }

    reverseString(str) {
        var splitString = str.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    }    

    shuffle(str) {
        var a = str.split(""),
            n = a.length;
    
        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }

    backwards(bits) {
        var output = '';
        if (bits) {
            for (var i = 0; i < bits.length; i++) {
                var tempBit = bits[i];
                var reversedBit = this.reverseString(tempBit);
                output += reversedBit;
            }
        }
        return output;
    }

    mixed(bits) {
        var output = '';
        if (bits) {
            for (var i = 0; i < bits.length; i++) {
                var tempBit = bits[i];
                var mixedBit = this.shuffle(tempBit);
                output += mixedBit;
            }
        }
        return output;
    }

    jsUcfirst(string) {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        return string;
    }
    
    pickNumberOfNamesToPick() {
        let size = this.numberOfNamesToPick.length;
        let randomPick = rollDie(size);
        return this.numberOfNamesToPick[randomPick - 1];
    }

    pickBit() {
        let size = this.nameBits.length;
        let randomName = rollDie(size);
        return this.nameBits[randomName - 1];
    }

    pickMethod() {
        let size = this.transformations.length;
        let randomTransformation = rollDie(size);
        return this.transformations[randomTransformation - 1];
    }

    pickName() {
        let size = this.pickNumberOfNamesToPick();
        let bits = [];
        for (var i = 0; i < size; i++) {
            var bit = this.pickBit();
            bits.push(bit);
        }
        let method = this.pickMethod();
        let output = 'To Be Named Later';
        if (method === 'sequential') {
            output = this.sequential(bits);
        }
        if (method === 'reverse') {
            output = this.reverse(bits);
        }
        if (method === 'backwards') {
            output = this.backwards(bits);
        }
        if (method === 'shuffle') {
            output = this.mixed(bits);
        }
        output = this.jsUcfirst(output);
        return output;
    }
}

module.exports = Names;