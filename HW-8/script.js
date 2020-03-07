$(document).ready(function(){

// stars
/*
      $('#star1').delay(800).fadeOut("slow").fadeIn("slow");
      $('#star2').delay(1000).fadeOut("slow").fadeIn("slow");
      $('#star3').delay(1200).fadeOut("slow").fadeIn("slow");
      $('#star4').delay(1400).fadeOut("slow").fadeIn("slow");
      $('#star5').delay(1600).fadeOut("slow").fadeIn("slow");
      $('#star6').delay(1800).fadeOut("slow").fadeIn("slow");
      $('#star7').delay(2000).fadeOut("slow").fadeIn("slow");
      $('#star8').delay(2200).fadeOut("slow").fadeIn("slow");
      $('#star9').delay(2400).fadeOut("slow").fadeIn("slow");
      $('#star10').delay(2600).fadeOut("slow").fadeIn("slow");

*/

//the star are strange if you hide the button before the stars finishing their fadding.
      $('button').click(function(){
        $('.star').hide( function(){
          $('button').hide( function(){

            // Movie begins
              $('#title_card').text("Watch out!").delay(500).fadeOut("slow", function(){
                $('#title_card2').text("Stop Thief!").delay(500).fadeOut("slow", function(){
                  $('#movie_image').attr("src", "./images/mary-pickford.jpg").delay(1000).fadeOut(2000);

                });

              });


          });



        });

      })




})
