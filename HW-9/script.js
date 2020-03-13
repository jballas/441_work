$(document).ready(function(){

var more_rocks = new Array();

// When the document is ready, this function is called which gathers our data from the json file.
//Then a new object is created with that newly called data.

  $.getJSON("https://jballas.github.io/441_work/HW-9/data/small.json", function(data){

        $.each(data, function(i, field){

        var names = new Rock(field.name, field.mass, field.year, field.geolocation.coordinates);

        more_rocks.push(names);
      });
    });

// When you click the button it selects a random num and pulls the information from the array we create above.
  $("#btn_info").click(function(){

  let random_num = Math.floor(Math.random() * more_rocks.length);

          console.log(more_rocks.length);
          $("#name").text("Name: " + more_rocks[random_num].name);
          $("#mass").text(" Mass: " + more_rocks[random_num].mass);
          $("#year").text(" Year: " + more_rocks[random_num].year.substr(0,4));
          $("#geolocation").text(" Geolocation: " + more_rocks[random_num].location);

    });

    $("#button2").click(function(){
      $("#show_information").toggle();
    })
})



// I made this constructor to push my data into an array
class Rock {

  constructor(name, mass, year, location){

    this.name = name;
    this.mass = mass;
    this.year = year;
    this.location = location;
  }
    toString(){
      let str;
      str = "Name: " + this.name + " Mass: " + this.mass + " Year: " + this.year.substr(0,4) + " Geolocation: " + this.location + "<br>";
      return str;
    }

    get details(){
      return "Name: " + this.name + " Mass: " + this.mass + " Year: " + this.year + " Geolocation: " + this.location + "<br>";
    }
}
