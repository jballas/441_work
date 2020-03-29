$(document).ready(function(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  class Bug{

      constructor (x, y, width, height, fill){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.fill = fill;
      }

      get details(){
        return this.x + this.y + this.width + this.height + this.fill;
      }

      create_square(){
        ctx.fillStyle = this.fill;
        ctx.fillRect(this.x,this.y,this.width,this.height);
      }

  }

// Variables
player_x =0;
player_y = canvas.height - 100;
var x = canvas.width/2;
var y = canvas.height/2;
var direction = 1;


// creates a new bug from class
function draw_square(){

  let blue_bug = new Bug(x, y, 10, 10, "rgb(22, 175, 195)");
  blue_bug.create_square();


  // Move square across the screen
  // https://p5js.org/examples/motion-bounce.html
    x = x + direction;
    y = y + direction;


  // wrap screen, so square reappers
  if (x >= canvas.width || y >= canvas.height || x == 0 || y == 0){
    direction *= -1;
  }
}

// Create second square from class.

function player_square(){


  let player_bug = new Bug(player_x, player_y, 50, 100, "rgb(100, 31, 196)");
  player_bug.create_square();

}

// Call functions
draw_square();
player_square();
setInterval(update,1000/60);

  function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw_square();
    player_square();

  }

//boxes_collide(player_bug, blue_bug);

// Move player draw_square
$(this).keypress(function(event){
  getKey(event);
});


// Check if 'wsad' is pressed
function getKey(event){

  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

  if (actualLetter == "w"){
    player_y -=10;
    console.log(player_y)
  }
}


// Collisions

function boxes_collide(object1,object2){
  return !(
    ((object1.y + object1.height) < (object2.y)) ||
    (object2.y > (object2.y + object2.height)) ||
    ((object1.x + object1.width) < object2.x) ||
    (object1.x + (object2.y + object2.width))
  );
}


})

/// Creates random_number variable
/*    let random_num = Math.floor(Math.random() * canvas.width);

  console.log(random_num);
    x += random_num ;
    y += random_num ;


*/
