import Board from './board.js';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('board');
    const game = new Board(container);
    
class CheckersGame{
    constructor(container) {
        this.container = container;

        this.board = new Board();
        this.board.appendTo(this.container);
    }

    clear() {
        this.container.innerHTML = '';
    }
}

export default CheckersGame;
