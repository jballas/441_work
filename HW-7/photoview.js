// Photoviewer by Julia Ballas

class Photo {

    constructor(){

    //  this.author;
    //  this.location;
      this.image = "<img src='../HW-5/images/placeholder-01.png'> ";

    }

    //method to display Photos
    toString(){
      let str;
      str = this.image;
      return str;
    }


    // method to switch between photos
    /*switch(){

    }

    */
}

// Create new photo and display it
function display() {
  let photo = new Photo();

  document.getElementById('photo').innerHTML = photo.toString();

}

display();
