//VARIABLES
var blank_card;

//ARRAYS
var images = ["<img src='./images/placeholder-01.png'>", "<img src='./images/placeholder-02.png'>", "<img src='./images/placeholder-03.png'>", "<img src='./images/placeholder-04.png'>", "<img src='./images/placeholder-05.png'>"];

function blank_array(){

      for (i = 0; i < 10; i ++){
          blank_card ="<img src='./images/blank.png' onclick='flip_card(" + i + ")'>";
          console.log(blank_card);
          document.getElementById("display" + i).innerHTML = blank_card;
      }

  }


    function flip_card(number){

            document.getElementById("display"+number).innerHTML = images[Math.floor(Math.random() * 5)] ;
}
