# Week 7 Response
## Date
## MART441.50, Julia Ballas


## Overview

We begin our study of Javascript Objects this week, studying classes, constructors.

## Projects

- Photoviewer
-

## Assignment Details

Create a class and photoviewer to display and switch between photos.

## Process

1. Basic HTMl
  - Use placeholder images for now.
2. Coding
  - Create class
  - constructors
  - methods
  -
3. CSS
   - Add images
   - Menu
   - SVG
   - clip-path

### Class and Object study

I'm switching up my process this week, I want to focus first on coding the basics, then try to expand upon the design upon that with some css.


Beginning with simply displaying one image, it is amazing to me how end one simple task goes completely wrong when you don't connect the dots. I thought I had everything (I did) but I wasn't linking my script file correctly, so nothing was displaying. Anyway, it is fixed and I have a new object that displays an image. This could also be accomplished by simply displaying the image in HTML, but that's not the point. We're trying to make random images appear, and the only way to do that is with js. So, like last week, I'm going to add my image into the HTML and then change the src with js. I don't know why I find this awkward compared to just adding the entire image.

Back at it.

### Photoviewer Version 1
My first instinct was to create arrays with all the details. This meant 5 different arrays that I would access with my object.

It meant I was only creating one object over and over, with different random elements.

That wasn't not the goal of our project. We needed to create 5 different objects and push them into an array.

Strangely, whenever I tackle the homework wrong, I have such a hard time forgetting my old code. Next time I am going to start a new file, so that I am looking at a blank file.

### Photoviewer Version 2

I watched the homework example to get an idea of which direction I needed to go. I really needed to follow the examples better, and this time I created a `toString` and a method to display the image.

I got one image and details to display easily, and I could push my new objects into an array, but I couldn't seem to display from that array.

I tied all my display functions to the button, but this pushed the same objects into my array everytime. So I quickly got confused.

Luckily, it was an easy solution. I needed to call my display fuction once inside the html page, like so `<body onload="display();">` This solved my problem. I am trying to only watch the example videos when I get stuck. This worked pretty well. I think I have my code down now, I just need to add more objects, and now use placeholder images.

## Problems or Issues this week

There must be an easily way to create objects and push them into an array.

The random images often don't change. So, I'm sure we could add if statements to make sure it changese each time. 


## Specific questions/concerns for next week

## Conclusion
