# Week 5 Response
## Date
## MART441.50, Julia Ballas


## Overview

Week 5 we begin to explore arrays and we'll be making a memory matching game.

## Projects

- Memory Game part 1
-

## Assignment Details

Setup 10 blank images and figure out how to flip them over to show the random real images, using arrays, and loops and random.

## Process

1. Artwork
2. Html/css
3. Coding


### Goal 1 How do you make an image Clickable?
![clickable images](./images/screenshot_clickable.png)
Google search yielded a couple of options:
Make a button with a background image. Or you could use the `<img>` tag and attach an onclick event to it. (https://stackoverflow.com/questions/8542083/inserting-a-clickable-image)

I added some css to have a `:hover` effect, to show when you're over the image. Then I fixed my syntax adding the `onclick` event, thanks to W3Schools (https://www.w3schools.com/jsref/event_onclick.asp)

### Goal 2 make arrays with images

Next I tackled the array. How do I fill the array with ten of these blank images? I used a for loop inside the array. Then I made a array to show the images images.

![two arrays with images and blank cards](./images/screenshot_arrays.png)
Success! The code is a little messy, but I have two arrays. One for images and one for blanks. For the blanks I added 2 loops. One to push the same image to the array and another to display all items in the array.

### Goal 3 Make images from array clickable

Now I just need to combine the clickable part with my arrays. I used IDs in my images, and if I associate them with an div in the HTML. That may not be the best option, but I can't think of how else to add in the IDs I need to switch things out.

## Problems or Issues this week

I feel like I have pieces, but they don't connect.

I have functions that create 10 blanks, and if you click on them random images appear, but you can't click on them to make the blanks reappear, and more importantly I can't figure out how to make sure an image doesn't appear twice.

I'm going to dive into the example for week 5, because I think that will give me the answer. Well, it sort of helps and sorta doesn't. The example only has 2 images, and I think its pushing the images into a new array.

But, what I'm trying to do is get a random number 1-5, but also repeat that number. It seems to me that we could just put the image in my array twice and then shuffle the order around randomly and place them.

There is no easy solution for shuffling in javascript. There is a fancy math solution involving the Fisher-Yates Shuffle. I can just barely understand what it is doing. Shuffling numbers.

Source https://bost.ocks.org/mike/shuffle/
```js
// Source https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
```

Apparently, shuffling arrays is already available in PHP and Ruby. (https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/)



## Specific questions/concerns for next week

## Conclusion
