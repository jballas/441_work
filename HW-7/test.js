// Photoviewer by Julia Ballas

// ARRAY
var photos = new Array();

/*
var titles = new Array("title0", "title1", "title2", "title3", "title4");

var authors = new Array("author0", "author1", "author2", "author3", "author4");

var locations = new Array("loc0", "loc1", "loc2", "loc3", "loc4");

var years = new Array("date0", "date1", "date2", "date3", "date4" );

var descriptions = new Array("desc0", "des1", "des2", "des3", "des4" )

var images = new Array("../HW-5/images/placeholder-06.png", "../HW-5/images/placeholder-07.png", "../HW-5/images/placeholder-08.png", "../HW-5/images/placeholder-09.png", "../HW-5/images/placeholder-10.png");
*/

class Photo {

    constructor(){

      this.title =  new Array("title0", "title1", "title2", "title3", "title4");
      this.author = new Array("author0", "author1", "author2", "author3", "author4");
      this.location = new Array("loc0", "loc1", "loc2", "loc3", "loc4");
      this.year = new Array("date0", "date1", "date2", "date3", "date4" );
      this.description = new Array("desc0", "des1", "des2", "des3", "des4" )
      this.image = new Array("../HW-5/images/placeholder-06.png", "../HW-5/images/placeholder-07.png", "../HW-5/images/placeholder-08.png", "../HW-5/images/placeholder-09.png", "../HW-5/images/placeholder-10.png");

      this.display();
    }

    //method to display Photos
      display(){

        for (let i = 0; i < 5; i++){
          this.title = document.getElementById('title').innerHTML = this.title[i]

          this.author = document.getElementById('author').innerHTML = this.author[i];

          this.location = document.getElementById('location').innerHTML = this.location[i];
          this.year = document.getElementById('year').innerHTML = this.year[i];
          this.description = document.getElementById('description').innerHTML = this.description[i];
          this.image = document.getElementById('photo').src = this.image[i];

          photos.push(new Photo())
        }
      //  let random_num = Math.floor(Math.random() * this.image.length);



      }

}

// Create new photo and display it
function new_photo() {




//  photos.display();

console.log(photos);

}
