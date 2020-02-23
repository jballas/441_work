//VARIABLES
var blank_card;
var first_number;

//ARRAYS
var images = ["<img src='../HW-5/images/placeholder-01.png'>", "<img src='../HW-5/images/placeholder-02.png'>", "<img src='../HW-5/images/placeholder-03.png'>", "<img src='../HW-5/images/placeholder-04.png'>", "<img src='../HW-5/images/placeholder-05.png'>"];
var new_array = new Array();
var check_images = [0, 0, 0, 0, 0];

// JSON object
var player = {"first": "", "last": "", "age": ""};

// PLAYER Details

function set_player_info(){
    var first = document.getElementById("first").value;

    var last = document.getElementById("last").value;

    var age = document.getElementById("age").value;

    // We had to add the value into JSON
    player.first = first;
    player.last = last;
    player.age = age;

  //document.getElementById("details").innerHTML= player.first + ":" + player.last + ":" + player.age;
    localStorage.setItem("player", JSON.stringify(player));


}

// temporary function to test my player_information JSON and practice using local Storage
function show_score(){
    window.location="score.html";
}

// This will load Player Details from Local Storage to the Second SCORE.html page
function player_details(){

    player_details = localStorage.getItem("player");
    player = JSON.parse(player_details);
    document.getElementById("player_details").innerHTML = "<p>" + player.first + " " + player.last + "<br>" + player.age + "</p>";

}


// MEMORY GAME
function blank_array(){

      // A loop that displays the blank image inside the blank_array
      for (i = 0; i < 10; i ++){
          blank_card ="<img src='../HW-5/images/blank.png' onclick='flip_card(" + i + ")'>";
          //console.log(blank_card); // For testing purposes only so I can see what is in the blank card variable.
          document.getElementById("display" + i).innerHTML = blank_card;
      }
      // We have to call the function here, in order to get images to display. Otherwise the images are undefined.
      display_actual_images();
  }

// Function to get actual images from a new Array

function display_actual_images(){

  //This will loop through the entire images array.
  for (var i = 0; i < images.length; i++){

    // This randomizes the numbers, but it also repeats numbers, unless we use a if/else statement.
    var random_number = Math.floor(Math.random() * images.length);

    // Now we need to check if the there are 2 images repeated.
    if (check_images[random_number] < 2 ){
      // This pushes the random number into an array.
          new_array.push(images[random_number]);
          // This shows me all the numbers in the new array.   console.log(new_array);
    }
    // AND if the random number isn't repeated, then we need two things happen. First, we create another random number, while the index of our check images array is still at 0. AND we push the first image into the array.
      else {

        // This checks the images array to see if there is 1 or more images in that array.
        while (check_images[random_number] > 1) {
                random_number = Math.floor(Math.random() * images.length);
      }
          new_array.push(images[random_number]);
    }

    // This will add numbers to the check_number array and increase the array by 1, until we get all 10 images.
          check_images[random_number] = check_images[random_number] + 1;
          //console.log(check_images);
  }
}


function flip_card(number){

    first_number = number;

    // this displays the images
    document.getElementById("display"+first_number).innerHTML = new_array[first_number]

    console.log(first_number);
    setTimeout(flip_blank, 1000);

}

function flip_blank(){

    document.getElementById("display" + first_number).innerHTML = "<img src='../HW-5/images/blank.png'";


}
