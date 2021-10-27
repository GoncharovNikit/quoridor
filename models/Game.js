import Player1 from "../models/Player1.js";
import Player2 from "../models/Player2.js";


const Game = {
    size: 9,
    current_pl: '1',
    game_type: null,
    is_going: false,
    setGameType(type) {
        this.game_type = type;
    },
    startGame() {
        this.is_going = true;
    },
    endGame() {
        this.is_going = false;
    },
    current() {
        return this.current_pl == '1' ? Player1 : Player2;
    },
    next_step() {
        this.current_pl = this.current_pl == '1' ? '2' : '1';
    },
}
window.Game = Game;
export default Game;