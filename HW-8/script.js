var movie_stars = new Array('./images/mary-pickford.jpg', './images/buster-keaton.jpg', './images/chaplin, jpg', './images/john-gilbert.jpg', './images/dancer.gif');


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

// Display About using jQuery slideToggle()

  $('#btn_about').click(function(){
    $('#about').slideToggle();
    })


//When you click the button, the 'movie' begins
      $('#btn_play').click(function(){
        $('.star').hide( function(){
          $('#btn_play').hide( function(){

            let random_image = movie_stars[Math.floor(Math.random() * movie_stars.length)];
            console.log(random_image)

            // Movie begins
            $('#title').text("Amazing! Bizarre! Adventures Begin Now!");
              $('#title_card').text("Watch out!").delay(500).fadeOut("slow", function(){
                $('#movie_image').attr("src", random_image).animate({width: "400px"}).fadeOut(2000, function(){

                  // image 1 sequence
                  $('#title_card2').text("Stop Thief!").delay(500).fadeOut("slow", function(){
                      $('#movie_image').fadeIn().attr("src", random_image).delay(1500).animate({width: "150px", top: "150px", right: "150px"}).delay(2000, function(){
                        $('#title_card').fadeIn().text("My Hero!").delay(1500);

                  });

                  // image 2 sequence
                  $('#movie_image2').attr("src", random_image).animate({width: "100px", right: "125px", top: "25px", width: "200px"}).delay(1000).fadeOut("slow");
                    $('#title_card2').fadeIn().text("Facing a terrible dilemma, our hero...").delay(1500).fadeOut("slow");
                });

              });

          }); // movie ends



        });
      });
    });
  });
