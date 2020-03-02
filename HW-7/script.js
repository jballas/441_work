// Photoviewer by Julia Ballas

// ARRAY
var photos = new Array();

class Photo {

    constructor(title, author, location, date, des, image){

      this.title =  title;
      this.author = author;
      this.location = location;
      this.year = date;
      this.description = des;
      this.image = image;
    }

    // method to display Photos
      toString(){

        let str;
        str = "Title: " + this.title + "<br> Author: " + this.author + "<br> Location: " + this.location + "<br> Year: " + this.year + "<br> Description: " + this.description +"<br>"
        return str;
      }

      // Rather than 5 getters I combined them into one.
      get details(){
        return "Title: " + this.title + "<br> Author: " + this.author + "<br> Location: " + this.location + "<br> Year: " + this.year + "<br> Description: " + this.description +"<br>";
      }

      display_image(){
        document.getElementById('photo').src = this.image
      }
  }

function display(){
//Create a new object with following parameters (title, author, location, date, des, image)
  let new_photo = new Photo("Montana Sunset","Julia Ballas","Montana", "2020", "A sunset showing off the Spanish Peaks in Central Montana", "../HW-5/images/placeholder-06.png" );

 let second_photo = new Photo("City Sunset","Julia Ballas","New York", "2020", "A sunset showing off New York", "../HW-5/images/placeholder-07.png" );

// push them into an array
  photos.push(new_photo);
  photos.push(second_photo);

}

// Create new photo and display it
function new_photo() {

  // display();
  // Problem: calling the display() function here continues to push them into the array???
  // Solution: I Had it in the wrong place. We needed to load it once, using the <body onload="" > Otherwise, yest, it will continue to push the images into the array every single time I click a button.

  // create a variable with random number.
  let random_num = Math.floor(Math.random() * photos.length);

  document.getElementById('details').innerHTML = photos[random_num];
  photos[random_num].display_image();
  console.log(random_num);
}
