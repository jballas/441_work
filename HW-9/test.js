$(document).ready(function(){

// Button to change the image size
/*  $("#btn_change").click( function(){
      $("#test").css("width", "800px");
  });
*/

var img_width = $("#test").width();
var img_height = $("#test").height();
var img_src = $("#test").attr("src");

//console.log (img_width + "X" + img_height);
console.log(img_src);


$("#btn_change").click( function(){
    $("#image_box").append(img_src);

  });

})