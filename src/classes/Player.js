import SolidObject from "./SolidObject";

class Player extends SolidObject{
    constructor(context, game){
        super(context, game, [10, 10], [0, 0], [15, 25]);
        this.addListeners();
        this.standing = true;
        this.keysDown = {};
        this.coolDown = {};
        this.footing = {velocity: [0, 0]};
    }

    move(){
        if(this.velocity[1] > 0 && Array.from(this.game.platforms).some(object => object !== this && this.collides(object) && (this.footing = object))){
            this.velocity[1] = 0;
            // if(!this.standing){this.velocity[0] += this.footing.velocity[0]*0.7}
            this.standing = true;
        } else {
            this.standing = false;
        }
        if(this.standing){
            this.velocity = [this.velocity[0]*0.98 + (this.footing.velocity[0]-this.velocity[0]*0.98)*0.1, 0];
        } else {
            this.velocity = [this.velocity[0] * 0.98, Math.min(this.velocity[1] + 0.2, 7)];
        }
        super.move();
    }

    draw(){
        super.draw("green");
    }

    addListeners(){
        document.addEventListener('keydown', function(e){
            e.preventDefault();
            if(e.key == "j" && this.standing){
                this.jump();
                this.keysDown[e.key] ||= setInterval(this.jump.bind(this), 300);
            } else if(e.key == "ArrowRight" && this.standing){
                this.velocity = [Math.min(this.velocity[0]+1, 6), this.velocity[1]];
                this.keysDown[e.key] ||= setInterval(function(){if(this.standing){ this.velocity = [Math.min(this.velocity[0]+1, 6), this.velocity[1]]; console.log("RIGHT SPEED");}}.bind(this), 200);
            } else if(e.key == "ArrowLeft" && this.standing){
                this.velocity = [Math.max(this.velocity[0]-1, -6), this.velocity[1]]
                this.keysDown[e.key] ||= setInterval(function(){if(this.standing) this.velocity = [Math.max(this.velocity[0]-1, -6), this.velocity[1]]}.bind(this), 200);
            }
        }.bind(this));
        
        document.addEventListener('keyup', function(e){
            clearInterval(this.keysDown[e.key]);
            delete this.keysDown[e.key];
        }.bind(this));
    }

    jump(){
        if(!this.coolDown["jump"]){
            this.velocity = [this.velocity[0], -7];
            this.coolDown["jump"] = true;
            setTimeout(() => this.coolDown["jump"] = false, 400);
        }
    }
}


export default Player;