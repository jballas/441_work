$(document).ready(function(){
  $("#btn_info").click(function(){

  $.getJSON("https://jballas.github.io/441_work/HW-9/data/meteorite.json", function(data){
        console.log("success");
        $.each(data, function(i, field){
          $("#show_information").append(field + " ");
        });
       });

       var jqxhr = $.getJSON( "https://jballas.github.io/441_work/HW-9/data/meteorite.json", function() {
         console.log( "success" );
       })
         .done(function() {
           console.log( "second success" );
         })
         .fail(function() {
           console.log( "error" );
         })
         .always(function() {
           console.log( "complete" );
         });

    });
$("#button2").click(function(){
  $("#show_information").toggle();
})




})
