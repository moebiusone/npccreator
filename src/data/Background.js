class Background {
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

module.exports = Background;