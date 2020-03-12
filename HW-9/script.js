$(document).ready(function(){
  $("#btn_info").click(function(){
    $.getJSON("https://jballas.github.io/441_work/HW-9/data/small.json", function(data){
      console.log("success");
      $.each(data, function(i, field){
        $("#show_information").append(field + " ");
      });
     });
    });
$("#button2").click(function(){
  $("#show_information").toggle();
})



})
