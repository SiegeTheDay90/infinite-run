
import sequences from "../util/platformSequences";
import Player from "./entities/Player";
import Background from "./graphics_classes/Background";
import Speedometer from "./graphics_classes/Speedometer";
import PlatformController from "./platform_controller/platform_controller";
import Barrier from "./entities/Barrier";

class Game{
    constructor(contexts, dimensions){ // base width and height = 800 x 450
        this.gameContext = contexts.game;
        this.bgContext = contexts.background;
        this.dimensions = dimensions;
        this.platformController = new PlatformController(this);
        this.scale = dimensions[0]/800;
        this.logo = new Image();
        this.logo.src = "./logo.png";
        this.started = false;
        this.gameOver = false;
        this.spawnerId;
        this.score = 0;
        this.objects = new Set();
        this.platforms = new Set();
        this.staticObjects = new Set();
        this.last_y = this.dimensions[1]*0.75;
        this.lastTime = 0;
        this.animate = this.animate.bind(this);
        this.background = new Background(contexts.background, this);
        this.barrier;
        this.addListeners();
    }

    addListeners(){
        document.getElementById("game").addEventListener('click', e => {
            if(!this.started){
                this.start();
            }
        });

        document.addEventListener("keydown", e => {
            if( e.key == " " && !this.started){
                this.start();
            }
        })
    }

    resize(dimensions){
        this.dimensions = dimensions;
        this.scale = dimensions[0]/800;
    }


    update(delta){
        this.player?.move(delta*1.1);
        this.objects.forEach(object => object.move(delta*1.1));
        this.platforms.forEach(platform => platform.move(delta*1.1));
        this.background.move(delta*1.1);
        this.barrier?.move(delta*1.1);
    }

    draw(){
        this.background.draw();
        this.gameContext.clearRect(0, 0, ...this.dimensions);
        this.player?.draw();
        this.objects.forEach(object => object.draw());
        this.platforms.forEach(object => object.draw());
        this.barrier?.draw();
        this.staticObjects.forEach(object => object.draw());
        if(!this.started){
            this.gameContext.drawImage(this.logo, this.dimensions[0]*0.2, 0, this.dimensions[0]*0.6, this.dimensions[1]*0.6);
            this.gameContext.fillStyle = ["#ffffff", "#e3e3ee", "#e3e3eff", "#f3f3ff", "#ddddee"][Math.floor(Math.random()*5)];
            this.gameContext.font = "28px serif";
            this.gameContext.fillText("Click to Begin", this.dimensions[0]*0.4, this.dimensions[1]*0.7, this.dimensions[0]*0.8);
        } else {
            this.gameContext.fillStyle = "#ffffff";
            this.gameContext.font = "20px serif";
            this.gameContext.fillText(`Score: ${this.score}`, 600*this.scale, 28*this.scale, this.dimensions[0]);
        }
    }

    animate(time){
        if(this.player?.position[1] > this.dimensions[1] || this.player?.collides(this.barrier)){
            this.gameOver = true;
        }

        if(this.gameOver && this.started){
            this.gameOver = false;
            this.started = false;
            this.objects = new Set();
            this.platforms = new Set();
            this.player = null;
            this.barrier = null;
            clearInterval(this.scoreInterval);
            return this.run();
        }

        if(this.player?.distTraveled > 1800){
            this.player.distTraveled = 0;
            this.platformController.spawnNextSequence();
        }
        const delta = time - this.lastTime;
        this.lastTime = time;
        this.update(delta/60);
        this.draw();
        requestAnimationFrame(this.animate);
    }

    // Game#scrollX

    scrollX(dx){
        this.barrier.position[0] += dx;
        this.objects.forEach(object => object.position[0] += dx);
        this.platforms.forEach(object => object.position[0] += dx);
    }    
    



    run(){
        // this.spawnerId = setInterval(() => {
        //     this.buildingSpawn([800, this.dimensions[1]*(0.5+Math.random()*0.4)], 300)
        // }, 4000);
        requestAnimationFrame(this.animate)
    }

    start(){
        // Reset Values
        this.gameOver = false;
        this.score = 0;
        this.objects = new Set();
        this.platforms = new Set();
        this.last_y = this.dimensions[1]*0.75;
        this.started = true;
        clearInterval(this.spawnerId);
        this.spawnerId = undefined;

        // Spawn new player, (And speedometer?)
        this.player = new Player(this.gameContext, this);
        this.speedometer = new Speedometer(this.gameContext, this);
        this.barrier = new Barrier(this.gameContext, this);
        this.staticObjects.add(this.speedometer);
        // this.platforms.add(this.barrier);

        // Spawn sequence for platforms
        this.platformController.buildingSpawn([0, this.dimensions[1]*.5], 700, [0, 0]);
        this.platformController.spawnNextSequence();
        // this.platformController.endless();

        this.scoreInterval = setInterval(() => {
            if(this.player.standing){
                this.score += 10;
            }
        }, 500)
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