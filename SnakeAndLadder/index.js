import Dice from "./main/dice.js"
import GameBoard from "./main/game-board.js"
import Player from "./main/player.js"
import Move from "./main/move.js"

const dice = new Dice(1)

const p1 = new Player("player 1", 1)
const p2 = new Player("player 2", 2)

const allPlayer = new Array(p1, p2)

const snake1 = new Move(39, 3)
const snake2 = new Move(47, 32)
const snake3 = new Move(59, 37)
const snake4 = new Move(89, 51)
const snake5 = new Move(95, 55)
const snake6 = new Move(99, 4)

const snakes = new Array()
snakes.push(snake1, snake2, snake3, snake4, snake5, snake6)

const ladder1 = new Move(8, 30)
const ladder2 = new Move(17, 46)
const ladder3 = new Move(31, 67)
const ladder4 = new Move(42, 80)
const ladder5 = new Move(57, 85)
const ladder6 = new Move(68, 93)

const ladders = new Array()
ladders.push(ladder1, ladder2, ladder3, ladder4, ladder5, ladder6)

const playersCurrentPosition = new Map()
playersCurrentPosition.set("player 1", 0)
playersCurrentPosition.set("player 2", 0)

const gameBoard = new GameBoard(dice, allPlayer, snakes, ladders, playersCurrentPosition, 100)

gameBoard.startGame()
