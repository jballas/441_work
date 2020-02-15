//A very Simple start, I made a function to change an image to another when you click on it.
var img = "<img src='./images/placeholder-01.png'>";

function flip_card(){
  document.getElementById("first").innerHTML = img;
}

// Second goal is to make an array

var blanks = ["<img src='./images/placeholder-01.png'>", "<img src='./images/placeholder-02.png'>"];

  document.getElementById("deck").innerHTML = blanks;

// for loop with this array
/*
function blank_array(){

    for (var i = 0; i < blanks.length; i++ ){
      blanks += blanks[i] + "<br>";
    }
}*/
