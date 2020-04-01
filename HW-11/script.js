$(document).ready(function(){

var squares =  {"info":[{"x" : "10",
                         "y" : "0",
                         "width" : "5",
                         "height" : "5",
                         "color" : "rgb(228, 6, 231)"},
           {"x" : "10",
            "y" : "10",
            "width" : "5",
            "height" : "5",
            "color" : "rgb(35, 110, 37)"},
            {"x" : "10",
             "y" : "20",
             "width" : "5",
             "height" : "5",
             "color" : "rgb(209, 177, 23)"},
             {"x" : "10",
              "y" : "30",
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
    console.log(j);
  }

    }

    create_squid();
     drawSquare();

     function update()
     {

         drawSquare();
     }

     function drawSquare()
     {
       for ( let i = 0; i < 4; i ++){
         ctx.fillStyle = squid[i].color;
        ctx.fillRect(squid[i].x, squid[i].y, squid[i].width, squid[i].height);

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
