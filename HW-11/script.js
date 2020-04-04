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


var squid = new Array();
var player = 0;

class Vertibrate {

  constructor(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  get vert_x(){
    return this.x;
  }

  set vert_x(x){
    this.x = x;
  }

  get vert_y(){
    return this.y;
  }

  set vert_y(y){
    this.y = y;
  }


  toString(){
    let str;
    str = this.x + this.y + this.width + this.height + this.color
    return str;
  }
}

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // create a new objects and push into an array
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
       // display the objects in the array
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
         object.y -= speed;
         movement = "up";
       }
       if (letter == "s"){
         object.y += speed;]
         movement = "down";
       }
       if (letter == "a"){
         object.x -= speed;
         movement = "left"
       }
       if (letter == "d"){
         object.x += speed;
         movement = "right"
       }
       if (letter == "n"){
         player += 1;
         if (player >= squid.length){
           player = 0;
         }
       }
     }

// This function will use collision test to move objects away from each another

function objects_collide(object1,object2){
  if (have_collided(object1, object2) && movement == "up" ){
    object1.y += speed;
  }

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
