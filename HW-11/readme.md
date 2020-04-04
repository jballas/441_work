# Homework 11 Response
## Date 4-5-20
## MART441.50, Julia Ballas


## Overview

We continue to study HTML5 and canvas, expanding on the idea of our game from last week.

## Projects

-
-

## Assignment Details

Create another game involving 5 objects that interact with each other and a player that can pickup another three objects to win.

## To Do List

- Create Basic HTML, CSS and script files
- Follow hands on exercises to setup class and objects
- Add 5 squid objects
- 1 object should move by player
  - can you switch between "player"?
- Add collision between 5 objects

- Add new 'food' array
- Make food array collectable
- Code a score that increased when you collect a piece of food.
- separate files for my: JSON, class
  - add getJSON code

  - ADD HTML instructions and narrative
  - change CSS to match game narrative

## Setup and squid objects.
Setting up my new game this week, I followed along with the weekly exercises, and made good progress until I reached the collisions. I created an array called `squid` this week, which I hoped would give my game an ocean theme.

For some reason, I wanted to be able to shift my player object from any object in the array. I used a variable named `player` and assigned the letter "n" to change between the objects.

```JS
if (letter == "d"){
  right(squid[player]);
  movement = "right"
}

// Switch which object is the "player"
if (letter == "n"){
  player += 1;
  if (player >= squid.length){
    player = 0;

  }
```

Initially, this worked! I was even able to restrict all my objects within the canvas, but then it came time for the collisions. I could not get my players to collide. I studied and used some code examples from *Week 13* files, and created 4 different movement functions. `up()` `down()` `left()` `right()`. Then I was able to make a loop to get check if each object had collided with the other, and if the collision was 'true' I had the movement reverse.

However, whenever I switched the player I ran into issues. First, I could no longer move the 'player' around the screen. Then, the collisions no longer worked between all the objects. I continued experimenting and I ended up with some bizarre games.

## Alternative games

In one version, I could only move my objects using the "n" key. The WASD buttons became the direction keys, except they were backwards directions. You pressed "w" (for upward movement) and then "n" and the `squid[player]` moved one space down. Then you change direction and move the next `squid[player]` 1 space. So, it was like a strategy game.

In my second experiment I put my collsions in my `drawSquare()` function. Now the first object in my array `squid[0]` - was also the 'player' -- and it could move around freely with WASD. But when I switched to a different object in the array, such as `squid[1]`, then the square zoomed to the edge of the screen. I have no idea why this was happening, but I find it wonderfully amusing. Collisions work only between the main `squid[0]` and other objects. For instance, `squid[1]` and `squid[2]` did not have collision detection.

I beleive this is due to the fact that my collsion detection is written like this:

```JS
for ( let i = 1; i < squid.length ; i ++){
    test2 = have_collided(squid[player], squid[i]);
       if (test2 == true){
     break; // if the objects overlap, then we break out of the loop.
     }
```
The code above only checks if the "player" has collided with the others. Not if the second object has collided with the third or the second object with the fourth, etc.

It is fascinating. I love seeing my squares fly across the screen! There is a game here somewhere.


## Moving on and collectable food

I needed to have a new array with 'food' in it. So my squids can eat something and increase a score.

This time I created a json file and following the example 13 file, I attempted to make my food appear, and it worked after I made sure my coordinates were within the canvas. I had to make sure my json file was valid using https://jsonlint.com/. Then I used the error/testing code from jquery.com again.(api.jquery.com/jQuery.getJSON/)

Collisions between the player and squid object came next.






## Problems or Issues this week


## Specific questions/concerns for next week

## Conclusion
