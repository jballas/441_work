$(document).ready(function(){

// Button to change the image size
/*  $("#btn_change").click( function(){
      $("#test").css("width", "800px");
  });
*/

var circle = "<svg height='5' width='5'><circle cx='2' cy='2' r='2' fill='black'/></svg>"

//var circle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='5' width='5'><circle cx='2' cy='2' r='2' fill='black'></svg>"

  for (i = 0; i < 20 ; i ++){
    $(".border").append(circle);

  }



/* IMAGE TESTING
var img_width = $("#test").width();
var img_height = $("#test").height();
var img_src = $("#test").attr("src");

//console.log (img_width + "X" + img_height);
console.log(img_src);


$("#btn_change").click( function(){
    $("#image_box").append(img_src);

  });
*/
})
