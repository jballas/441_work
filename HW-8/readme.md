# Week 8 Response
## Date
## MART441.50, Julia Ballas


## Overview
This week begins our exploration into the javascript library known as jQuery. Using jQuery will simply our code and allow us to experiment with animation.

## Projects

- jQuery art project: silent movie
-

## Assignment Details

Create a jQuery based art project, with shapes, words, images that are animated and fade in and out.

## Process

- HTML and CSS
  - create main page with border and play movie button
- Coding
  - add jquery to make the star flicker


### Goal Twinkling stars

  Getting my CSS and html layout always takes longer than I expect, but once I had it, I got my first start to fade in and out. It doens't do this continuously though. I want the efffect to keep happening until the button is pushed.

I can make a loop that will continue to made the star `fadeIn()` and `fadeOut()` for 5 times, and then it will `fadeToggle()` when you push the button. But that's not what I want. I want it to keep flickering, until you push the button.


  So, I'm going to try a while statement.

The logic: The star is flickering while we wait, and then fades out when the button is pushed.

I think that works. It didn't work, it just go stuck... Instead I have a row of stars that fade in and out like a wave.

Mostly, I think I need to work on my logic.

I tried using the `mouseenter()`, but that creaed a weird bug, that would allow stars to reappear if the mouse enters during the movie. I still want to see a repeating loop. At the very least I can have a loop that plays it 5 times. It should have a delay between loops though... Another tricky problem.


### Images
I added basic text into my 'movie'
Adding in an image gave me trouble. I found a solution at stack overflow. By using jquery's .attr, and accessing the source, I can just change an empty image. ( https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery)

I have a crazy animated images appearing and movie and text appearing. Now I need to have an array with images to rotate betwen them. I randomized the images, but it only picks one random number from the array. So all the images come out the same, even though it is a random image. Huh...


## Problems or Issues this week

## Specific questions/concerns for next week

## Conclusion
