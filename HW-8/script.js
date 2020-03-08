$(document).ready(function(){

stars();
// stars function will run again after a delay
setInterval(function(){   stars()  }, 4000);

function stars(){
    $('#star2').delay(1000).fadeOut("slow").fadeIn("slow");
    $('#star3').delay(1200).fadeOut("slow").fadeIn("slow");
    $('#star4').delay(1400).fadeOut("slow").fadeIn("slow");
    $('#star5').delay(1600).fadeOut("slow").fadeIn("slow");
    $('#star6').delay(1800).fadeOut("slow").fadeIn("slow");
    $('#star7').delay(2000).fadeOut("slow").fadeIn("slow");
    $('#star8').delay(2200).fadeOut("slow").fadeIn("slow");
    $('#star9').delay(2400).fadeOut("slow").fadeIn("slow");
    $('#star1').delay(800).fadeOut("slow").fadeIn("slow");
    $('#star10').delay(2600).fadeOut("slow").fadeIn("slow");
}

// Display hidden 'About' using jQuery slideToggle()
  $('#btn_about').click(function(){
    $('#about').slideToggle();
    })


//When you click the button, the 'movie' begins
      $('#btn_play').click(function(){
        $('.star').hide( function(){
          $('#btn_play').hide( function(){


            // Movie begins
            // Text to use  "Watch out!" "Stop Thief" "Facing a terrible dilemma, our hero..." "My Hero!"

            $('#title').text("Amazing! Bizarre! The Adventures Begins now!").delay(2000).fadeOut("slow", function(){

              var image = new Array("<img src='./images/mary-pickford.jpg'>");
              var text= "Watch out!";

              $('#title_card').html(text).delay(1000).animate({fontSize: "2em"}, "slow");

              $('#title_card2').html(image[0]);


            });

          }); // movie ends

        });
      });
    });
