import Platform from "./Platform";
import Building from "./Building";
import sequences from "../util/platformSequences";
import Player from "./Player";

class Game{
    constructor(contexts, dimensions){ // base width and height = 800 x 450
        this.gameContext = contexts.game;
        this.bgContext = contexts.background;
        this.dimensions = dimensions;
        this.scale = dimensions[0]/800;
        this.playing = false;
        this.gameOver = false;
        this.score = 0;
        this.spawnIntervalId;
        this.objects = new Set();
        this.platforms = new Set();
        this.last_y = this.dimensions[1]*0.75;
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
        this.gameContext.clearRect(0, 0, ...this.dimensions);
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

    async platformSequence(sequenceObj){
        console.log(sequenceObj.title)
        const sequence = sequenceObj.sequence


        
        for(let i = 0; i < sequence.length; i++){
            const platform = sequence[i];
            const {y, width, timing, velocity} = platform;
            this.buildingSpawn([this.dimensions[0], y+this.last_y], width, velocity);
            console.log(`Spawned Platform now waiting ${timing}ms`)
            await sleep(timing);
            if(i === sequence.length-1){
                const nextSequenceObj = randomEl(sequences.easy);
                this.platformSequence(nextSequenceObj);
            }
        }

    }

    platformSpawn(position, width, velocity=[-8, 0]){
        this.platforms.add(new Platform(this.gameContext, this, [...position], width, [...velocity]));
    }
    buildingSpawn(position, width, velocity=[-8, 0]){
        this.platforms.add(new Building(this.gameContext, this, [...position], width, [...velocity]));
    }
    
    run(){
        this.bgContext.fillStyle = "#333333";
        this.bgContext.fillRect(0, 0, ...this.dimensions);
        this.buildingSpawn([100, this.last_y], 800, [-10, 0]);
        this.player = new Player(this.gameContext, this);
        window.player = this.player;
        this.objects.add(this.player);

        setTimeout(this.platformSequence.bind(this, (sequences.easy[1])), 1000)
        requestAnimationFrame(this.animate)
    }


}

function randomEl(array){
    const index = Math.floor(Math.random()*array.length);
    return array[index];
}

async function sleep(millis) {
    return new Promise((res, rej) => setTimeout(res, millis)) 
}

export default Game;