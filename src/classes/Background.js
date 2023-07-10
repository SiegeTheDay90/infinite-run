import Star from "./Star";

class Background{
    constructor(context, game){
        this.context = context;
        this.scale = game.scale;
        this.dimensions = game.dimensions;
        this.game = game;
        this.objects = new Set();
        this.spawnStar = this.spawnStar.bind(this);
        this.starSpawnInterval = setInterval(this.spawnStar, 100);
    }

    spawnStar(){
        console.log("Star Spawned!");
        const x = this.dimensions[0]+10;
        const y = Math.random()*this.dimensions[1];
        const velocity = [Math.random()*-8, 0];
        this.objects.add( new Star(this.context, this, [x, y], velocity));
        // debugger
    }

    move(delta){
        this.objects.forEach(object => object.move(delta));
        // debugger
    }

    draw(){
        this.context.fillStyle = "#111133";
        this.context.fillRect(0, 0, ...this.dimensions);
        this.objects.forEach(object => object.draw());
    }
}

export default Background;