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

    // var create_squid = new Fish(x,y,w,h);

    function create_squid(){

// create a new objects and push into an array
  for(let i = 0; i < 5; i ++){
    let j = new Fish(squares.info[i].x, squares.info[i].y, squares.info[i].width, squares.info[i].height, squares.info[i].color
    );
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


     function canvas_wall(object){
       if (object.x >= canvas.width){
         object.x = canvas.width;
       }
       if (object.y >= canvas.height){
         object.y = canvas.height;
       }
       if (object.x <= 0){
         object.x = 0;
       }
       if (object.y <= 0){
         object.y = 0;
       }
     }

})
