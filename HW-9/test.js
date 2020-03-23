$(document).ready(function(){

// Button to change the image size
/*  $("#btn_change").click( function(){
      $("#test").css("width", "800px");
  });
*/

var circle = "<svg height='5' width='5'><circle cx='2' cy='2' r='2' fill='black'/></svg>"
console.log(screen.width /2)

//var circle = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='5' width='5'%3E%3Ccircle cx='2' cy='2' r='2' fill='black'/%3E%3C/svg%3E"

  for (i = 0; i < screen.width / 2 ; i ++){
    $(".border").append(circle);

  }
