class Dot{
    constructor(x, y, t) {
        this.x = x; 
        this.y = y;
        this.t = t || 0.5;
    }

    draw(){
        const s = this.t;
        canvas.fillRect(this.x - s / 2, this.y - s / 2, s, s);
    }

    values(){
        return {x: this.x, y: this.y};
    }
}

class Line{
    constructor(xy1, xy2) {
        this.x1 = xy1.x;
        this.y1 = xy1.y;
        this.x2 = xy2.x;
        this.y2 = xy2.y;;
    }

    draw(){
        canvas.beginPath();
        canvas.moveTo(this.x1, this.y1);
        canvas.lineTo(this.x2, this.y2);
        canvas.stroke();
        canvas.closePath();
    }

    values(){
        return {x: this.x, y: this.y};
    }
}

function color (c){
    canvas.fillStyle = c;
    canvas.strokeStyle = c;
}

const canvas = document.getElementById('canvas').getContext('2d');
canvas.translate(300, 200);
canvas.beginPath();
canvas.moveTo(-300, 0);
canvas.lineTo(300, 0);
canvas.moveTo(0, -200);
canvas.lineTo(0, 200);
canvas.closePath();
canvas.stroke();
canvas.scale(6, -6);
canvas.fillStyle = '#000FF';
canvas.strokeStyle = '#0000FF';