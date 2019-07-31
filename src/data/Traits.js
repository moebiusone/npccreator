const rollDie = require('../utils/Dice').rollDie;

class Traits {

    constructor() {
        this.traits = [];
        this.traits.push(this.createTrait('Acting', 'Presence'));
        this.traits.push(this.createTrait('Administration', 'Education'));
        this.traits.push(this.createTrait('Armor', 'Athletics'));
        this.traits.push(this.createTrait('Armorer', 'Education', ['Armor']));
        this.traits.push(this.createTrait('Armorer: Specialization', 'Education', ['Armorer']));
        this.traits.push(this.createTrait('Astronomy', 'Education'));
        this.traits.push(this.createTrait('Astrophysics', 'Education', ['Astronomy']));
        this.traits.push(this.createTrait('Atmospherics', 'Education'));
        this.traits.push(this.createTrait('Back to School', 'Special', [], ['Education']));
        this.traits.push(this.createTrait('Bandages', 'Accuracy'));
        this.traits.push(this.createTrait('Behavior Prediction', 'Education'));
        this.traits.push(this.createTrait('Biology', 'Education'));
        this.traits.push(this.createTrait('Bits & Bytes', 'Accuracy'));
        this.traits.push(this.createTrait('Chemistry', 'Education'));
        this.traits.push(this.createTrait('Climbing', 'Athletics'));
        this.traits.push(this.createTrait('Combat Healing', 'Accuracy', ['Bandages']));
        this.traits.push(this.createTrait('Counseling', 'Education'));
        this.traits.push(this.createTrait('Cybernetics', 'Education', ['Bits & Bytes']));
        this.traits.push(this.createTrait('Cybernetic Enhancement', 'Special', [], ['Accuracy', 'Athletics', 'Awareness', 'Education', 'Presence', 'Toughness']));
        this.traits.push(this.createTrait('Deadeye', 'Accuracy', ['Sniper']));
        this.traits.push(this.createTrait('Diagnostics', 'Education'));
        this.traits.push(this.createTrait('Disguise', 'Accuracy'));
        this.traits.push(this.createTrait('Exoskeleton', 'Special'));
        this.traits.push(this.createTrait('Explosives', 'Accuracy'));
        this.traits.push(this.createTrait('Gambler', 'Special'));
        this.traits.push(this.createTrait('Gears', 'Accuracy'));
        this.traits.push(this.createTrait('Genetic Enhancement', 'Special', [], ['Accuracy', 'Athletics', 'Awareness', 'Education', 'Presence', 'Toughness']));
        this.traits.push(this.createTrait('Geology', 'Education'));
        this.traits.push(this.createTrait('Grenades', 'Athletics'));
        this.traits.push(this.createTrait('Guns', 'Accuracy'));
        this.traits.push(this.createTrait('Guns: Specialization', 'Accuracy', ['Guns']));
        this.traits.push(this.createTrait('Gunsmith', 'Accuracy', ['Guns']));
        this.traits.push(this.createTrait('Gunsmith: Specialization', 'Accuracy', ['Gunsmith']));
        this.traits.push(this.createTrait('Hand-to-Hand', 'Athletics'));
        this.traits.push(this.createTrait('Hand-to-Hand: Specialization', 'Athletics', ['Hand-to-Hand']));
        this.traits.push(this.createTrait('Heavy Weapons', 'Accuracy'));
        this.traits.push(this.createTrait('Heavy Weapons: Specialization', 'Accuracy', ['Heavy Weapons']));
        this.traits.push(this.createTrait('Hitting the Gym', 'Special', [], ['Toughness']));
        this.traits.push(this.createTrait('Languages', 'Education'));
        this.traits.push(this.createTrait('Leadership', 'Presence'));
        this.traits.push(this.createTrait('Locks', 'Accuracy'));
        this.traits.push(this.createTrait('Mechanized Armor', 'Special', ['Armor','Exoskeleton']));
        this.traits.push(this.createTrait('Medicine', 'Education', ['Biology']));
        this.traits.push(this.createTrait('Meditation', 'Special'));
        this.traits.push(this.createTrait('Melee', 'Athletics'));
        this.traits.push(this.createTrait('Melee: Specialization', 'Athletics', ['Melee']));
        this.traits.push(this.createTrait('Nanobots', 'Accuracy', ['Robotic Savant']));
        this.traits.push(this.createTrait('Necropsy', 'Education', ['Biology']));
        this.traits.push(this.createTrait('Observant', 'Awareness'));
        this.traits.push(this.createTrait('Psychology', 'Presence'));
        this.traits.push(this.createTrait('Religion', 'Education'));
        this.traits.push(this.createTrait('Rich', 'Special'));
        this.traits.push(this.createTrait('Robotics', 'Accuracy', ['Bits & Bytes', 'Gears'], [], false));
        this.traits.push(this.createTrait('Robotics Savant', 'Accuracy', ['Robotics']));
        this.traits.push(this.createTrait('Security', 'Accuracy', ['Bits & Bytes']));
        this.traits.push(this.createTrait('Shields', 'Toughness'));
        this.traits.push(this.createTrait('Sleuth', 'Awareness'));
        this.traits.push(this.createTrait('Sniper', 'Accuracy', ['Guns: Specialization']));
        this.traits.push(this.createTrait('Spotter', 'Presence'));
        this.traits.push(this.createTrait('Sprinter', 'Special'));
        this.traits.push(this.createTrait('Stealth', 'Athletics'));
        this.traits.push(this.createTrait('Surgery', 'Accuracy', ['Bandages', 'Medicine']));
        this.traits.push(this.createTrait('Tactics', 'Education'));
        this.traits.push(this.createTrait('Xenobiology', 'Education', ['Biology']));

        this.special = [];
        this.special.push('Rich');

        this.canRepeatTraits = [];
        this.canRepeatTraits.push("Armorer: Specialization");
        this.canRepeatTraits.push("Cybernetic Enhancement");
        this.canRepeatTraits.push("Genetic Enhancement");
        this.canRepeatTraits.push("Guns: Specialization");
        this.canRepeatTraits.push("Melee: Specialization");

    }

    createTrait(name, attribute, prerequisites = [], attributesToMod = [], allPrereqs = true ) {
        let newTrait = {
            "name" : name,
            "attribute" : attribute,
            "prerequisites" : prerequisites,
            "attributesToMod" : attributesToMod,
            "allPrerequisites" : allPrereqs
        };
        return newTrait;
    }

    findElement(propValue) {
        for (var i=0; i < this.traits.length; i++) {
            var jObj = this.traits[i];
            var lcName = jObj.name;
            if (typeof lcName === 'string') {
                lcName = lcName.toLowerCase();
            }
            if (lcName === propValue.toLowerCase()) {
                return jObj;
            }
        }
      }

    getTrait(name) {
        let trait = this.findElement(name);
        if (trait) {
            return trait;
        } else {
            return {};
        }
    }

    async hasPrerequisites(trait, currentList) {
        if (trait) {
            var prereqs = trait.prerequisites;
            // if the trait has no prereqs, we're golden
            if (prereqs === undefined || prereqs.length === 0) {
                return true;
            }
            // if the trait has prereqs, but the character doesn't have any traits, we can't proceed
            if (currentList === undefined || currentList.length === 0) {
                return false;
            }
            // if the character already has the trait, we can't proceed
            if (currentList.includes(trait.name)) {
                return false;
            }
            var allPrereqFlag = trait.allPrerequisites;
            var foundPrereqs = [];
            for (var i = 0; i < prereqs.length; i++) {
                var prereq = prereqs[i];
                if (currentList.includes(prereq)) {
                    foundPrereqs.push(prereq);
                }
            }
            console.log(`--Trait ${trait.name} has prereqs ${prereqs}`);
            if (foundPrereqs.length === 1 && !allPrereqFlag) {
                console.log(`--Trait needs one prereq from ${prereqs} and has ${foundPrereqs}`);
                return true;
            }
            if (foundPrereqs.length === prereqs.length) {
                console.log(`--Trait needs all prereqs from ${prereqs} and has ${foundPrereqs}`);
                return true;
            }
        }
        console.log(`--Trait ${trait.name} does not have necessary prereqs ${prereqs} in trait list ${currentList}`);
        return false;
    }

    pickTrait() {
        let size = this.traits.length;
        let randomTrait = rollDie(size);
        while (this.special.includes(this.traits[randomTrait-1].name)) {
            randomTrait = rollDie(size);
        }
        return this.traits[randomTrait - 1];
    }

}

module.exports = Traits