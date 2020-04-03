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
              "color" : "rgb(223, 148, 38)"}]};


var squid = new Array();
var player = 0;

class Fish {

  constructor(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  get fishx(){
    return this.x;
  }

  set fishx(x){
    this.x = x;
  }

  get fishy(){
    return this.y;
  }

  set fishy(y){
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
/*      var first = new Fish(squares.info[0].x, squares.info[0].y, squares.info[0].width, squares.info[0].height, squares.info[0].color
);
      var second = new Fish(squares.info[1].x, squares.info[1].y, squares.info[1].width, squares.info[1].height, squares.info[1].color
);
       squid.push(first);
       squid.push(second);
*/


  for(let i = 0; i < 4; i ++){
    let j = new Fish(squares.info[i].x, squares.info[i].y, squares.info[i].width, squares.info[i].height, squares.info[i].color
    );
    squid.push(j);
    //console.log(j)
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
       for ( let i = 0; i < squid.length ; i ++){
         ctx.fillStyle = squid[i].color;
        ctx.fillRect(squid[i].x, squid[i].y, squid[i].width, squid[i].height);
       }
     }


// KEY EVENT
     $(this).keypress(function(event){
       getKey(event);
       console.log(squid[player].x)
       console.log(player)
     });

     function getKey(event){

       var speed = 10;
       var char = event.which || event.keyCode;
       var letter = String.fromCharCode(char);

       if(letter == "w"){
         squid[player].y -= speed;
       }
       if (letter == "s"){
         squid[player].y += speed;
       }
       if (letter == "a"){
         squid[player].x -= speed;
       }
       if (letter == "d"){
         squid[player].x += speed;
       }
       if (letter == "n"){
         player += 1;
         if (player >= squid.length){
           player = 0;
         }
       }
     }




})
