# Week 10 Response
## Date 3-23-20
## MART441.50, Julia Ballas


## Overview

Databases. This week we are collecting information from a datasource and displaying it in a meaningful way using jQuery and AJAX.

## Projects

- Meterorites
- JS Plugin `dots()`

## Process

- simple html
- Coding
  - Add jQuery to show JSON (1)
- Brainstorm Ideas for showing Data meaningfully
- Add CSS style
- JQuery Plug-in

![screenshot of errors](./images/screenshot_error-to-success.png)
I started with a small json file and tried to display it. I ran straight into a 'cross-origin-request error'. Despite the fact I was using Firefox, it wanted my json to be a secure link, so I linked to the http:// at my github page. Then it still didn't work because I'd edited my json file and left out the end of a bracket. So, I moved into debugging for a while. I used the console-log and a debugging code from Jquery's website, and even tried another json file. Finally, I got my data to display. It consisted of [object Object][object Object], which is not meaningful at all.

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

Initially, I could only get a wall of text to appear, but I took our teacher's advise and looked back into previous weeks to find a solution. Week 7 was especially helpful. I created a class named `Rock` to put my data into. Then I created an array named `more_rocks` to push the new data into.

After that small success, I moved on to my css and the jquery plugin.

### Plugin Experiments

My first experiments began with images, such as changing the size. I tried to make something to duplicate my image, but I wasn't having much luck.

So, I took a break and decided to add in a different font and get my meteorite information to look better. I used a font made of dots, and then I tried changing my `border: 1px dotted black` and discovered it is very ugly dotted border.

So, I did some research into changing the dotted border and found out it isn't really possible to change with css.

Ahha, a project for a plugin.
![screenshot of dotted lines](./images/screenshot_dotted.png)

The image above shows the font I wanted to base my project around. The second arrow points to the standard thick dotted border, however you can't change sizing or spacing. Third is a line of dots I created using jquery and css.


## Problems or Issues this week

My dotted border plugin created all kinds of problems, mostly because I had to keep researching every little detail about it.

I found an article on medium.com which gave a solution for using a svg image file for your border.(5) But updating the color is only possible if you go back and change for image, so it is not ideal. Since it is possible to create svg images directly in html, I'm going to try to create a border I can manipulate. Borrowing some svg circle code from W3 schools, I adjusted the size and spacing to look more like a border.(6) Then I used a `for` loop to make it repeat inside the `<div>` tag 50 times.

I made several attempts to have the dot pattern appear only in the border, like a repeating image, but this didn't work out. The `border-image-source` is designed to use an actual image file that you can slice and repeat.(7) I was trying to take one round image that you repeat over and over. Using a repeating background-image also did not work. So I had just left it as 50 images hardcoded and used `overflow: hidden` to hide the excess. It is not a good solution, but I'm at a loss at what else to try, so I'm going to leave it for now.

My plugin simply displays a specific row of black dots. But how do you customize it?  It appears it's possible to add options to your plugin, according to a Jquery tutorial. (8)

## Specific questions/concerns

I wanted to make my border customizable, like below:

```jQuery
//Ultimately this is what I want to code and make it display the image below.
$("div:).dots({
  spacing: 10;
  radius: 5;
  color: 'rgb(244, 178, 75)';
})
```
![screenshot of dotted lines](./images/screenshot_yellow_dot.png)

I have no idea if it's possible as a plugin. I can do it by creating a class and JS objects, but not as a plugin.

## Conclusion

This week was hard because we had two very different tasks to work on and I was torn between which one to focus on. Displaying data in a meaningful way is much harder than I ever realized. I saw wonderful examples on youtube,(https://www.youtube.com/watch?v=qVh2Qw5KSFg) but I could only get the my data to display in a readable format. It is not exciting or meaningful.

The plugin was another difficult task, especially figuring out a useful plugin. I didn't want to make a meaningless update to my css. The idea behind plugins is that you take a complex idea and simpfy it to make it easier to code now, or in other projects. I really liked my idea of making a dotted border you can customize. It's not a very useful plugin as is, but it is a good start.

![screenshot of final site ](./images/screenshot_final.png)

## References
1) https://www.w3schools.com/jquery/ajax_getjson.asp
2) https://api.jquery.com/jQuery.getJSON/
3) https://api.jquery.com/jquery.each/

4) To only display part of a string, I used the `.substr(0,4)`, which I discovered at StackOverFlow: stackoverflow.com/questions/3414916/display-only-10-characters-of-a-long-string

5) https://medium.com/@luclemo/creating-true-dotted-borders-with-css-233f296d8145
6) https://www.w3schools.com/graphics/svg_circle.asp
7) https://www.w3schools.com/cssref/css3_pr_border-image.asp
8) https://learn.jquery.com/plugins/basic-plugin-creation/
