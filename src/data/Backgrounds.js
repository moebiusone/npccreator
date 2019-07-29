const rollDie = require('../utils/Dice').rollDie;
const Traits = require('./Traits');
var Background = require ('./Background');

class Backgrounds {

    constructor() {
        this.backgrounds = [];
        this.backgrounds.push(new Background('Affluent Family', ['Rich'], 1, ''));
        this.backgrounds.push(new Background('Biohacker', ['Biology', 'Chemistry'], 1, ''));
        this.backgrounds.push(new Background('Criminal', ['Bits & Bytes', 'Disguise', 'Gambler', 'Locks'], 1, ''));
        this.backgrounds.push(new Background('Dominion Citizen', ['Acting', 'Astronomy', 'Atmospherics', 'Biology', 
            'Bits & Bytes', 'Chemistry', 'Climbing', 'Cybernetic Enhancement', 'Disguise', 'Gears', 'Geology', 'Guns', 
            'Hand-to-Hand', 'Languages', 'Leadership', 'Locks', 'Meditation', 'Melee', 'Observant', 'Religion', 'Sleuth', 
            'Sprinter', 'Stealth.'], 1, ''));
        this.backgrounds.push(new Background('Ex-Excursori', ['Bits & Bytes', 'Locks', 'Observant', 'Stealth'], 1, ''));
        this.backgrounds.push(new Background('Gearhead', ['Diagnostics', 'Gears'], 1, ''));
        this.backgrounds.push(new Background('Hacker', ['Bits & Bytes', 'Diagnostics', 'Gears'], 1, ''));
        this.backgrounds.push(new Background('Miner', ['Climbing', 'Explosives', 'Geology', 'Observant'], 1, ''));
        this.backgrounds.push(new Background('Retiree', ['Diagnostics', 'Leadership', 'Observant', 'Sleuth'], 2, 'toughness'));
        this.backgrounds.push(new Background('Settler', ['Diagnostics', 'Leadership', 'Psychology'], 1, ''));
        this.backgrounds.push(new Background('Star Athlete', ['Hand-to-Hand', 'Climbing', 'Guns', 'Melee', 'Sprinter'], 1, ''));
        this.backgrounds.push(new Background('True Believer', ['Meditation', 'Religion'], 1, ''));

        this.traitsCache = new Traits();
    }

    pickBackground() {
        let size = this.backgrounds.length;
        let randomBackground = rollDie(size);
        return this.backgrounds[randomBackground - 1];
    }

    pickTraits(background) {
        let tempTraits = Background.prototype.getTraits.call(background);
        let numToChoose = Background.prototype.getNumberToChoose.call(background);
        let size = tempTraits.length;
        var count = 0;
        let selectedTraits = [];
        while (count < numToChoose) {
            let randomTrait = rollDie(size);
            let trait = tempTraits[randomTrait - 1];
            if (!selectedTraits.includes(trait)) {
                this.testTrait(trait);
                selectedTraits.push(trait);
                count++;
            }
        }
        return selectedTraits;
    }

    testTrait(trait) {
        let traitRaw = this.traitsCache.getTrait(trait);
        console.log(JSON.stringify(traitRaw));
    }
}

module.exports = Backgrounds;
