// Photoviewer by Julia Ballas

// ARRAYS
var titles = new Array("title0", "title1", "title2", "title3", "title4");

var authors = new Array("author0", "author1", "author2", "author3", "author4");

var locations = new Array("loc0", "loc1", "loc2", "loc3", "loc4");

var years = new Array("date0", "date1", "date2", "date3", "date4" );

var descriptions = new Array("desc0", "des1", "des2", "des3", "des4" )

var images = new Array("../HW-5/images/placeholder-06.png", "../HW-5/images/placeholder-07.png", "../HW-5/images/placeholder-08.png", "../HW-5/images/placeholder-09.png", "../HW-5/images/placeholder-10.png");

class Photo {

    constructor(){

      this.title = title;
      this.author = author;
      this.location = location;
      this.year = year;
      this.description = description;
      //this.image = display_image;

    }

    //method to display Photos
      display(){

        //for(let i = 0; i < images.length; i++){}
        let random_num = Math.floor(Math.random() * images.length);

            this.title = document.getElementById('title').innerHTML = titles[random_num]

            this.author = document.getElementById('author').innerHTML = authors[random_num];
            this.location = document.getElementById('location').innerHTML = locations[random_num];
            this.year = document.getElementById('year').innerHTML = years[random_num];
            this.description = document.getElementById('description').innerHTML = descriptions[random_num];
            this.image = document.getElementById('photo').src = images[random_num];
      }

}

// Create new photo and display it
function new_photo() {

  let new_photo = new Photo();

  new_photo.display();

console.log(new_photo);

}
