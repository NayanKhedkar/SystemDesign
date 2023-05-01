export default class GameBoard {

    constructor(dice, nextTurn, snakes, ladders, playersCurrentPosition, boardSize = 100) {
        this.dice = dice
        this.nextTurn = nextTurn
        this.snakes = snakes
        this.ladders = ladders
        this.playersCurrentPosition = playersCurrentPosition
        this.boardSize = boardSize
    }

    startGame() {
        while (this.nextTurn.length > 1) {
            const player = this.nextTurn.shift()
            const currentPosition = this.playersCurrentPosition.get(player.name)
            const diceValue = this.dice.roll()
            const nextCell = currentPosition + diceValue

            if (nextCell > this.boardSize) {
                this.nextTurn.push(player)
            }
            else if (nextCell == this.boardSize) {
                console.log(`${player.name}  won the game`)
            } else {
                const nextPosition = this.getNextPosition(nextCell)
                const isLadder = this.checkForLadder(nextCell)
                const isSnake = this.checkForSnake(nextCell)
                const isWinner = this.checkForWinner(nextPosition)

                if (isSnake) console.log(`${player.name} Bitten by Snake present at: ${nextCell}`)

                if (isLadder) console.log(`${player.name}  Got ladder present at: ${nextCell}`)

                if (isWinner) {
                    console.log(`${player.name}  won the game`)
                } else {
                    this.movePlayer(player, nextPosition)
                    this.skipPlayer(player)
                }
            }

        }
    }

    getNextPosition(cell) {
        let nextPosition = cell

        this.snakes.forEach(v => {
            if (v.startPoint == cell) {
                nextPosition = v.endPoint
            }
        })

        this.ladders.forEach(v => {
            if (v.startPoint == cell) {
                nextPosition = v.endPoint
            }
        })
        return nextPosition
    }

    checkForLadder(cell) {
        let isLadder = false
        this.ladders.forEach(ladder => {
            if (ladder.startPoint === cell) {
                isLadder = true
            }
        });
        return isLadder
    }

    checkForSnake(nextCell) {
        let isSnake = false;
        this.snakes.forEach(snake => {
            if (snake.startPoint === nextCell) {
                isSnake = true
            }
        });
        return isSnake
    }

    checkForWinner(position) {
        return position == this.boardSize
    }

    skipPlayer(player) {
        this.nextTurn.push(player)
    }

    movePlayer(player, position) {
        this.playersCurrentPosition.set(player.name, position)
        console.log(`${player.name} is at position ${position}`)
    }
}

