// image is not flipping anymore. WHY????

var flipped = "<img src='./images/placeholder-01.png'>";

function flip_card(){
  document.getElementById("second").innerHTML = flipped ;
  console.log(flipped);

}


// Second goal is to make an array
// I created a function with a for loop to display this array

function image_array(){
    var images = ["<img src='./images/placeholder-01.png'>", "<img src='./images/placeholder-02.png'>", "<img src='./images/placeholder-03.png'>"];
    var deck ="";

    for (var i = 0; i < images.length; i++ ){
      deck += images[i];
    }
    document.getElementById("deck").innerHTML = "Array Images" + deck;

}

// Third goal is to make an array with blank images
// I used 2 for loops, one to create my blank deck with ten of the same image in it and one to display the images.

function blank_array(){
    var blanks = [];
    var blank_card ="<img src='./images/blank.png' onclick='flip_card()'>";

    //push the same image to empty array
    var blank_deck="";
    for (i = 0; i < 10; i++ ){
      blanks.push(blank_card);
    }

    // display all the items in the array
    for (i = 0; i < blanks.length; i++){
      blank_deck += blanks[i] ;
    }

    document.getElementById("blank_deck").innerHTML = "Array with 10 blanks" + blank_deck;

}
