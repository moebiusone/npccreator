
export function rollDie(dieSize) {
	let random = Math.floor(Math.random() * dieSize) + 1;
	return random;
}

export function rollD3() {
	return rollDie(3);
}

export function rollD6() {
	return rollDie(6);
}

export function rollD20() {
	return rollDie(20);
}

export function rollD100() {
	return rollDie(100);
}

export function roll6Plus2d6() {
	return 6 + rollD6() + rollD6();
}

export function roll8Plus2d3() {
	return 8 + rollD3() + rollD3();
}
