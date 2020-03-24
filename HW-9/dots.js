$(document).ready(function(){

(function ($){

  $.fn.dotted = function(options){

// This will create different options for my dot border
    var settings = $.extend({
      spacing: 5,
      radius: 2,
      color: "black"
    }, options);

    // Variables to create the svg circle.
    var spacing;
    var radius;
    var color;

    // SVG circle code adjusted from W3Schools tutorial: www.w3schools.com/graphics/svg_circle.asp
    var circle = "<svg height='" + settings.spacing + "' width='" + settings.spacing + "'><circle cx='"+ settings.radius + "' cy='" + settings.radius+"' r='" + settings.radius+"' fill='"+ settings.color+"'/></svg>";

    // This will make the svg circle appear 50 times, but that's bad code, it needs to just appear as many times will fit in the div... Then I wouldn't need to have the height setting below.
    for (i = 0; i < 50 ; i ++){
        this.append(circle);
    }

    // we return the setting options, which letting us adjust them when the function is called.
    return this.css({
      spacing: settings.spacing,
      radius: settings.radius,
      color: settings.color,
      height: settings.spacing + settings.radius, // this needs to have a minimum of 20px
      overflow: "hidden"
    });

  };
}(jQuery));


})
