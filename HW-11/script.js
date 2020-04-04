$(document).ready(function(){

var squares =  {"info":[{"x" : 10,
                         "y" : 0,
                         "width" : 5,
                         "height" : 5,
                         "color" : "rgb(228, 6, 231)"},
           {"x" : 10,
            "y" : 10,
            "width" : 5,
            "height" : 5,
            "color" : "rgb(35, 110, 37)"},
            {"x" : 10,
             "y" : 20,
             "width" : 5,
             "height" : 5,
             "color" : "rgb(209, 177, 23)"},
             {"x" : 10,
              "y" : 30,
              "width" : 5,
              "height" : 5,
              "color" : "rgb(223, 148, 38)"},
              {"x" : 10,
               "y" : 40,
               "width" : 5,
               "height" : 5,
               "color" : "rgb(23, 99, 209)"}]};

// VARIABLES
var squid = new Array();
var player = 0;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// create new objects and push into an array
  function create_squid(){
      for(let i = 0; i < 5; i ++){
          let j = new Vertibrate(squares.info[i].x, squares.info[i].y, squares.info[i].width, squares.info[i].height, squares.info[i].color);
          squid.push(j);
      }
    }

    create_squid();
    drawSquare();
    setInterval(update, 1000/60);

  function update() {
       ctx.clearRect(0,0,canvas.width,canvas.height);
         drawSquare();
     }

  function drawSquare(){
       // for loop to display the objects in the array
       for ( let i = 0; i < squid.length ; i ++){
         ctx.fillStyle = squid[i].color;
        ctx.fillRect(squid[i].x, squid[i].y, squid[i].width, squid[i].height);
        canvas_wall(squid[i]);

        // this variable will allow us to test if collision is true or false
        var test = false;

        // this will loop through my squid array to see if any objects are colliding
        test = objects_collide(squid[player], squid[i]);
        if (test2 == true){
          break; // if the objects overlap, then we break out of the loop.
        }
       }
     }



     // KEYPRESS EVENT
     $(this).keypress(function(event){
       getKey(event, squid[player]);
     });


     // This function creates movement when a key is pressed
     function getKey(event, object){

       var speed = 10;
       var movement;
       var char = event.which || event.keyCode;
       var letter = String.fromCharCode(char);

       if(letter == "w"){
         up(object);
         movement = "up";
       }
       if (letter == "s"){
         down(object);
         movement = "down";
       }
       if (letter == "a"){
         left(object);
         movement = "left"
       }
       if (letter == "d"){
         right(object);
         movement = "right"
       }
       if (letter == "n"){
         player += 1;
         if (player >= squid.length){
           player = 0;
         }
       }

       //
       if (
         movement == "up" ){

       }
     }

// These functions create movement up/down/left/moveRight.
//We create seperate functions for these so we can reuse them with our collisions test above
    function up(object){
        object.y -= speed;
    }

    function down(object){
        object.y += speed;
    }

    function left(object){
         object.x -= speed;
    }

    function right(object){
          object.x += speed;
    }

// Keep the player objects within the canvas.
     function canvas_wall(object){
       if (object.x >= canvas.width - object.width){
         object.x = canvas.width - object.width;
       }
       if (object.y >= canvas.height - object.height){
         object.y = canvas.height - object.height;
       }
       if (object.x <= 0){
         object.x = 0;
       }
       if (object.y <= 0){
         object.y = 0;
       }
     }

     //Create object collision detection
      function have_collided(object1,object2){
        return !(
          ((object1.y + object1.height) < (object2.y)) || //
          (object1.y > (object2.y + object2.height)) ||
          ((object1.x + object1.width) < object2.x) ||
          (object1.x > (object2.x + object2.width))
        );
      }

})
