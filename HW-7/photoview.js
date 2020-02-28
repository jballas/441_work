// Photoviewer by Julia Ballas

class Photo {

    constructor(){

    //  this.author;
    //  this.location;
      this.image = "../HW-5/images/placeholder-02.png";

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

  document.getElementById('photo').src = photo.toString();
console.log(photo);
}

display();
