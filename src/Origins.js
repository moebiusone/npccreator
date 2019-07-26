import { rollDie } from './Dice';

export class Origins {

    constructor() {
        this.origins = [];
        this.origins.push(this.createOrigin('Earth', 'morale'));
        this.origins.push(this.createOrigin('Luna', 'accuracy'));
        this.origins.push(this.createOrigin('Mars', 'education'));
        this.origins.push(this.createOrigin('The Field', 'toughness'));
        this.origins.push(this.createOrigin('The Field', 'awareness'));
        this.origins.push(this.createOrigin('Gliese 832', 'presence'));
        this.origins.push(this.createOrigin('HD 85512', 'presence'));
        this.origins.push(this.createOrigin('Trappist-1', 'presence'));
        this.origins.push(this.createOrigin('The Space Between', 'athletics'));
        this.origins.push(this.createOrigin('The Space Between', 'awareness'));
    }

    createOrigin(world, attribute) {
        let newOrigin = [];
        newOrigin.push(world);
        newOrigin.push(attribute);
        return newOrigin;
    }

    pickOrigin() {
        let size = this.origins.length;
        let randomOrigin = rollDie(size);
        return this.origins[randomOrigin - 1];
    }
}
