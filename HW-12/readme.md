# Week 13 Response
## Date 4-11-20
## MART441.50, Julia Ballas


## Overview

This week was an Introduction to Phaser 3.0

## Projects

- Pickup Game

## Assignment Details

Modify the phaser tutorial from the weekly lesson.

## Weekly Report

This week we focus on the javascript library known as Phaser, version 3.0. It aids in creating HTML5 based webgames. We followed a tutorial in class in order to create the basic game elements, movement and animation. Now we have to figure out how to modify the code to change up the gameplay.

### Jump
Changing the jump method required changing the `function update()`. Phaser works by preloading elements of the game, then creating those elements and lastly updating them as the game is played.

In order to make sure I was updating with the correct terminology, I began by researching Phaser's documentation, but their search method wasn't giving me any answers. Instead, I googled 'createCursorKeys() phaser 3' and got my information.

Player movement used a variable called `cursors`, which is assigned keyboard cursors. Instead of referncing the `.up` key, we had make it `cusors.space.isDown`.

### Gravity

The next task was changing gravity. I began by reviewing the code to find the star's gravity inside the `function create()`. Initially, we had gravity, or setBounce at 0.4-0.8. I compared this to the bombs, which are set to bounce at 1. I figured lowering the bounce would make them heavity, increasing the bounce would make them lighter. Given the two options, I picked lighter and made an extreme adjustment. `Phaser.Math.FloatBetween(1.5-5)`


## Problems or Issues this week

## Specific questions/concerns for next week
