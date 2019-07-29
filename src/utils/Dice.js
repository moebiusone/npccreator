function rollDie(dieSize) {
	let random = Math.floor(Math.random() * dieSize) + 1;
	return random;
}

function rollD3() {
	return rollDie(3);
}

function rollD6() {
	return rollDie(6);
}

function rollD20() {
	return rollDie(20);
}

function rollD100() {
	return rollDie(100);
}

function roll6Plus2d6() {
	return 6 + rollD6() + rollD6();
}

function roll8Plus2d3() {
	return 8 + rollD3() + rollD3();
}

module.exports.roll6Plus2d6 = roll6Plus2d6;
module.exports.roll8Plus2d3 = roll8Plus2d3;
module.exports.rollD100 = rollD100;
module.exports.rollD20 = rollD20;
module.exports.rollD3 = rollD3;
module.exports.rollDie = rollDie;
module.exports.rollD6 = rollD6;