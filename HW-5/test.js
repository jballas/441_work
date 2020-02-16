//VARIABLES
var deck ="";

function blank_array(){
    var blank_card;
    //var number = 0;
    //var blank_card ="<img src='./images/blank.png' onclick='flip_card(" + number + ")'>";

      //var blank_card ="<img src='./images/blank.png' onclick='flip_card(0)'>";

      for (i = 0; i < 10; i ++){
          blank_card ="<img src='./images/blank.png' onclick='flip_card(" + i + ")'>";
          console.log(blank_card);
          document.getElementById("display" + i).innerHTML = blank_card;
      }

/*
      for (i = 0; i < 10; i ++){
          document.getElementById("display" + i).innerHTML = "blank cards" + blank_card;
      }
*/
  }


    function image_array(number){
        var images = ["<img src='./images/placeholder-01.png'>", "<img src='./images/placeholder-02.png'>", "<img src='./images/placeholder-03.png'>", "<img src='./images/placeholder-04.png'>", "<img src='./images/placeholder-05.png'>", "<img src='./images/placeholder-06.png'>", "<img src='./images/placeholder-07.png'>", "<img src='./images/placeholder-08.png'>", "<img src='./images/placeholder-09.png'>", "<img src='./images/placeholder-10.png'>"];


    //    deck = images[Math.floor(Math.random() * 11)];
        deck= images[0];
        document.getElementById("display"+number).innerHTML = deck;
        console.log(deck);
    }

    function flip_card(number){
            document.getElementById("display"+number).innerHTML = image_array(number) ;
    }
