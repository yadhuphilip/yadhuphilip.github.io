canvas = document.getElementById("canvas");

context = canvas.getContext('2d');

window_height = 600;
window_width = 800;

canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "#aaf";


class Paddle{
    constructor(xrpos,yrpos,rwidth,rheight,rcolor){
        this.xrpos = xrpos;
        this.yrpos = yrpos;
        this.rwidth = rwidth;
        this.rheight = rheight;
        this.rcolor = rcolor;
        this.speed = 5;
    }

    drawrect(context){
        context.fillStyle = this.rcolor;
        context.fillRect(this.xrpos,this.yrpos, this.rwidth, this.rheight);
    }
    updaterect(){
        context.clearRect(0,0,window_width, window_height);
        this.drawrect(context);
        document.addEventListener("keydown",(event) =>{
            if(event.code=="ArrowLeft"){
               // console.log("left");
                this.speed = -5;

            }
            if(event.code=="ArrowRight"){
                //console.log("right");
                this.speed = 5;
            }
            this.xrpos += this.speed;
        });
        console.log("erangi");
    }

}
// document.addEventListener("keydown",(event)=>{
//     console.log(event.keyCode);
// })

let newpaddle = new Paddle((window_width/2)-250/2,(window_height-50),250,30,"green");
newpaddle.drawrect(context);

let updater = function(){
    // requestAnimationFrame(updater);
    newpaddle.updaterect();
    updater();
}
updater();
