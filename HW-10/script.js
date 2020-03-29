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
        this.control ;
        this.direction = 1;
        this.speed = 20;
      }

      get details(){
        return this.x + this.y + this.width + this.height + this.fill;
      }

      create_square(){
        ctx.fillStyle = this.fill;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        this.move();
      }

      move(){

        if (this.control = 1){
          $('canvas').css("background-color", "red");
          }
          $(this).keypress(function(event){
            getKey(event);
          });

         if (this.control=2){
              /*
          // Move squares across the screen
          // example taken from https://p5js.org/examples/motion-bounce.html
          this.x = this.x + this.direction;
          this.y = this.y + this.direction;
          // wrap screen, so square reappers
          if (this.x >= canvas.width || y >= canvas.height || this.x == 0 || this.y == 0){
            this.direction *= -1;
          }*/
        }
      }

      getKey(event){

       var char = event.which || event.keyCode;
       var actualLetter = String.fromCharCode(char);
       console.log(actualLetter);

       if (actualLetter == "w"){
         this.y -= speed;
         console.log(this.y)
       }

       if (actualLetter =="s"){
         this.y += speed;
       }

       if (actualLetter == "a"){
         this.x -= speed;
       }

       if (actualLetter == "d"){
         this.x += speed;
       }
     }
   }

// Variables
player_x =0;
player_y = canvas.height - 100;
var x = canvas.width/2;
var y = canvas.height/2;


// create 2 objects
var player_bug = new Bug(player_x, player_y, 50, 100, "rgb(100, 31, 196)");
var blue_bug = new Bug(x, y, 10, 10, "rgb(22, 175, 195)");

/*
move(){
  // Move square across the screen
  // example taken from https://p5js.org/examples/motion-bounce.html
  x = x + direction;
  y = y + direction;
  console.log(x)
}*/



// draws a new bug from object we created above
function draw_square(){
  blue_bug.create_square();
  blue_bug.control = 1;
}


// Create second square from class.

function player_square(){
  player_bug.create_square();
  player_bug.control = 1;
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
      window.alert("bingo");
    }

  }


/* Move player draw_square
$(this).keypress(function(event){
  getKey(event);
});


// Check if 'wsad' is pressed
function getKey(event){

  let speed = 20;
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

  if (actualLetter == "w"){
    player_y -= speed;
    console.log(player_y)
  }

  if (actualLetter =="s"){
    player_y += speed;
  }

  if (actualLetter == "a"){
    player_x -= speed;
  }


  if (actualLetter == "d"){
    player_x += speed;
  }
}*/

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
