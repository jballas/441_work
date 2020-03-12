$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("https://jballas.github.io/441_work/HW-9/data/small.json", function(data){
      $("#show_information").append(data);
    });
//  $("#show_information").hide();


  })

})
