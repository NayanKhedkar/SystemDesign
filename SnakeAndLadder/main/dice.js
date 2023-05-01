export default class Dice {

    constructor(numberOfDice = 1) {
        this.numberOfDice = numberOfDice
    }

    roll() {
        const lowerBound = 1 * this.numberOfDice
        const higherBound = 6 * this.numberOfDice
        return Math.floor((Math.random() * (higherBound - lowerBound)) + 1)
    }
}