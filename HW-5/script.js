//VARIABLES
var blank_card;

//ARRAYS
var images = ["<img src='./images/placeholder-01.png'>", "<img src='./images/placeholder-02.png'>", "<img src='./images/placeholder-03.png'>", "<img src='./images/placeholder-04.png'>", "<img src='./images/placeholder-05.png'>", "<img src='./images/placeholder-01.png'>", "<img src='./images/placeholder-02.png'>", "<img src='./images/placeholder-03.png'>", "<img src='./images/placeholder-04.png'>", "<img src='./images/placeholder-05.png'>"];

// A loop that displays the blank image inside the
function blank_array(){

      for (i = 0; i < 10; i ++){
          blank_card ="<img src='./images/blank.png' onclick='flip_card(" + i + ")'>";
          //console.log(blank_card); // For testing purposes only so I can see what is in the blank card variable.
          document.getElementById("display" + i).innerHTML = blank_card;
      }

  }

// This function flips a blank card to an image, but it is tied to the IDs of the DIVs, and not the actual blank image.
// How do I keep from repeating a random number? And yet still show that number twice?
  function flip_card(number){

    // This just displays the images in order.
    //document.getElementById("display"+number).innerHTML = images[number];

    // My first attempt to just randomize the numbers. I couldn't figure out how to prevent repeat numbers, or make sure I got 2 pairs from this.
    document.getElementById("display"+number).innerHTML = images[Math.floor(Math.random() * 5)]

}
