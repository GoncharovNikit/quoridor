import Game from "./models/Game.js";
import Init from "./models/Init.js";
import { InitialFieldView, FieldView } from "./views/FieldView.js";
import { InitBorderEvents } from "./controllers/FieldController.js";

InitialFieldView();

document.querySelector("#game_pl_comp").addEventListener("click", (e) => {
    Game.setGameType(Init.PLAYER_COMPUTER);
    init_game();

    game_loop();
});

document.querySelector("#game_pl_pl").addEventListener("click", (e) => {
    Game.setGameType(Init.PLAYER_PLAYER);
    init_game();

    game_loop();
});

const init_game = () => {
    FieldView();
    InitBorderEvents();
};

const game_loop = () => {};
