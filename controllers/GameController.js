import Player1 from "../models/Player1.js";
import Player2 from "../models/Player2.js";
import Victory from "../views/VictoryView.js";
import Field from "../models/Field.js";

export const checkVictory = () => {
    if (Player1.x == 0) {
        Victory("Player 1");
    } else if (Player2.x == Field.size - 1) {
        Victory("Player 2");
    }
};

