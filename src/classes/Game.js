import Platform from "./Platform";
import sequences from "../util/platformSequences";
import Player from "./Player";

class Game{
    constructor(context, dimensions){
        this.context = context;
        this.dimensions = dimensions;
        this.playing = false;
        this.gameOver = false;
        this.score = 0;
        this.spawnIntervalId;
        this.objects = new Set();
        this.platforms = new Set();
        this.last_y = this.dimensions[1]/2;
    }


    move(){
        this.objects.forEach(object => object.move());
        this.platforms.forEach(object => object.move());
        // this.player.move();
    }

    draw(){
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, ...this.dimensions);
        this.objects.forEach(object => object.draw());
        this.platforms.forEach(object => object.draw());
    }

    animate(){
        this.move();
        this.draw();
        requestAnimationFrame(this.animate.bind(this));
    }

    platformSequence(sequence, start = this.dimensions[1]*0.8){
        sequence.forEach(platform => {
            const {y, width, timing, velocity} = platform;
            setTimeout(this.platformSpawn.bind(this, [this.dimensions[0], this.last_y = y+this.last_y], width, velocity), timing);
        })
        this.last_y = start;
    }

    platformSpawn([x, y], width=2, velocity=[0, 0]){
        y = y ?? Math.floor(
                this.last_y+
                (Math.random()-0.5)*
                this.dimensions[1]*0.25
            )+this.dimensions[1]*0.2;

        this.platforms.add(new Platform(this.context, this, [x, y], width, velocity));
    }
    
    run(){
        //settings?
        this.platformSpawn([0, 100], 4, [-0.5, 0]);
        this.player = new Player(this.context, this);
        window.player = this.player;
        this.objects.add(this.player);


        this.platformSequence(sequences.easy[1]);
        setInterval(() => {this.platformSequence((randomEl(sequences.easy)))}, 4000);
        this.animate();
    }


}

function randomEl(array){
    const index = Math.floor(Math.random()*array.length);
    return array[index];
}

export default Game;