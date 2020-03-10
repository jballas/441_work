$(document).ready(function(){

stars();
// stars function will run again after a delay
//setInterval(function(){stars()}, 4000);

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

      var image = new Array("<img src='./images/mary-pickford.jpg' id='movie'>", "<img src='./images/john-gilbert.jpg'>", "<img src='./images/buster-keaton.jpg'>", "<img src='./images/chaplin.jpg'>", "<img src='./images/dancer.gif'>", "<img src='./images/the-good-sport.gif'>");
//When you click the button, the 'movie' begins
      $('#btn_play').click(function(){
        $('.star').hide( function(){
          $('#btn_play').hide( function(){

            // Movie begins
            $('#title').text("Amazing! Bizarre! The Adventures Begins now!").delay(2000).fadeOut(function(){

          //  play_movie();

          $('#movie_image').attr('src', './images/mary-pickford.jpg').fadeOut( function(){
            $('#movie_image').attr('src', './images/john-gilbert.jpg').fadeIn();
            });
        });
      });
    });
  });
    // Text to use  "Watch out!" "Stop Thief" "Facing a terrible dilemma, our hero..."


      var text= "Watch out!";
      var text2 = "My Hero!";

      var image_src = new Array("./images/mary-pickford.jpg", "./images/john-gilbert.jpg", "./images/chaplin.jpg", "./images/buster-keaton.jpg")



  function play_movie(){

                $('#title_card').html(text).animate({fontSize: "2em"}, "slow").fadeOut(2000, function(){
                    $('#title_card2').html(text2).animate({fontSize: "2em"}, "slow").fadeOut(2000);
                });
                $('#movie_image').attr('src', './images/mary-pickford.jpg').fadeOut(2000, function(){
                  $('#movie_image2').delay(2000).fadeIn(4000).attr('src', './images/john-gilbert.jpg');
                });

    }

});
