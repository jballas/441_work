$(document).ready(function(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  class Bug{

      constructor (x, y){
        this.width = canvas.width;
        this.height = canvas.height;
        this.x = x;
        this.y = y;
      }

      get details(){
        return this.x + this.y + this.width + this.height;
      }

      create_square(){
        ctx.fillStyle = "rgb(22, 175, 195)";
        ctx.fillRect(this.x,this.y,50,50);
      }

  }

//
  draw_square();
  setInterval(update,1000/60);

  function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw_square();
  }

function draw_square(){
  let x = canvas.height/2;
  let y = canvas.width/2

  let blue_bug = new Bug(x, y);
  blue_bug.create_square();

    let random_num = Math.floor(Math.random() * 2);

    x += random_num ;
    y += random_num ;

    if (x == canvas.width || y == canvas.height || x == 0 || y == 0){
      x=canvas.width / 2;
      y=canvas.width / 2;
    }
}



})
