import Game from "./classes/Game.js";
import "./index.scss";

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d")
    const viewPortHeight = window.innerHeight;
    const viewPortWidth = window.innerWidth;
    
    // canvas.height = viewPortHeight*0.8;
    // canvas.width = canvas.height*(9/16);
    canvas.width = Math.min(viewPortWidth * 0.7, 800);
    canvas.height = canvas.width * (8/16);
    
    
    const game = new Game(context, [canvas.width, canvas.height]);
    game.run();
})

