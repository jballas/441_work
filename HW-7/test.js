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

      get details(){
        return "Title: " + this.title + "<br> Author: " + this.author + "<br> Location: " + this.location + "<br> Year: " + this.year + "<br> Description: " + this.description +"<br>";
      }

      display_image(){
        document.getElementById('photo').src = this.image
      }
  }

/*
          document.getElementById('author').innerHTML = this.author[i];

          document.getElementById('location').innerHTML = this.location[i];

          document.getElementById('year').innerHTML = this.year[i];

          document.getElementById('description').innerHTML = this.description[i];

          document.getElementById('photo').src = this.image[i];
*/

// IMAGES SRC
/*new Array("../HW-5/images/placeholder-06.png", "../HW-5/images/placeholder-07.png", "../HW-5/images/placeholder-08.png", "../HW-5/images/placeholder-09.png", "../HW-5/images/placeholder-10.png");*/


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

  // But this continues to push them into the array???


  let random_num = Math.floor(Math.random() * 2);

  document.getElementById('title').innerHTML = photos[random_num];
  photos[random_num].display_image();
  console.log(random_num);
}
