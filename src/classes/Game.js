import Platform from "./Platform";
import Building from "./Building";
import sequences from "../util/platformSequences";
import Player from "./Player";
import Background from "./Background";

class Game{
    constructor(contexts, dimensions){ // base width and height = 800 x 450
        this.gameContext = contexts.game;
        this.bgContext = contexts.background;
        this.dimensions = dimensions;
        this.scale = dimensions[0]/800;
        this.logo = new Image();
        this.logo.src = "./logo.png";
        this.started = false;
        this.gameOver = false;
        this.spawnerId;
        this.score = 0;
        this.objects = new Set();
        this.platforms = new Set();
        this.last_y = this.dimensions[1]*0.75;
        this.lastTime = 0;
        this.animate = this.animate.bind(this);
        this.buildingSpawn = this.buildingSpawn.bind(this);
        this.platformSpawn = this.platformSpawn.bind(this);
        this.background = new Background(contexts.background, this);
        this.addListeners();
    }

    addListeners(){
        document.getElementById("game").addEventListener('click', e => {
            if(!this.started){
                this.start();
            }
        });
    }

    resize(dimensions){
        this.dimensions = dimensions;
        this.scale = dimensions[0]/800;
    }


    move(delta){
        this.objects.forEach(object => object.move(delta*1.1));
        this.platforms.forEach(platform => platform.move(delta*1.1));
        this.background.move(delta*1.1);
    }

    draw(){
        this.background.draw();
        this.gameContext.clearRect(0, 0, ...this.dimensions);
        this.objects.forEach(object => object.draw());
        this.platforms.forEach(object => object.draw());
        if(!this.started){
            this.gameContext.drawImage(this.logo, this.dimensions[0]*0.2, 0, this.dimensions[0]*0.6, this.dimensions[1]*0.6);
            this.gameContext.fillStyle = ["#ffffff", "#e3e3ee", "#e3e3eff", "#f3f3ff", "#ddddee"][Math.floor(Math.random()*5)];
            this.gameContext.font = "28px serif";
            this.gameContext.fillText("Click to Begin", this.dimensions[0]*0.4, this.dimensions[1]*0.7, this.dimensions[0]*0.8);
        } else {
            this.gameContext.fillStyle = "#ffffff";
            this.gameContext.font = "24px serif";
            this.gameContext.fillText(`Score: ${this.score}`, 28, 28, this.dimensions[0]);
        }
    }

    animate(time){
        if(this.gameOver && this.started){
            this.gameOver = false;
            this.started = false;
            this.objects = new Set();
            this.platforms = new Set();
            return this.run();
        }
        const delta = time - this.lastTime;
        this.lastTime = time;
        this.move(delta/60);
        this.draw();
        requestAnimationFrame(this.animate);
    }

    async platformSequence(sequenceObj){
        const sequence = sequenceObj.sequence
        
        for(let i = 0; i < sequence.length; i++){
            if(!this.started){
                break;
            }
            const platform = sequence[i];
            const {y, width, timing, velocity} = platform;
            this.buildingSpawn([800, y+this.last_y], width, velocity);
            await sleep(timing);
            if(i === sequence.length-1 && this.started){
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
        this.spawnerId = setInterval(() => {
            this.buildingSpawn([800, this.dimensions[1]*(0.5+Math.random()*0.4)], 300)
        }, 4000);
        requestAnimationFrame(this.animate)
    }

    start(){
        this.gameOver = false;
        this.score = 0;
        this.objects = new Set();
        this.platforms = new Set();
        this.last_y = this.dimensions[1]*0.75;
        this.started = true;
        clearInterval(this.spawnerId);
        this.spawnerId = undefined;
        this.buildingSpawn([100, this.last_y], 800, [-10, 0]);
        this.player = new Player(this.gameContext, this);
        this.objects.add(this.player);
        setTimeout(this.platformSequence.bind(this, (sequences.easy[1])), 1000);
    }


}

function randomEl(array){
    const index = Math.floor(Math.random()*array.length);
    return array[index];
}

async function sleep(millis) {
    return new Promise((res) => setTimeout(res, millis)) 
}

export default Game;