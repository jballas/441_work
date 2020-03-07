$(document).ready(function(){

// stars

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



//the star are strange if you hide the button before the stars finishing their fadding.
      $('button').click(function(){
        $('.star').hide( function(){
          $('button').hide( function(){

            // Movie begins
              $('#title_card').text("Watch out!").delay(500).fadeOut("slow", function(){
                $('#title_card2').text("Stop Thief!").delay(500).fadeOut("slow", function(){

                  // image 1 sequence
                  $('#movie_image').attr("src", "./images/mary-pickford.jpg").animate({width: "400px"}).fadeOut(2000, function(){
                      $('#movie_image').fadeIn().attr("src", "./images/john-gilbert.jpg").delay(1500).animate({width: "150px", top: "150px", right: "150px"}).delay(2000, function(){
                        $('#title_card').fadeIn().text("My Hero!").delay(1500);

                  });

                  // image 2 sequence
                  $('#movie_image2').attr("src", "./images/chaplin.jpg").animate({width: "100px", right: "125px", top: "25px", width: "200px"}).delay(1000).fadeOut("slow");
                    $('#title_card2').fadeIn().text("Facing a terrible dilemma, our hero...").delay(1500).fadeOut("slow");
                });

              });

          }); // movie ends



        });
      });
    });
  });
