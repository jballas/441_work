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

      get width(){
        return this.width;
      }

      set width(){
        this.width = width;
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

// create 2 objects
var player_bug = new Bug(player_x, player_y, 50, 100, "rgb(100, 31, 196)");
var blue_bug = new Bug(x, y, 10, 10, "rgb(22, 175, 195)");

// Move square across the screen
// example taken from https://p5js.org/examples/motion-bounce.html

function move(object1){
  object1.x = object1.x + direction;
  object1.y = object1.y + direction;


  if (object1.x >= canvas.width || y >= canvas.height || blue_bug.x == 0 || object1.y == 0){
           direction *= -1;
         }
}

// draws a new bug from object we created above
function draw_square(){
  blue_bug.create_square();
  move(blue_bug);
}

// Create second square from class.

function player_square(){
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

    if (boxes_collide(blue_bug,player_bug)){
      console.log('boxes collided!')
    }

  }


// Move player draw_square

$(this).keypress(function(event){
  getKey(event);
});


// Check if 'wsad' is pressed
function getKey(event){

  let speed = 20;
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

  if (actualLetter == "w"){
    player_bug.y -= speed;
    console.log(player_y)
  }

  if (actualLetter =="s"){
    player_bug.y += speed;
  }

  if (actualLetter == "a"){
    player_bug.x -= speed;
  }


  if (actualLetter == "d"){
    player_bug.x += speed;
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
