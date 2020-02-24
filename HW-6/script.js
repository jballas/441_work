//VARIABLES
var blank_card ="../HW-5/images/blank.png";
var number;
var first_number = -1;
var second_number = -1;
var score = 0;

//ARRAYS
var images = ["../HW-5/images/placeholder-01.png", "../HW-5/images/placeholder-02.png", "../HW-5/images/placeholder-03.png", "../HW-5/images/placeholder-04.png", "../HW-5/images/placeholder-05.png"];
var new_array = new Array();
var check_images = [0, 0, 0, 0, 0];
var pair = new Array();

// JSON
var player = {"first":"", "last":"", "age":0, "score":0};


// MEMORY GAME
function blank_array(){

      // A loop that displays the blank image inside the blank_array
      for (i = 0; i < 10; i ++){

          //console.log(blank_card); // For testing purposes only so I can see what is in the blank card variable.
          document.getElementById("display" + i).src = blank_card;
      }
      // We have to call the function here, in order to get images to display. Otherwise the images are undefined.
      display_actual_images();

  }

// Function to get actual images into a new Array and displays them

function display_actual_images(){

  //This will loop through the entire images array.
  for (var i = 0; i < 10; i++){

    // This randomizes the numbers, but it also repeats numbers, unless we use a if/else statement.
    var random_number = Math.floor(Math.random() * images.length);

    // Now we need to check if the there are 2 images repeated.
    if (check_images[random_number] < 2 ){
      // This pushes the random number into an array.
          new_array.push(images[random_number]);
          // This shows me all the numbers in the new array. console.log(new_array);
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


    // This keeps track if a player has clicked a second card.
    if (first_number >= 0){
        second_number = number;
        document.getElementById("display" + number).src = new_array[second_number];

    // This will change the image back after half a second, unless the cards match!
        setTimeout(flip_blank, 500);

    // This will add up our score, so we can display it on the 3rd page.
        score ++;
        console.log(score);
    }

    // If no cards are flipped, then clicking a card displays the image.
    else if (first_number < 0) {
      first_number = number;
      // this displays the images
      document.getElementById("display" + first_number).src = new_array[first_number]

    }

    // This checks if the second card flipped is not equal to the first, and if that is true then it flips the cards back over
    if(new_array[second_number] != new_array[first_number] && first_number >=0 && second_number >=0) {
              setTimeout(flip_blank, 500);
    }
    // This checks if the second card if the same as the first card and if so it doesn't do anything, except reset the variables so we can keep playing the game
    else if (new_array[second_number] == new_array[first_number] && first_number >=0 && second_number >=0) {
      first_number = -1;
      second_number = -1;

        // This will push the second number into an array, so when that array has 5 numbers in it, then we'll have 5 pairs and it will switch to the 3rd page.
        pair.push(second_number);
        //console.log(pair);

        if (pair.length ==5 ){
          show_score();
        }
    }


}

function flip_blank(){

    // This will switch the image src back to blank
    document.getElementById("display" + first_number).src = blank_card;
    document.getElementById("display" + second_number).src = blank_card;

    // We reset our variables, so that it will continue to look for 2 images
    first_number = -1;
    second_number = -1;
}


// PLAYER Details

function set_player_info(){
  // These variables get the values from the input boxes.
    var first = document.getElementById("first").value;

    var last = document.getElementById("last").value;

    var age = document.getElementById("age").value;

    //This will check to see if anything has been entered.
    if (first == "" || last == "" || age == 0){
        window.alert("Enter your Name and age to continue!")
      }
    else {
        // We also have to add the values into the JSON. Very Important!
        player.first = first;
        player.last = last;
        player.age = age;

        //This will send the player information from the 1st page to 2nd page
        localStorage.setItem("player_details", JSON.stringify(player));
        // This sends player to 2nd page
        window.location='game.html';
    }

}

// function to go to score page after the player wins
function show_score(){
    player.score = score;
    localStorage.setItem("player_details", JSON.stringify(player));
    window.location="score.html";
}

// This will load player details from Local Storage on 2nd page to the 3rd and final SCORE page
function player_details(){

    var player_one = localStorage.getItem("player_details");
    player = JSON.parse(player_one);
    document.getElementById("display_all_player_info").innerHTML = "<p> Name: " + player.first + " " + player.last + "<br> Age: " + player.age + "</p>";
    document.getElementById("score").innerHTML = "<p> Score: " + player.score + "</p>";

}
