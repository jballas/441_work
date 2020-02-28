// Photoviewer by Julia Ballas

class Photo {

    constructor(){

    //  this.author;
    //  this.location;
      this.image = ["../HW-5/images/placeholder-02.png", "../HW-5/images/placeholder-02.png", "../HW-5/images/placeholder-03.png"];
      this.random = Math.floor(Math.random() * this.image.length);

    }

    //method to display Photos, randomly
    toString(){
      let str;
      str = this.image[this.random];
      return str;
    }


    // method to switch between photos
    /*switch(){
      this.image[]

    }

    */
}

// Create new photo and display it
function display() {
  let photo = new Photo();

  document.getElementById('photo').src = photo.toString();
console.log(photo);
}

/*
function switch_photo(){
  let photo = new Photo();
  photo.switch();

} */

display();
//switch_photo();
