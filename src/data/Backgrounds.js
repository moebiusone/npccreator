import { rollDie } from '../utils/Dice';

export class Background {
    constructor(name, values, toChoose, attribute) {
        this.backgroundName = name;
        this.traits = [];
        this.addTraits(values);
        this.numberToChoose = toChoose;
        this.attribute = attribute;
    }

    addTraits(values) {
        this.traits = values;
    }

    getBackgroundName() {
        return this.backgroundName;
    }

    getTraits() {
        return this.traits;
    }

    getNumberToChoose() {
        return this.numberToChoose;
    }

    getAttributeToKnock() {
        return this.attribute;
    }
}

export class Backgrounds {

    constructor() {
        this.backgrounds = [];
        this.backgrounds.push(new Background('Affluent Family', ['Rich'], 1, ''));
        this.backgrounds.push(new Background('Biohacker', ['Biology', 'Chemistry', 'Medicine'], 1, ''));
        this.backgrounds.push(new Background('Criminal', ['Disguise', 'Gambler', 'Locks', 'Security'], 1, ''));
        this.backgrounds.push(new Background('Dominion Citizen', ['Acting', 'Astronomy', 'Atmospherics', 'Biology', 
            'Bits & Bytes', 'Chemistry', 'Climbing', 'Cybernetic Enhancement', 'Disguise', 'Gears', 'Geology', 'Guns', 
            'Hand-to-Hand', 'Languages', 'Leadership', 'Locks', 'Meditation', 'Melee', 'Observant', 'Religion', 'Sleuth', 
            'Sprinter', 'Stealth.'], 1, ''));
        this.backgrounds.push(new Background('Ex-Excursori', ['Bits & Bytes', 'Locks', 'Observant', 'Security', 'Stealth'], 1, ''));
        this.backgrounds.push(new Background('Gearhead', ['Diagnostics', 'Gears'], 1, ''));
        this.backgrounds.push(new Background('Hacker', ['Bits & Bytes', 'Security'], 1, ''));
        this.backgrounds.push(new Background('Miner', ['Climbing', 'Explosives', 'Geology', 'Observant'], 1, ''));
        this.backgrounds.push(new Background('Retiree', ['Diagnostics', 'Leadership', 'Observant', 'Sleuth'], 2, 'toughness'));
        this.backgrounds.push(new Background('Settler', ['Diagnostics', 'Leadership', 'Psychology'], 1, ''));
        this.backgrounds.push(new Background('Star Athlete', ['Hand-to-Hand', 'Climbing', 'Guns', 'Melee', 'Sprinter'], 1, ''));
        this.backgrounds.push(new Background('True Believer', ['Meditation', 'Religion'], 1, ''));
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
                selectedTraits.push(trait);
                count++;
            }
        }
        return selectedTraits;

    }
}
