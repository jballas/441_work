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
        objects_bounce(squid[0], squid[1]);
       }
     }


// KEY EVENT
     $(this).keypress(function(event){
       getKey(event, squid[player]);
       console.log(squid[player].x)
       console.log(player)
     });

     function getKey(event, object){

       var speed = 10;
       var char = event.which || event.keyCode;
       var letter = String.fromCharCode(char);

       if(letter == "w"){
         object.y -= speed;
       }
       if (letter == "s"){
         object.y += speed;
       }
       if (letter == "a"){
         object.x -= speed;
       }
       if (letter == "d"){
         object.x += speed;
       }
       if (letter == "n"){
         player += 1;
         if (player >= squid.length){
           player = 0;
         }
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

     // if objects collide, they should 'bounce'
      function objects_bounce(object1, object2){

        if(have_collided(object1, object2)){
          let bounce = 5;
          (object1.x - object2.width) - bounce;
          (object1.y - object2.width) - bounce;
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
