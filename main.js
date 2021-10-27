import Game from "./models/Game.js";
import Init from "./models/Init.js";
import {
    InitBorderEvents,
    InitField,
    RenderField,
} from "./controllers/FieldController.js";
import { RenderPlayers } from "./views/RenderPlayersView.js"

InitField();

document.querySelector("#game_pl_comp").addEventListener("click", (e) => {
    init_game(Init.PLAYER_COMPUTER);
});

document.querySelector("#game_pl_pl").addEventListener("click", (e) => {
    init_game(Init.PLAYER_PLAYER);
});

const init_game = (game_type) => {
    Game.setGameType(game_type);
    RenderField();
    RenderPlayers();
    InitBorderEvents();
};
