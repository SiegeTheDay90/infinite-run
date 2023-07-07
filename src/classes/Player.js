import SolidObject from "./SolidObject";

class Player extends SolidObject{
    constructor(context, game){
        super(context, game, [50*game.scale, 25*game.scale], [0, 0], [60*game.scale, 60*game.scale]);
        this.addListeners();
        this.standing = false;
        this.footing = undefined;
        this.spriteSheet = new Image();
        this.spriteSheet.src = "./runner.png";
        this.spriteState = 0;
        this.keysDown = {};
        this.coolDown = {};
    }

    move(){
        // debugger;
        this.velocity = [this.velocity[0]*0.995, Math.min(this.velocity[1] + 0.2, 9)];
        if(this.velocity[0] < 0.5){
            this.velocity[0] = 0;
        }

        if(this.velocity[1] > 0 && Array.from(this.game.platforms).some(object => object !== this && this.collides(object) && (this.footing = object))){
            if(!this.standing){ // land from air
                this.impact = Math.floor((this.velocity[1]/2))
                // this.velocity[0] = Math.max(this.velocity[0]*0.95, this.footing?.velocity[0])
                this.rolling = true;
                setTimeout(() => {
                    this.coolDown["jump"] = false;
                    this.rolling = false;
                }, 200*this.impact)
            }
            this.velocity[1] = 0;
            this.position[1] = this.footing.position[1]+1-this.dimensions[1];
            this.standing = true;
        } else {
            this.footing = undefined;
            this.standing = false;
        }
    
        this.position = [
            this.position[0] + (this.velocity[0]+(this.footing?.velocity[0]+1 || 0))*this.game.scale, 
            this.position[1] + (this.velocity[1]+ (this.footing?.velocity[1]+1 || 0))*this.game.scale
        ]
}
    
    spriteArgs(){
        this.spriteState = (this.spriteState+1)%48;

        let spritePosition = [40*Math.floor(this.spriteState/6), 1];
        const relative_velocity = this.velocity[0] - (this.footing?.velocity[0] || 0);
        debugger;
        
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
                
            } else if(e.key == "ArrowRight" && this.standing){
                e.preventDefault();
                
                this.velocity = [Math.min(this.velocity[0]+0.7, 8), this.velocity[1]];
                this.keysDown[e.key] ||= setInterval(function(){if(this.standing) this.velocity = [Math.min(this.velocity[0]+0.7, 4.7), this.velocity[1]]}.bind(this), 200);
                
            } else if(e.key == "ArrowLeft" && this.standing){
                e.preventDefault();
               
                this.velocity = [Math.max(this.velocity[0]-0.7, -8), this.velocity[1]]
                this.keysDown[e.key] ||= setInterval(function(){if(this.standing) this.velocity = [Math.max(this.velocity[0]-0.7, -4.7), this.velocity[1]]}.bind(this), 200);
            
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
            this.velocity = [this.velocity[0], -7];
            this.coolDown["jump"] = true;
            this.standing = false;
            this.footing = undefined;
        }
    }
}


export default Player;