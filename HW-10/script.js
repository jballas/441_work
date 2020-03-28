$(document).ready(function(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  class Bug{

      constructor (x, y){
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
      }

      get details(){
        return this.x + this.y + this.width + this.height;
      }

      create_square(){
        ctx.fillStyle = "rgb(22, 175, 195)";
        ctx.fillRect(this.x,this.y,this.width,this.height);
      }

  }
//  let blue_bug = new Bug(x, y);
//  blue_bug.create_square();

var width = 50;
var height = 50;
var x = canvas.width/2;
var y = canvas.height/2;
ctx.fillStyle = "rgb(22, 175, 195)";

// creates a new bug from class
function draw_square(){

    ctx.fillRect(x,y,width,height);
      x += -1;
      y += 1;
  if (x == canvas.width || y == canvas.height || x == 0 || y == 0){
    x=canvas.width / 2;
    y=canvas.width / 2;
  }
}

draw_square();
setInterval(update,1000/60);

  function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw_square();
  }

})


/*    let random_num = Math.floor(Math.random() * 2);

    x += random_num ;
    y += random_num ;


*/
