class GuessingGame {
	constructor() { }

	// accepts min and max value
	setRange(min, max) {
		this.max = max;
		this.min = min;
	}

	// returns solution candidate (used binary search)
	guess() {
		return this.min + Math.ceil((this.max - this.min) / 2);
	}

	lower() {
		this.max = this.guess();
	}

	greater() {
		this.min = this.guess();
	}
}

module.exports = GuessingGame;
