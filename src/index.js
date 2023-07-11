import Game from "./classes/Game.js";
import "./index.scss";

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const game = document.getElementById("game");
    const background = document.getElementById("background");
    const canvasContainer = document.getElementById("canvas-container");
    const contexts = {
        background: background.getContext("2d"),
        game: game.getContext("2d")
    }

    const viewPortWidth = window.innerWidth;    
    game.width = Math.min(viewPortWidth * 0.7, 800);
    game.height = game.width * (8/16);
    background.width = Math.min(viewPortWidth * 0.7, 800);
    background.height = game.width * (8/16);
    canvasContainer.style.width = game.width+2;
    canvasContainer.style.height = game.height+2;
    
    
    const _ = new Game(contexts, [game.width, game.height]);
    _.run();
})

