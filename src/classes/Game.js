
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
        this.levelLength;
        this.platformController = new PlatformController(this);
        this.scale = dimensions[0]/800;
        this.logo = new Image();
        this.scoring = false;
        this.logo.src = "./logo.png";
        this.controls = new Image();
        this.controls.src = "./controls.png";
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

    async checkHighScores(){
        let localhighscores = JSON.parse(window.localStorage['infinite-highscores']);
        let globalhighscores = (await this.getScores())
        .map(ele => ({score: ele.score, name: ele.name}))
        .sort((f, s) => s.score - f.score);
        let check = {
            local: ((localhighscores.slice(0,5).some((score) => this.score > score.score) 
            || localhighscores.length<5) 
            && this.score > 0),
            global: ((globalhighscores.slice(0,5).some((score) => this.score > score.score) 
            || globalhighscores.length<5) 
            && this.score > 0)
        }
        
        if (Object.values(check).some((value) => (value === true))){
            this.scoring = true;
            const highScoreDialog = document.getElementById('high-score-dialog');
            const nameInput = document.getElementById('high-score-name');
            
            nameInput.addEventListener('input', (e) =>{
                if (e.target.value.length > 2){
                    submitHighScore.disabled = false;
                } else {
                    submitHighScore.disabled = true;
                }
            })
            
            highScoreDialog.showModal();
            
            const submitHighScore = document.getElementById('submit-high-score');
            submitHighScore.disabled = true;
            
            if(!submitHighScore.dataset.listened){
                submitHighScore.addEventListener('click', async () => {
                    const name = nameInput.value;
                    highScoreDialog.close();
                    if(name && check.local){
                        localhighscores.push({name: name, score: this.score});
                        localhighscores.sort((f, s) => s.score - f.score);
                        localhighscores = localhighscores.slice(0, 10);
                        window.localStorage['infinite-highscores'] = JSON.stringify(localhighscores);
                    }
            
                    if(name && check.global){
                        await this.sendScore(name, this.score);
                    }
    
                    const highScoreSelector = document.getElementById('high-score-selector');
            
                    let type = highScoreSelector.className
                    this.scoring = false;
                    this.buildHighScoreList(type);
                })
                submitHighScore.dataset.listened = true;
            }

            const cancelHighScore = document.getElementById('cancel-high-score');
            if(!cancelHighScore.dataset.listened){
                cancelHighScore.addEventListener('click', function(){
                    const highScoreDialog = document.getElementById('high-score-dialog');
                    this.scoring = false;
                    highScoreDialog.close();
                })
                cancelHighScore.dataset.listened = true;
            }
    
        }
    
        this.newHighScore = Object.values(check).some(value => value === true)
        return this.newHighScore
    }

    addListeners(){
        document.getElementById("game").addEventListener('click', e => {
            if(!this.started){
                this.start();
            }
        });

        document.addEventListener("keydown", e => {
            if( e.key == " " && !this.started && !this.scoring){
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
   
        if( this.player?.position[0] - this.barrier?.position[0] > 1275){
            this.barrier?.move(delta*1.7);
        } else {
            this.barrier?.move(delta*1.1);
        }
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
            this.gameContext.drawImage(this.logo, this.dimensions[0]*0.275, 0, this.dimensions[0]*0.45, this.dimensions[1]*0.45);
            this.gameContext.drawImage(this.controls, this.dimensions[0]*0.275, this.dimensions[1]*0.5, this.dimensions[0]*0.45, this.dimensions[1]*0.45);
            this.gameContext.fillStyle = ["#ffffff", "#e3e3ee", "#e3e3eff", "#f3f3ff", "#ddddee"][Math.floor(Math.random()*5)];
            this.gameContext.font = "28px serif";
            this.gameContext.fillText("Jump to Begin", this.dimensions[0]*0.035, this.dimensions[1]*0.5, this.dimensions[0]*0.205);
        } else {
            this.gameContext.fillStyle = "#ffffff";
            this.gameContext.font = "20px serif";
            this.gameContext.fillText(`Score: ${this.score}`, 600*this.scale, 28*this.scale, this.dimensions[0]);
        }
    }

    async animate(time){
        if(this.player?.position[1] > this.dimensions[1] || this.player?.collides(this.barrier)){
            this.gameOver = true;
        }

        if(this.gameOver && this.started){
            this.started = false;
            this.objects = new Set();
            this.platforms = new Set();
            this.player = null;
            this.barrier = null;
            clearInterval(this.scoreInterval);
            await this.checkHighScores();
            return this.run();
        }

        if(this.player?.distTraveled > this.levelLength){
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
                this.score += 1;
            }
        }, 75)
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