$(document).ready(function(){


// jQuery plugin to create a dot
/*
(function ($){

  $.fn.dots = function(){
    // SVG circle code adjusted from W3Schools tutorial: www.w3schools.com/graphics/svg_circle.asp

    var circle = "<svg height='5' width='5'><circle cx='2' cy='2' r='2' fill='black'/></svg>"

    for (i = 0; i < 50 ; i ++){
        this.append(circle);
        this.css("height", "20px")
        this.css("overflow", "hidden")
    }
    return this;
  };
}(jQuery));
*/

(function ($){



  $.fn.dotted = function(options){
    // SVG circle code adjusted from W3Schools tutorial: www.w3schools.com/graphics/svg_circle.asp


    var settings = $.extend({
      spacing: 5,
      radius: 2,
      color: "black"
    }, options);


    var spacing;
    var radius;
    var color;
    var circle = "<svg height='" + settings.spacing + "' width='" + settings.spacing + "'><circle cx='"+ settings.radius + "' cy='" + settings.radius+"' r='" + settings.radius+"' fill='"+ settings.color+"'/></svg>";

    for (i = 0; i < 50 ; i ++){
        this.append(circle);
    }

    return this.css({
      spacing: settings.spacing,
      radius: settings.radius,
      color: settings.color,
      height: settings.spacing + settings.radius,
      overflow: "hidden"
    });

  };
}(jQuery));

// Let's create a Class for the svg_circle
// Unfortunately, I can't seem to connect it to the plugin...

class Circle {
  constructor (spacing, cx, radius, fill){
    this.height = spacing;
    this.width = spacing;
    this.cx = cx;
    this.cy = cx;
    this.radius = radius;
    this.fill = fill;
  }

  toString(){
    let str;
    str = "<svg height='" + this.height + "' width='" + this.width + "'><circle cx='" + this.cx + "' cy='" + this.cy + "' r='"+ this.radius + "' fill='" + this.fill + "'/></svg>"
    return str;
  }


  get details(){
    return this.height + " " + this.width + " " + this.cx + " " + this.cy + " " + this.radius + " " + this.fill;

  }

}


// Testing that the new function works

$("#test_button").click( function(){
  $("#trial").html(display).dotted({
    spacing: 50,
    radius: 5,
    color: "rgb(168, 25, 230)"
  });

})

// Testing that the class works, and displays different circles
var small_circle = new Circle(50,5,5, "pink")
var big_circle = new Circle(100, 150,  150, "red");
var display = small_circle.toString();

/*
  $("#test_button").click( function(){
    $("#trial").html(display).dots();

  })
*/

})
