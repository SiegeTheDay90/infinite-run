import Platform from "./Platform";
import sequences from "../util/platformSequences";
import Player from "./Player";

class Game{
    constructor(context, dimensions){ // base width and height = 800 x 450
        this.context = context;
        this.dimensions = dimensions;
        this.scale = dimensions[0]/800;
        this.playing = false;
        this.gameOver = false;
        this.score = 0;
        this.spawnIntervalId;
        this.objects = new Set();
        this.platforms = new Set();
        this.last_y = this.dimensions[1]/1.75;
        this.lastTime = 0;
        this.animate = this.animate.bind(this);
    }

    resize(dimensions){
        this.dimensions = dimensions;
        this.scale = dimensions[0]/800;
    }


    move(delta){
        this.objects.forEach(object => object.move(delta));
        this.platforms.forEach(object => object.move(delta));
    }

    draw(){
        this.context.fillStyle = "#CCEEFF";
        this.context.fillRect(0, 0, ...this.dimensions);
        this.objects.forEach(object => object.draw());
        this.platforms.forEach(object => object.draw());
    }

    animate(time){
        const delta = time - this.lastTime;
        this.lastTime = time;
        this.move(delta/60);
        this.draw();
        requestAnimationFrame(this.animate);
    }

    platformSequence(sequenceObj, start = this.dimensions[1]*0.8){

        console.log(sequenceObj.title)
        const sequence = sequenceObj.sequence
        
        for(let i = 0; i < sequence.length; i++){
            const platform = sequence[i];
            const {y, width, timing, velocity} = platform;
            setTimeout(this.platformSpawn.bind(this, [this.dimensions[0], this.last_y = y+this.last_y], width, velocity), timing*this.scale)
            if(i === sequence.length-1){
                const nextSeq = randomEl(sequences.easy);
                setTimeout(this.platformSequence.bind(this, (nextSeq)), sequence[sequence.length-1].timing)
            }
        }
        this.last_y = start;
    }

    platformSpawn([x, y], width=2, velocity=[0, 0]){
        y = y ?? Math.floor(
                this.last_y+
                (Math.random()-0.5)*
                this.dimensions[1]*0.25
            )+this.dimensions[1]*0.2;

        this.platforms.add(new Platform(this.context, this, [x, y], width*this.scale, [velocity[0], velocity[1]]));
    }
    
    run(){
        this.platformSpawn([0, this.dimensions[1]*0.5], 800, [-3, 0]);
        this.player = new Player(this.context, this);
        window.player = this.player;
        this.objects.add(this.player);

        setTimeout(this.platformSequence.bind(this, (sequences.easy[1])),0);
        requestAnimationFrame(this.animate)
    }


}

function randomEl(array){
    const index = Math.floor(Math.random()*array.length);
    return array[index];
}

export default Game;