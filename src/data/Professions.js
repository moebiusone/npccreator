import { rollDie } from '../utils/Dice';
import { Traits } from './Traits';

export class Professions {

    constructor() {
        this.professions = [];
        this.professions.push(this.createProfession("Commander", "Presence", ["Administration","Guns","Leadership","Psychology","Spotter","Tactics"]));
        this.professions.push(this.createProfession("Medic", "Education", ["Bandages", "Counseling", "Diagnostics", "Biology", "Psychology"]));
        this.professions.push(this.createProfession("Scientist", "Education", ["Behavior Prediction","Biology", "Chemistry", "Geology", "Observant"]));
        this.professions.push(this.createProfession("Space Marine", "Toughness", ["Armor", "Explosives", "Grenades", "Guns", "Hand-to-Hand", "Heavy Weapons"]));
        this.professions.push(this.createProfession("Technician", "Accuracy", ["Bits & Bytes", "Diagnostics", "Gears", "Locks"]));

        this.traitsCache = new Traits();
    }

    createProfession(name, attribute, prerequisites) {
        let newProfession = {
            "name" : name,
            "prime" : attribute,
            "traits" : prerequisites
        };
        return newProfession;
    }

    findElement(propValue) {
        for (var i=0; i < this.professions.length; i++) {
            var jObj = this.professions[i];
            var lcName = jObj.name;
            if (typeof lcName === 'string') {
                lcName = lcName.toLowerCase();
            }
            if (lcName === propValue.toLowerCase()) {
                return jObj;
            }
        }
      }

    getProfession(name) {
        let profession = this.findElement(name);
        if (profession) {
            return profession;
        } else {
            return {};
        }
    }

    pickProfession() {
        let size = this.professions.length;
        let randomProfession = rollDie(size);
        return this.professions[randomProfession - 1];
    }    

    pickTraits(profession, existingTraits) {
        let tempTraits = profession.traits;
        let size = tempTraits.length;
        let selectedTraits = [];
        let randomTrait = rollDie(size);
        let trait = tempTraits[randomTrait - 1];
        if (!selectedTraits.includes(trait)) {
            if (existingTraits && !existingTraits.includes(trait)) {
                this.testTrait(trait);
                selectedTraits.push(trait);
            }
        }
        return selectedTraits;
    }    

    testTrait(trait) {
        let traitRaw = this.traitsCache.getTrait(trait);
        console.log(JSON.stringify(traitRaw));
    }    
}

export default Professions;