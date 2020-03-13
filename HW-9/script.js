$(document).ready(function(){

var rock = new Array();

  $.getJSON("https://jballas.github.io/441_work/HW-9/data/small.json", function(data){

        $.each(data, function(i, field){

        //  $("#show_information").append("Name: " + field.name + " Mass: " + field.mass + " Year: " + field.year.substr(0,4) + " Geolocation: " + field.geolocation.coordinates + "<br>" );

        var names = new Rock(field.name, field.mass, field.year, field.geolocation.coordinates);

        rock.push(names);
      });
    });


  $("#btn_info").click(function(){


    /*         $("#show_information").html(rock[0].toString());
          console.log(rock.length);



       $("#name").text("Name: " + field.name);
          $("#mass").text(" Mass: " + field.mass);
          $("#year").text(" Year: " + field.year.substr(0,4));
          $("#geolocation").text(" Geolocation: " + field.geolocation.coordinates);
*/

  let random_num = Math.floor(Math.random() * rock.length);

        for(i = 0; i < rock.length; i ++){
          console.log(rock.length);
          $("#name").text("Name: " + rock[random_num].name);
          $("#mass").text(" Mass: " + rock[random_num].mass);
          $("#year").text(" Year: " + rock[random_num].year.substr(0,4));
          $("#geolocation").text(" Geolocation: " + rock[random_num].location);
        }
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
