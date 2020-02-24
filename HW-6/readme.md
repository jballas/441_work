# Week 6 Response
## Date
## MART441.50, Julia Ballas


## Overview

This week we explored Local Storage and began to look into JSON.

## Projects

- Memory Game complete

## Assignment Details

Finish Memory Game, using local storage to display player info and the score.

## Process

-HTML/CSS
  - Adding in Player form `<input>`
  - Fixing CSS
- Fix JS from Week 5 to make the game images display randomly.
- New JS for Week 6 requirements
  -  ADD JSON object
  -  Page 2 HTML
  -  JS to make game playable
  -  Add 3rd html page
  -  Add functions to track player wins

###
 Although I know HTML and CSS, I don't have it memorized, so every week I should test myself by trying to create an HTML document from scratch. Instead, I copy and pasted Week 5 and grab for my notes on how to create forms and input fields and I reminded myself how HTML forms work, with `<fieldset>` and `<labels>`.

Sounds like we're going to connect 3 pages. The Player enters their details, they play the game and then in goes to a third page to display them.

I'm not exactly sure why 3 pages, when you can have the player's information on the same page as the game, but maybe it is so we can understand that local storage isn't limited. You can connect Player page, with the score page, and the game page with the score page. But in order to make this work, you have to call the function onload for both pages. Otherwise, it doesn't store any information.

## Tracking the SCORE

In order to display the score at the end, you have to track it. I did this by creating a variable that will increase in count whenever the player clicks on the second image. This probably will work. But the trickier part is how to know when they player has matched all the cards.

I can't do this by counting how many clicks. The new_array already has ten images in it by the time I start the game, so I can't track images. So, instead I made an array.
```JS
pair.push(second_number);
console.log(pair);

if (pair.length ==5 ){
  show_score();
```

This array takes in a variable. What that variable is doesn't matter, instead, I'm tracking the length of the array and once I have 5 pairs, the score page appears!



## Problems or Issues this week

In Week 5 I created my memory game to display images inside of various `<div>`. Then I could access each `<div>` by its Id. Unfortunately, that is causing problems in trying to flip the cards back to blank. If I put my blank image back inside the `<div>` then the random image previously used doesn't appear. I'm sure there is a way past this, maybe involving a boolean logic, so if the image is clicked it is considered true and displays the random image, but then if it doesn't match, it is blank again. Maybe I'd run into the same problem as before, maybe not. However, we're approaching this memory game using different logic, using image sources in arrays and flipping images around using the `setTimeout` in JS. So, I have to rearrange all my code again, to make images display from the .src, rather than .innerHTML.

I'm a bit frustrated this week because I can't try anything else. If there are other solutions to making the memory game, I don't know how. So, I'm forced to base my game and homework, exactly around the sample. I can't deviate and it doesn't feel like I'm working the code on my own, just following directions. I suppose it comes down to inexperience and now understanding what works and what doesn't, and what kind of `if statements` I need to make it work.

Can I understand how it works? Yes.
Could I have make it myself? Nope.

## Conclusion
