
# FINAL PROJECT Response
## Date
## MART441.50, Julia Ballas


## Overview

Final project for MART 441.50

## Projects

- phaser game
-

## Assignment Details

Using javascript and Phaser 3, I created an HTML5 webgame.

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

In order to have a large group of berries appear, I ended up using a `frameQuantity`, then I had them appear randomly within the game's boundaries by creating a rectangle.(4) Once they appeared on the screen I made them collectable. I still need to tweak this, since the berries appear on top of water, but I should be able to create an `if statement` to prevent that.

### Connecting Scenes

In order to make my code flow better I needed to have multiple files that connect. Phaser 3 does this with scenes and connecting those scenes. (5) For some reason I couldn't figure this out, and I spent hours looking at different tutorials, ultimately I discovered I had put a comma in the wrong place. So, with my config fixed, my loading screen would appear, and preload the assets.

I still have errors, of course, when it tries to load the game. The camera size and posistion is different in my forest map, compared to my title. So, I have to figure out how to change the camera for a scene only.

There is now new artwork for my title/loading page. It's like the opening of an animated cartoon, except with Rosie the Bear emotes. This is the code that makes it play. `face.anims.play('faces');`


## Camper

I began my camper scene today. I added artwork and because I didn't know what I was doing I kept having to add more artwork and update it dozens of times to get the sizing correct. I wanted them to be interactive, so they had to be sprites. I figured out how to add and image or sprite from a sprite sheet. As long as you upload the spritesheet and specify the frame width and height, then when you add it to your scene, tou use `setFrame()` to select which frame is used.

Next up I tried adding some events. Phaser 3 lets you make sprite (objects) interactive. Then you can attach an event to the object such as: `pointerdown` is an event when the mouse is clicked, `pointerover` is like a hover feature. I used `setVisible(false)` to make some invisible text that reveals when you hover over an object. It would be better if I could have an `if/else` statement though.

By my second week, I feel like I am finally getting the hang of the documentation for Phaser 3.

### Camera
Today's major goal was the fix the camera so that the forest RPG scene would display properly. After researching the camera, I found a tutorial that provided my solution.(6) I needed to set the `world.bounds.width` to the `map.widthInPixels`. This fixed my map, and with the camera following my player, the player shows up exactly where I want it. Now, I have my locations I just need to make a game from this.

### Enemies

I desperately need enemies. The forest RPG game is so deadly boring as a pick up game. The collisions are still weird, but I'm leaving them. And there is no 'end', you just get stuck at the water. But enemies, or conflict. How do I add in enemies? I'll need a health/hunger status that will be effected by the enemies attacking you. So, creating enemy movement is my next challenge. I have 2 enemies, a strange mystic butterfly and bees. The butterflies could temporarily reverse your movement, while bees can hurt you.
Definetely need to make the health meter next.


To do:
Make a UI to show berry count/health , AND figure out how to take the berry count home and add text to diary.

- Figure out how to get Rosie home after she reaches the impassable water. I.E Ends the level
- How to tell the player how to move
- create a hunger bar / Health bar
- add emotions to encounters in forest, this could be part of the UI.

- Put a Ladder somewhere and make it available for pickup.


if I have time
- update map to make a top layer above the player!

- Prevent berries from appearing on top of the water

- make the collect function more generic, so I can collect one or two things inside my inventory, such as a ladder or a bucket. But not both. Because this is not a magic unlimited inventory pocket?

DONE
- add more text interaction
- Find enemies artwork and add to scene 2
- Create title page artwork
- Start page goes to the bus, and the bus connects forest
- create or find art
    - Ladder
    - bucket
    - Toilet paper
- create bus interior scene and add items to interact with
      - food cans
      - bucket
- Fix CAMERA in forest
- Add a scene switch( or scene2 start), so that you can click on the bucket it goes to the forest RPG setting to collect  berries.



## Conclusion

## References
1) Hadley, West Michael. "Modular Game Worlds in Phaser 3(Tilemaps #1 - static maps)". Medium.com
medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6

2) "Tiled Map Editor Tutorial Series" Games from Scratch.com www.gamefromscratch.com/post/2015/10/14/Tiled-Map-Editor-Tutorial-Series.aspx

3)"Phaser 3 Game Tutorial 10 Tilemaps" jest array. YouTube. www.youtube.com/watch?v=uznkhVMbVr8

4) Phaser Examples: Random Rectangle. Phaser.com phaser.io/examples/v3/view/actions/random-rectangle

5) "Part 2: Phaser Scenes - Getting Started with Phaser 3". Luis Zuno. YouTube. www.youtube.com/watch?v=gFXx7lgxK9A
6)"How to Create a Turn-Basd-RPG in Phaser3 - part 1" GameDev Academy. Zenva. gamedevacademy.org/how-to-create-a-turn-based-rpg-game-in-phaser-3-part-1/

## Credits
### Audio
Sneaky Adventure by Kevin MacLeod
Link: https://incompetech.filmmusic.io/song/4383-sneaky-adventure
License: http://creativecommons.org/licenses/by/4.0/

### Artwork
<a href="https://www.vecteezy.com/free-vector/camp-food">Camp Food Vectors by Vecteezy</a>

<a href="https://www.vecteezy.com/free-vector/berry">Berry Vectors by Vecteezy</a>

<a href="https://www.vecteezy.com/vector-art/137848-free-hand-drawn-wild-life-background">Wild Life Background Vectors by Vecteezy</a>

<a href="https://www.vecteezy.com/free-vector/diary">Diary Vectors by Vecteezy</a>

Elthen <a href ="https://elthen.itch.io/2d-pixel-art-forest-tileset
"> created the forest pixel art.</a>

Pipoya <a href="https://pipoya.itch.io/pipoya-free-rpg-character-sprites-nekonin"> designed the bear character sprite and animation. </a>

Deer by Calciumtrice, usable under Creative Commons Attribution 3.0 license. (https://opengameart.org/content/deer)
CC Butterfly Created by Jordan Irwin (AntumDeluge) (https://opengameart.org/content/butterfly)
wolf by Segel2D (https://opengameart.org/content/wolf-game-character)

I used <a href="https://thorbjorn.itch.io/tiled">Tiled to create my RPG map.</a>
