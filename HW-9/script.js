$(document).ready(function(){
  $("#btn_info").click(function(){

  $.getJSON("https://jballas.github.io/441_work/HW-9/data/small.json", function(data){

        $.each(data, function(i, field){
          $("#show_information").append("Name: " + field.name + "Mass: " + field.mass + "<br>");
        });
       });

    });
$("#button2").click(function(){
  $("#show_information").toggle();
})




})
