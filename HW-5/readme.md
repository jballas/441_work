# Week 5 Response
## Date 2-17-20
## MART441.50, Julia Ballas


## Overview

Week 5 we begin to explore arrays and we'll start making a memory matching game.

## Projects

- test.js
- Memory Game part 1

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

I tried looking at the example for week 5, however it only has 2 images, and I can't quite figure out how that would work for 10 images. I think, maybe it's pushing the images into a new array.

### A shuffling solution, sorta
I don't need random numbers. What I'm actually trying to do is get 5 images to repeat twice. It seems to me that we could just put the duplicate images in my array and then shuffle the order around randomly and place them in that order.

Unfortunately, after some research into randomness and shuffling, I've discovered there is no easy solution for shuffling in javascript. According to *Go Make Things*, shuffling arrays is already available in PHP and Ruby. (https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/) So the only solution I found involves the *Fisher-Yates Shuffle*. The code is shown below.

```js
// Fisher Yates Shuffle
// Source https://bost.ocks.org/mike/shuffle/
// variable names modified by JBallas

function shuffle(array) {
  var change = array.length, first, second; // This creates three variables to use below.

  while (change) { //

    first = Math.floor(Math.random() * change--); // We take a variable and multiple it by another variable, then subtract 1.

    second = array[change]; // the swap begins. One goes into the next.
    array[change] = array[first]; // and the next goes in the first.
    array[first] = second; // and the first goes into the second.
  }

}

shuffle(images); //  this calls the function above and will shuffle around all my images.
```
Except, I'm not implimenting this code, because I can't even really explain how it works. All I understand is it's taking variables and adding randomness and swapping all the numbers around in a highly effective mathematical way. I can't modify the code either, because I basically need the code exactly as it is, in order to shuffle my images. So, rather than plagerize and since I don't have time anymore to ask about this. I'm going to leave it out.

## Specific questions/concerns for next week

I ran out of time this week, so I'm just submitting the homework as is and I'll continue to work on it next week. I'm still puzzled by the `function createRandomImageArray()` from the Week 5 example. Are you randomly pushing images from one Array to another? Is this to keep track of how many images you have?

## Conclusion

Arrays might make it easier to group things, but they also add in so many complications. Thank goodness we learned about debugging this week, because I encountered so many logical errors, where I the console was just blank and I had no idea what I'd done wrong, but at least I knew not to panic.

We're starting to get deeper into the logic and math part of coding. I'm trying to keep an open mind about that, and not feel intimidated by it.
