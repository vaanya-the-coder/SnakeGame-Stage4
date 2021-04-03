class Snake {
    constructor(){
        this.body = []
        this.body[0] = createVector(floor(w/2),floor(h/2))
        this.xdir = 0
        this.ydir = 0
        this.length = 0
        this.image = loadImage("images/circle-cropped.png");
    }
    setdir(x,y){
        this.xdir = x;
        this.ydir = y;
    }
    eat(pos){
        
        var x = this.body[this.body.length-1].x;
        var y = this.body[this.body.length-1].y;
        
        if(x === pos.x && y === pos.y){
            this.grow();
            return true;
        }
        return false;
    
}
    grow(){
        var head = this.body[this.body.length-1].copy();
        this.length = this.length + 1;
        this.body.push(head);
    }
    update(){
        var head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x = head.x + this.xdir;
        head.y = head.y + this.ydir;
        this.body.push(head);
    }
    end(){
        var x = this.body[this.body.length-1].x;
        var y = this.body[this.body.length-1].y;
        if(x>w-1||x<0||y>h-1||y<0){
            return true;
        }
        for(var i = 0; i<this.body.length-1; i=i+1){
            var part = this.body[i];
            if(part.x === x && part.y === y){
                this.image = null;
                console.log(this.body);
                return true;
                
            }
        }
        return false;
    }
    display(){
        if(this.image != undefined){
        for(var i=0; i<this.body.length; i=i+1){
            image(this.image,this.body[i].x,this.body[i].y,1,1);
        }
    }
    }
}