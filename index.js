import * as CONST from './src/js/constants.js';
import Board from './src/js/board.js'

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canva from constants
ctx.canvas.width = CONST.COLS * CONST.BLOCK_SIZE;
ctx.canvas.height = CONST.ROWS * CONST.BLOCK_SIZE;

// Scale blocks
ctx.scale(CONST.BLOCK_SIZE, CONST.BLOCK_SIZE);

let board = new Board();

function play() {
    board.reset();

    console.table(board.grid);
}