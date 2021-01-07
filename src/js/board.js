import * as CONST from './constants.js'

export default class Board {

    // Reset the board when we start a new game.
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // Get matrix filled with zeros.
    getEmptyBoard() {
        return Array.from(
            {length: CONST.ROWS}, () => Array(CONST.COLS).fill(0)
        );
    }
}