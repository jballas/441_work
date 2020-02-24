# Week 6 Response
## Date 2-23-20
## MART441.50, Julia Ballas


## Overview

This week we explored Local Storage and began to look into JSON, JavaScript Object Notation.

## Projects

- Memory Game completed

## Assignment Details

Finish your Memory Game and use local storage to display player info and the score.

## Process

- HTML/CSS
  - Adding in Player details using `<input>` tags
  - Fix CSS
- Fix JS from Week 5 to make the game images display randomly.
- New JS for Week 6 requirements
  -  ADD JSON object
  -  create Page 2 HTML
  -  JS to make game playable, ie flip images
  -  Add 3rd html page
  -  Add code to track player wins
  -  Make sure everything loads correctly on the score page.


 Although I know HTML and CSS, I don't have it memorized, so every week I should test myself by trying to create an HTML document from scratch. Instead, I copy and pasted Week 5 and grab for my notes on how to create forms and input fields, using the `<fieldset>` and `<labels>`.

It sounds like we're going to connect 3 pages. The Player enters their details, they play the game and then in goes to a third page to display them.

I'm not exactly sure why we have to make 3 pages, when you could have the player's information on the same page as the game, but maybe it is so we could understand more about local storage. You have to connect the each page with the final score page using the same JSON. The tricky part came when I had to send all the information to last page. For a while the names didn't show up, but the score did. Then after studying our sample it made sense, you have to send the information to page 2, and then again update it and send it to page 3. Otherwise, it doesn't transfer over to the third page.

## Tracking the SCORE

In order to display the score at the end, you have to track it. I did this by creating a variable that will increase in count whenever the player clicks on the second image. I wasn't quite sure where to put it in the `flip_card()` function, but I settled on the first if statement, which keeps track if a player has picked a second card. I used a `console.log(score)` to test it.

However, the other tricky part was figuring out how to know when they player matched all the cards. I made a couple of unsuccessful attempts. First, I tried counting the clicks on the cards, but this was not reliable. My new_array already had ten images in it when I start my game, so I can't track the images. So, instead I made an array called `pair[]`.

Successful Code
```JS
pair.push(second_number);
console.log(pair);

if (pair.length ==5 ){
  show_score();
```

This array takes in a variable. The numbers assigned to the array don't matter, instead, I'm keeping track of the length of the array and once I have 5 pairs, the score page appears!

## Problems or Issues this week

In Week 5 I created my memory game to display images inside of various `<div>` tags. Then I could access each `<div>` tag by its Id. Unfortunately, that was causing problems when I tried to flip the cards back to the blank image. I could put a blank image back but then the random image previously used didn't appear. I'm sure there is a way past this. I can't figure it out.

Instead, I considered maybe using some boolean logic, so if the image is clicked it is considered true and displays the random image, but then if it doesn't match it is considered falase, which makes it blank again. Maybe I'd run into the same problem as before, maybe not. However, I get the impression we're approaching this memory game using different logic, which means we need to have our image sources in the arrays and we'll flip images around using JavaScript's `setTimeout`. So, I rearranged all my code again, to make images display from the `.src`, rather than `.innerHTML`.

Now that I'm finished I'm wondering if I really did have to switch my image code around, or if I was just not understanding how to make it work. I have no idea.

## Conclusion

I'm a bit frustrated this week because I felt like I had to follow one path. If there are other solutions to making the memory game, I don't know how. So, instead I had to make my game exactly like the sample. I did my best to comment, but it's such a close copy. I suppose it comes down to inexperience and not understanding what works and what doesn't, and what kind of `if statements` I need to make stuff work.

Can I understand how it works? Yes.

Could I have made this game by myself? Nope.
