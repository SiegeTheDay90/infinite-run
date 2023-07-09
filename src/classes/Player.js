import SolidObject from "./SolidObject";

class Player extends SolidObject{
    constructor(context, game){
        super(context, game, [game.dimensions[0]/4, 5], [0, 0], [60*game.scale, 60*game.scale]);
        this.addListeners();
        this.standing = false;
        this.footing = undefined;
        this.spriteSheet = new Image();
        this.spriteSheet.src = "./runner.png";
        this.spriteState = 0;
        this.keysDown = {};
        this.coolDown = {};
    }

    move(delta){

        if(!this.standing){this.velocity = [this.velocity[0], Math.min(this.velocity[1] + 0.17, 9)]}
        else{
            this.velocity[1] = 0;
            if(this.velocity[0] > 3){
                this.velocity[0] *= 0.95;
            }
        };

        if(this.velocity[1] >= 0 && Array.from(this.game.platforms).some(object => object !== this && this.collides(object) && (this.footing = object))){
            if(!this.standing){ // land from air
                this.impact = Math.floor((this.velocity[1]/2));
                this.velocity[0] += this.footing.velocity[0]*0.10*this.impact;
                this.rolling = true;
                setTimeout(() => {
                    this.coolDown["jump"] = false;
                    this.rolling = false;
                }, 200*this.impact)
                this.velocity[1] = 0;
                this.standing = true;
                this.position[1] = this.footing.position[1]-this.dimensions[0]+5*this.game.scale;
            }
        } else {
            this.footing = undefined;
            this.standing = false;
        }
        debugger;
        this.position = [
            this.position[0]/this.game.dimensions[0] > 0.9 ? this.position[0] + this.velocity[0]*delta*this.game.scale : this.position[0], 
            this.position[1] + this.velocity[1]*delta*this.game.scale
        ]
    }
    
    spriteArgs(){
        this.spriteState = (this.spriteState+1)%48;

        let spritePosition = [40*Math.floor(this.spriteState/6), 1];
        const relative_velocity = this.velocity[0] - (this.footing?.velocity[0] || 0);
        
        if(this.rolling){
            spritePosition = [200 + 40*Math.floor(this.spriteState/16), 80]
        } else if(!this.standing && this.velocity[1] < -4*this.game.scale){ // jumping fast
            spritePosition = [0, 80];
        } else if(!this.standing && this.velocity[1] < -1*this.game.scale){ // jumping slow
            spritePosition = [40, 80];
        } else if(!this.standing && this.velocity[1] <= 1){ // in-air
            spritePosition = [80, 80];
        } else if(!this.standing && this.velocity[1] > 1){ // falling slow
            spritePosition = [120, 80];
        } else if(!this.standing && this.velocity[1] > 4*this.game.scale){ // falling fast
            spritePosition = [160, 80];        
        } else if(this.standing && Math.abs(relative_velocity) < 1*this.game.scale){ // standing, not running
            spritePosition = [200, 80];
            this.velocity[0] = this.footing.velocity[0];
        } else if(this.standing && relative_velocity > -2*this.game.scale){ // running quickly
            spritePosition[1] = 41;

        } else if(relative_velocity > 0){ // running slowly
        } else if(relative_velocity < 3*this.game.scale){ //running quickly left
            // spritePosition[1] = 40;
        } else if(relative_velocity < 0){ //running slowly left
            
        }
        return [...spritePosition, 39, 39, this.position[0], this.position[1]-4*this.game.scale, ...this.dimensions];
    }

    draw(){
        // super.draw("green");
        this.context.drawImage(this.spriteSheet, ...this.spriteArgs());
    }

    addListeners(){
        document.addEventListener('keydown', function(e){
            if(e.key == " " && this.standing){
                e.preventDefault();
                this.jump();
                this.keysDown[e.key] ||= setInterval(this.jump.bind(this), 300);
                
            } else if(e.key == "ArrowRight"){ //} && this.standing){
                e.preventDefault();
                
                this.keysDown[e.key] ||= setInterval(function(){
                    if(this.standing){
                        this.velocity = [Math.min((this.velocity[0] > 0 ? this.velocity[0] : 1)*1.20, 8), this.velocity[1]];
                    }
                }.bind(this), 100);
                
            } else if(e.key == "ArrowLeft"){ //&& this.standing){
                e.preventDefault();
               
                this.keysDown[e.key] ||= setInterval(function(){
                    if(this.standing){
                        this.velocity = [this.footing.velocity[0], this.velocity[1]];
                    }
                }.bind(this), 200);
            
            }
        }.bind(this));
        
        document.addEventListener('keyup', function(e){
            clearInterval(this.keysDown[e.key]);
            delete this.keysDown[e.key];
        }.bind(this));
    }

    jump(){
        if(!this.coolDown["jump"]){
            this.position = [this.position[0], this.position[1]-7];
            this.velocity = [this.velocity[0], -8];
            this.coolDown["jump"] = true;
            this.standing = false;
            this.footing = undefined;
        }
    }
}


export default Player;