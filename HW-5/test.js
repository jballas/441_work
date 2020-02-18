// Variables
    var deck ="";

// Second goal is to make an array
// I created a function with a for loop to display this array, and now the display is random within the array, but it repeats numbers. do I have to split them off?
//Or we tie the numbers to a specific location?

/*
function image_array(){
    var images = ["<img src='./images/placeholder-01.png'>", "<img src='./images/placeholder-02.png'>", "<img src='./images/placeholder-03.png'>", "<img src='./images/placeholder-04.png'>", "<img src='./images/placeholder-05.png'>", "<img src='./images/placeholder-06.png'>", "<img src='./images/placeholder-07.png'>", "<img src='./images/placeholder-08.png'>", "<img src='./images/placeholder-09.png'>", "<img src='./images/placeholder-10.png'>"];


    for (var i = 0; i < 10; i++ ){
      deck += images[Math.floor(Math.random() * 11)];
    }
    deck = images[Math.floor(Math.random() * 11)];
    document.getElementById("display").innerHTML = "Array Images" + deck;
    //console.log(deck);
}
*/

// Third goal is to make an array with blank images
// I used 2 for loops, one to create my blank deck with ten of the same image in it and one to display the images.

function blank_array(){
    var blanks = [];
    blank_card ="<img src='./images/blank.png' onclick='flip_card()'>";

    //push the same image to empty array
    var blank_deck="";
    for (i = 0; i < 10; i++ ){
      blanks.push(blank_card);
    }

    // display all the items in the array
    for (i = 0; i < blanks.length; i++){
      blank_deck += blanks[i] ;
    }


    // Display the blank cards array in each div
    var d = "display";
    for (i = 0; i < 10; i ++){
        document.getElementById(d + i).innerHTML = "blank cards" + blank_card;
    }


}

// click on an image so it changes from blank

//var flipped = [];
    var images = ["<img src='./images/placeholder-01.png'>", "<img src='./images/placeholder-02.png'>", "<img src='./images/placeholder-03.png'>", "<img src='./images/placeholder-04.png'>", "<img src='./images/placeholder-05.png'>", "<img src='./images/placeholder-06.png'>", "<img src='./images/placeholder-07.png'>", "<img src='./images/placeholder-08.png'>", "<img src='./images/placeholder-09.png'>", "<img src='./images/placeholder-10.png'>"];

function flip_card(){
  var flipped = "display";
      document.getElementById(display0).innerHTML = images[0] ;
      document.getElementById(display1).innerHTML = images[Math.floor(Math.random() * 11)] ;
      document.getElementById(display2).innerHTML = images[Math.floor(Math.random() * 11)] ;
      document.getElementById(display3).innerHTML = images[Math.floor(Math.random() * 11)] ;


  //for (i = 0; i < 10 ; i ++){
      // This displays all the cards when you click on one. Not one card...
      //document.getElementById(flipped + i).innerHTML = images[i] ;

      //Now each blank card displays a random card from the flipped into the same display div
      //document.getElementById(flipped + i).innerHTML = images[Math.floor(Math.random() * 11)] ;

  //}


}
