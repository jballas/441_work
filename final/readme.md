
# FINAL PROJECT Response
## Date
## MART441.50, Julia Ballas


## Overview

Final project for MART 441.50

## Projects

- phaser game
-

## Assignment Details

Using javascript, jQuery and Phaser 3, I created an HTML5 webgame.

## Progress

1. Research and Game design
2. Artwork
3. Coding basis gameplay
4. adding more gameplay elements
5. Add audio
6. Add in narrative elements, such as a diary
7. Testing and revisions

## Research and Game Design

The idea behind my game is a love of picking huckleberries in the summer with my family. We spend the afternoon driving up into the mountains, our favorite location is of course a secret. The forest road winds upward, and we hike a little and spend a few hours picking huckleberries. Would that make a game? I wondered. I wanted this to be a cross between Celeste and Animal Crossing, but with a bittersweet story about a young girl living in the woods and trying to survive by picking huckleberries. She's cursed, and has been transformed into a bear. The goal of the game is to survive and discover a way up the mountain, but also to solve the mystery of her curse.

## Artwork

Some of the artwork I created myself, some of it I sourced from free vector sites, and the tilemap was designed by Art by Elthan from itch.io's free game assets store. The mood needs to capture the adventurous spirit of the game, since you'll be climbing a mountain, on an RPG like map. There's cliffs and a river to cross and a mountaintop to reach. *Tiled* is a program that allows you to make maps based on pixel art. It is a visual program but it exports as a json file. You can also attach properties that will make collisions occur with certain tiles.

## Coding

### TileMap and Player
After creating my map, I wanted to get it up on screen. So, I started off with a simple phaser program, much like what we created in week 12. Michael West Hadley has a fantastic tutorial on tilemaps within Phaser and with that as my guide, I set about getting my map to show. (1)

It shows only the top section of my map, so I have some camera a position. I want the player to appear in the bottom of the map, and then make their way up the mountain road, finding berries and getting stuck at the river. Then using a "ladder" to get past the river.

However, the collisions don't work, even though the JSON file shows I have certain tiles marked with a collision property. Phaser was supposed to make collisions easier, but I guess it won't ever by that easy. So I began to research and dig around for examples of tilemaps and tutorials on Tiled.(2)(3) In order to get my collisions to work I fixed by json file, moving all the collisions to one layer. Then, when I moved my collider code `  this.physics.add.collider(player, tree_layer);` above my player animations, suddenly it worked. It is still not quite where I want it, since the player walks over the top of the trees, so I'll have to update my map yet again, but I have collisions! Now, the player can't get past the water!

### Berry Collection

### Ladder

To do:
update map to make a toplayer above the player! Then I can also hide a ladder somewhere
create berries to pickup and make them collectable



## Conclusion

## References
1) Hadley, West Michael. "Modular Game Worlds in Phaser 3(Tilemaps #1 - static maps)". Medium.com
medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6

2) "Tiled Map Editor Tutorial Series" Games from Scratch.com www.gamefromscratch.com/post/2015/10/14/Tiled-Map-Editor-Tutorial-Series.aspx

3)"Phaser 3 Game Tutorial 10 Tilemaps" jest array. YouTube.com. www.youtube.com/watch?v=uznkhVMbVr8


## credits
Sneaky Adventure by Kevin MacLeod
Link: https://incompetech.filmmusic.io/song/4383-sneaky-adventure
License: http://creativecommons.org/licenses/by/4.0/

<a href="https://www.vecteezy.com/free-vector/camp-food">Camp Food Vectors by Vecteezy</a>

https://www.patreon.com/elthen
https://elthen.itch.io/2d-pixel-art-forest-tileset

https://thorbjorn.itch.io/tiled
