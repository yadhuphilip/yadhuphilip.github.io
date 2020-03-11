
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

let window_height =  600;
let window_width = 800;

canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "#ff3";


//drawing
class Circle{
    constructor(xpos, ypos, radius, color, speed){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.speed = speed;

        this.dx = 1*this.speed;
        this.dy = 1*this.speed;
    }
    draw(context){
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, 2* Math.PI, false);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
    }
    update(){
        context.clearRect(0,0,window_width, window_height);
        this.draw(context);
        if((this.xpos+ this.radius  ) > window_width){
            this.dx = -this.dx;
        }
        if((this.xpos - this.radius) < 0){
            this.dx = -this.dx;
        }
        if((this.ypos+this.radius)>window_height){
            this.dy = -this.dy;
        }
        if((this.ypos-this.radius) < 0){
            this.dy = -this.dy;
        }
        
        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}
let new_circle =  new Circle(100,100,50,"red",5);

new_circle.draw(context)

let update_circle = function(){
    requestAnimationFrame(update_circle);
    new_circle.update();
}

update_circle();