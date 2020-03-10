$(document).ready(function(){

stars();
shapes();
// stars function will run again after a delay
setInterval(function(){stars()}, 4000);
setInterval(function(){shapes()}, 2500);

function stars(){
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
}

// Display hidden 'About' using jQuery slideToggle()
  $('#btn_about').click(function(){
    $('#about').slideToggle();
    })

// Animated Shapes
function shapes(){
  $("#square").animate({left: '80%'}, "slow").animate({top: '550px'}, "slow").animate({left: '5%'}, "slow").animate({top: '535px'}, "slow");
  $("#circle").animate({left: '80%'}, "slow").animate({left: '5%'}, "slow");
  $("#diamond").animate({left: '80%'}, "slow").animate({left: '5%'}, "200");
}

//When you click the button, the 'movie' begins
      $('#btn_play').click(function(){
        $('.star').hide( function(){
          $('#btn_play').hide( function(){

            // Movie begins
            $('#title').text("Amazing! Bizarre! The Adventures Begins now!").delay(2000).fadeOut(function(){

            play_movie();

        });
      });
    });
  });
      var text = new Array("Watch out!", "My Hero!", "Fin");

      var image_src = new Array("./images/mary-pickford.jpg", "./images/john-gilbert.jpg", "./images/chaplin.jpg", "./images/buster-keaton.jpg")

  function play_movie(){

                $('#title_card').html(text[0]).animate({fontSize: "2em"}, "slow").fadeOut(2000, function(){
                    $('#title_card2').html(text[1]).animate({fontSize: "2em"}, "slow").fadeOut(4000, function(){
                      $('#ending').html(text[2]).animate({fontSize: "3em"}, "slow");
                    });
                });
                $('#movie_image').attr('src', image_src[0]).fadeOut(2000, function(){
                  $('#movie_image2').delay(2000).attr('src', image_src[1]).fadeOut(4000);
                });

    }

});
