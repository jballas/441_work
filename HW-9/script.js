$(document).ready(function(){


  $("#btn_info").click(function(){

  $.getJSON("https://jballas.github.io/441_work/HW-9/data/small.json", function(data){

        $.each(data, function(i, field){

        //  $("#show_information").append("Name: " + field.name + " Mass: " + field.mass + " Year: " + field.year.substr(0,4) + " Geolocation: " + field.geolocation.coordinates + "<br>" );

          $("#name").text("Name: " + field.name);
          $("#mass").text(" Mass: " + field.mass);
          $("#year").text(" Year: " + field.year.substr(0,4));
          $("#geolocation").text(" Geolocation: " + field.geolocation.coordinates);


        });
       });

    });
$("#button2").click(function(){
  $("#show_information").toggle();
})

class Rock {

  constructor(name, mass, year, location){

    this.name = name;
    this.mass = mass;
    this.year = year;
    this.location = location;

    toString(){
      let str;
      str = "Name: " + this.name + " Mass: " + this.mass + " Year: " + this.year.substr(0,4) + " Geolocation: " + this.location + "<br>";
      return str;
    }

    get details(){
      return "Name: " + this.name + " Mass: " + this.mass + " Year: " + this.year.substr(0,4) + " Geolocation: " + this.location + "<br>";
    }
  }
}




})
