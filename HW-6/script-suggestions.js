//VARIABLES
var blank_card;

//ARRAYS
var images = ["<img src='../HW-5/images/placeholder-01.png'>", "<img src='../HW-5/images/placeholder-02.png'>", "<img src='../HW-5/images/placeholder-03.png'>", "<img src='../HW-5/images/placeholder-04.png'>", "<img src='../HW-5/images/placeholder-05.png'>"];
var new_array = new Array();
//var actualArray = [];
// this array determines how many times the image has been entered into the actual image array
var exists = [0, 0, 0, 0, 0];
// A loop that displays the blank image inside the
function blank_array() {
    for (i = 0; i < 10; i++) {
        blank_card = "<img src='../HW-5/images/blank.png' onclick='flip_card(" + i + ")'>";
        //console.log(blank_card); // For testing purposes only so I can see what is in the blank card variable.
        document.getElementById("display" + i).innerHTML = blank_card;
    }
    setupActualCards();

}

/*
    This function will create an array of actual cards that mirrors your blank cards
    It contains all the actual images.
*/
function setupActualCards() {
    // loop through the entire array - you want to fill the array here
    for (var i = 0; i < 10; i++) {
        // get a random number  between 0 and 9
        var random_number = Math.floor(Math.random() * images.length);
        // check to see if image has been added twice or not
        if (exists[random_number] < 2) {
            // if not, add it to the array
            new_array.push(images[random_number]);
        } else {
            // otherwise, get a new random number, keep looking for a new random number until one is found
            // that hasn't been entered twice
            while (exists[random_number] > 1) {
                //once it's been found, then, we can leave this while loop
                random_number = Math.floor(Math.random() * images.length);
            }
            // then we push that new image onto the array
            new_array.push(images[random_number]);
        }
        // always assume that we are incrementing the exists array increments by 1 so we know
        // how many images are in each slot (we have an array of 5 for a total of 10 images)
        exists[random_number] = exists[random_number] + 1;

    }
    console.log(new_array.length);
}

// This function flips a blank card to an image, but it is tied to the IDs of the DIVs, and not the actual blank image.
// How do I keep from repeating a random number? And yet still show that number twice?
function flip_card(number) {

    /* This just displays the images in order.
    document.getElementById("display"+number).innerHTML = images[number];*/

    // This randomizes the numbers, but it also repeats numbers.
    // var random_number = Math.floor(Math.random() * images.length);

    // this displays the images
    // document.getElementById("display"+number).innerHTML = images[random_number]
    document.getElementById("display" + number).innerHTML = new_array[number];

    // console.log(random_number); // testing

    // This pushing the random number into an array.
    // new_array.push(random_number);

    // console.log(new_array); // This shows me all the numbers in the new array.

    // But I still need to keep the images from repeating I'm going to try to push the image into an array.
    // Now the images are in the new array, but it still repeats.... because even if I push them into the new array, they still exist in the old array. Pushing them doesn't remove them.
    // if (new_array[random_number] < 2){

    // new_array.push(images[random_number]);

    //}

}
