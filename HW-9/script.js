$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("https://jballas.github.io/441_work/HW-9/data/small.json", function(result){
      $.each(result, function(i, field){
        $("#show_information").append(field + " ");
      });
        });
      });

//  $("#show_information").hide();



})
