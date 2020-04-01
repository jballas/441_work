$(document).ready(function(){

var squares =  {"info":[{"x" : "0",
                         "y" : "0",
                         "width" : "5",
                         "height" : "5",
                         "color" : "rgb(228, 6, 231)"},
           {"x" : "0",
            "y" : "10",
            "width" : "5",
            "height" : "5",
            "color" : "rgb(35, 110, 37)"},
            {"x" : "0",
             "y" : "20",
             "width" : "5",
             "height" : "5",
             "color" : "rgb(209, 177, 23)"},
             {"x" : "0",
              "y" : "40",
              "width" : "5",
              "height" : "5",
              "color" : "rgb(223, 148, 38)"}]};


var squid = new Array();

class Fish {

  constructor(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  toString(){
    let str;
    str = this.x + this.y + this.width + this.height
    return str;
  }
}

    var canvas = document.getElementById("canvas");
     var ctx = canvas.getContext("2d");
     ctx.fillStyle = squares.info[0].color;

    // var create_squid = new Fish(x,y,w,h);

        var first = new Fish(squares.info[0].x, squares.info[0].y, squares.info[0].width, squares.info[0].height);
        var second = new Fish(squares.info[1].x, squares.info[1].y, squares.info[1].width, squares.info[1].height);

         squid.push(first);

         squid.push(second);







     drawSquare();

     function update()
     {

         drawSquare();
     }

     function drawSquare()
     {
      // ctx.fillRect(x,y,w,h);
            for (let i = 0; i < squid.length; i ++){
        ctx.fillRect(squid[0].x, squid[0].y, squid[0].width, squid[0].height);

     }
   }


// KEY EVENT
     $(this).keypress(function(event){
       getKey(event);
     });

     function getKey(event){
       var char = event.which || event.keyCode;
       var letter = String.fromCharCode(char);

       if(letter == "w"){
         moveUp();
       }
       drawSquare();
     }

     function moveUp(){
       y -= 10;
     }

})
