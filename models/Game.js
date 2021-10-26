import Player1 from "../models/Player1.js";
import Player2 from "../models/Player2.js";


const Game = {
    size: 9,
    current: Player1,
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
    next_step() {
        current = current === Player1 ? Player2 : Player1;
    },
}

export default Game;