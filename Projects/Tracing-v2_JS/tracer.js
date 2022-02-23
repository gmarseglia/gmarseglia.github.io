class Tracer{

    constructor(n, r, walls){
        this.n = n;
        this.walls = walls;
        this.rays = [];
        for(let i=0; i<this.n; i++){
            var ray = new Ray(2* PI /this.n*i, r);
            this.rays.push(ray);
        }
        console.log("Numero di raggi: ", this.rays.length);
    }

    show(walls){
        if(mode == 2 && walls.length > 0){
            for(i=0;i<this.rays.length;i++){
                this.rays[i].show(walls);
            }
        }
    }
}