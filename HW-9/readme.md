# Week 10 Response
## Date 3-23-20
## MART441.50, Julia Ballas


## Overview

Databases. This week we are collecting information from a datasource and displaying it in a meaningful way using jQuery and AJAX.

## Projects

- Meterorites
- JS Plugin

## Process

- simple html
- Coding
  - Add jQuery to show JSON
- Brainstorm Ideas for showing Data meaningfully/JQuery plug-in ideas
- Add CSS style
- JQuery Plug-in

![screenshot of errors](./images/screenshot_error-to-success.png)
I started with a small json file and tried to display it. I ran straight into a 'cross-origin-request error'. Despite the fact I was using Firefox, it wanted needed my json to be a secure link, so I link to a http: at my github page. Then it still didn't work because I'd edited my json file and left out the end of a bracket. So, after struggling and debugging for a while, I used the console-log and a debugging code from Jquery's website, and used another json file, then I finally got my data to display. It  consisted of [object Object][object Object], which is not meaningful at all.

Below is my first attempt to make the data appear, based on studying jQuery's `getJSON()` (2) and `.each()` methods (3). I totally just guessed if I could use `field.name` to make the meteorite name appear, and was surprised it worked.
```javascript

  $("#show_information").append("Name: " + field.name + " Mass: " + field.mass + " Year: " + field.year.substr(0,4) + " Geolocation: " + field.geolocation.coordinates + "<br>" );
```

My second attempt to show information, which is almost identical to the first, just using seperate div files.
``` javascript
       $("#name").text("Name: " + field.name);
          $("#mass").text(" Mass: " + field.mass);
          $("#year").text(" Year: " + field.year.substr(0,4));
          $("#geolocation").text(" Geolocation: " + field.geolocation.coordinates);
*/
```
![screenshot of too much data](./images/screenshot_text_wall.png)

Initially, I could only get a wall of text to appear, but as took our teacher's advise and looked back into previous weeks to find a solution. Week 7 was especially helpful. I created a class named `Rock` to put my data into. Then I created an array named `more_rocks` to push the new data into. Then I ran into the same problem where I was pushing too much data into my array, so I had to rearrange the code so that the button will only dispaly from my array.

After that small success, I moved on to my css and figureing out a jquery plugin.


References
1) https://www.w3schools.com/jquery/ajax_getjson.asp
2) https://api.jquery.com/jQuery.getJSON/
3) https://api.jquery.com/jquery.each/

4) To only display part of a string, I used the `.substr(0,4)`, which I discovered at StackOverFlow: stackoverflow.com/questions/3414916/display-only-10-characters-of-a-long-string

## Problems or Issues this week

## Specific questions/concerns for next week

## Conclusion
