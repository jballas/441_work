$(document).ready(function(){


// jQuery plugin to create a dot

(function ($){

  $.fn.dots = function(){
    var circle = "<svg height='5' width='5'><circle cx='2' cy='2' r='2' fill='black'/></svg>"
    for (i = 0; i < 50 ; i ++){
        this.append(circle);
    }
    return this;
  };
}(jQuery));



})
