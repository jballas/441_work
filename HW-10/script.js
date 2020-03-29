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

      get bug_x(){
        return this.x;
      }

      set bug_x(x){
        this.x = x;
      }

      get bug_y(){
        return this.y;
      }

      set bug_y(y){
        this.y = y;
      }

      get bwidth(){
        return this.width;
      }

      set bwidth(width){
        this.width = width;
      }

      get bheight(){
        return this.height;
      }

      set bheight(height){
        this.height = height;
      }

      get bfill(){
        return this.fill;
      }

      set bfill(fill){
        this.fill = fill;
      }

      create_square(){
        ctx.fillStyle = this.fill;
        ctx.fillRect(this.x,this.y,this.width,this.height);
      }


   }

// Variables
player_x =0;
player_y = canvas.height - 100;
player_width = 50;
player_height = 100;
bug_x = canvas.width/2;
bug_y = canvas.height/2;
bug_width = 20;
bug_height = bug_width;
var direction_x = 5;
var direction_y = 2;

// create 2 objects
var player_bug = new Bug(player_x, player_y, player_width, player_height, "rgb(100, 31, 196)");
var blue_bug = new Bug(bug_x, bug_y, bug_width, bug_height, "rgb(22, 175, 195)");

// Move square across the screen
// example source code from https://p5js.org/examples/motion-bounce.html

function move(object){

  object.x = object.x + direction_x;
  object.y = object.y + direction_y;

 //square bounces if it hits the screen


  if (object.x > canvas.width || object.x <= 0 ){
      direction_x *= -1;
      }
  if (object.y >= canvas.height || object.y <= 0){
    direction_y *= -1;
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
    ;
    if (boxes_collide(blue_bug, player_bug)){
      change_background();
      grow_size(blue_bug);
    }
  }


// Move player by pressing keyboard
$(this).keypress(function(event){
  getKey(event, player_bug);
  stay_in_bounds(player_bug);

});


// Check if 'wsad' is pressed
function getKey(event, object){

  let speed = 20;
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

  if (actualLetter == "w"){
    object.y -= speed;

  }

  if (actualLetter =="s"){
    object.y += speed;
  }

  if (actualLetter == "a"){
    object.x -= speed;
  }

  if (actualLetter == "d"){
    object.x += speed;
  }
}

  // keeps Player mostly on the Canvas
  function stay_in_bounds(object){
     if (object.x >= canvas.width){
       object.x = 1;
     }
     if (object.x < 0) {
       object.x = canvas.width;
     }

     if (object.y >= canvas.height){
       object.y = 1;
     }
     if (object.y < 0){
       object.y = canvas.height;
     }

  }

  // Collisions

  function boxes_collide(object1,object2){
    return !(
      ((object1.y + object1.height) < (object2.y)) ||
      (object1.y > (object2.y + object2.height)) ||
      ((object1.x + object1.width) < object2.x) ||
      (object1.x > (object2.x + object2.width))
    );
  }

  // if Collisions are detected background color changes.
  function change_background(){
    let random_num = Math.floor(Math.random() * 255);
    let r = random_num ;
    console.log(random_num)
    let g = 80;
    let b = 342;

    $('body').css("background-color", "rgb("+r+", "+g+", "+b+")");
  }

  //object grows bigger when they collide.
  function grow_size(object){
        object.width += 3;
        object.height += .5;

        if (object.width >= canvas.width){
          object.width = 10;
          object.height = object.width;
        };
    }


})

/// Creates random_number variable
/*    let random_num = Math.floor(Math.random() * canvas.width);

  console.log(random_num);
    x += random_num ;
    y += random_num ;


*/
