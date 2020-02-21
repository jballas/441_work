//VARIABLES
var blank_card;

//ARRAYS
var images = ["<img src='../HW-5/images/placeholder-01.png'>", "<img src='../HW-5/images/placeholder-02.png'>", "<img src='../HW-5/images/placeholder-03.png'>", "<img src='../HW-5/images/placeholder-04.png'>", "<img src='../HW-5/images/placeholder-05.png'>"];
var new_array = new Array();

// A loop that displays the blank image inside the
function blank_array(){

      for (i = 0; i < 10; i ++){
          blank_card ="<img src='../HW-5/images/blank.png' onclick='flip_card(" + i + ")'>";
          //console.log(blank_card); // For testing purposes only so I can see what is in the blank card variable.
          document.getElementById("display" + i).innerHTML = blank_card;
      }

  }

// This function flips a blank card to an image, but it is tied to the IDs of the DIVs, and not the actual blank image.
// How do I keep from repeating a random number? And yet still show that number twice?
function flip_card(number){

    /* This just displays the images in order.
    document.getElementById("display"+number).innerHTML = images[number];*/

    // This randomizes the numbers, but it also repeats numbers.
    var random_number = Math.floor(Math.random() * images.length);

    // this displays the images
    document.getElementById("display"+number).innerHTML = images[random_number]

    console.log(random_number); // testing

    // This pushing the random number into an array.
    new_array.push(random_number);

    console.log(new_array); // This shows me all the numbers in the new array.

// But I still need to keep the images from repeating I'm going to try to push the image into an array.
// Now the images are in the new array, but it still repeats.... because even if I push them into the new array, they still exist in the old array. Pushing them doesn't remove them.
    if (new_array[random_number] < 2){

      new_array.push(images[random_number]);

    }

}
