
# FINAL PROJECT Response
## Date 5-4-20
## MART441.50, Julia Ballas


## Overview

Final project for MART 441.50

## Projects

- Unbearable, a Phaser v3 game

## Assignment Details

Using javascript and Phaser v3, I created an HTML5 webgame.

## Progress

1. Research and Game design
2. Artwork
3. Coding basis gameplay
  - player
  - collisions
  - collectables
4. adding more scenes and objects
5. Add in narrative elements, such as a diary entry
6. Add audio
7. Testing and revisions

## Research and Game Design

I wanted to make a game about picking huckleberries, because every summer in August I love to do this with my family. We spend the afternoon driving up into the mountains. Our favorite location is, of course, a secret. The forest road winds upward, and we hike a little ways and spend a few hours picking huckleberries. Would that make a game? I wondered. I dreamed of it as a cross between *Celeste* and *Animal Crossing*, but with a bittersweet story about a young girl living in the woods and surviving by picking huckleberries. She's cursed, and has been transformed into a bear. The goal of the game is to survive and discover a way up the mountain. It's basically a pickup game, with a little mystery.

## Artwork

Some of the artwork I created myself, some I sourced from free vector sites, and the sprites for the tilemap were designed by *Art by Elthan* from itch.io's free game assets store. The game has an 8bit pixel style. I want the mood to be adventurous, like you're exploring in an RPG. There are cliffs and a river to cross and a mountaintop to reach. *Tiled* is a program that allows you to make maps based on pixel art. It has a graphic interface, but it exports as a json file. You can also attach properties to tiles that will make collisions occur. Once you design your map, you load the json into your Phaser v3 game like so:

```
// uses the JSON data to make a tilemap
var map = this.make.tilemap({ key: 'mtn_map'});
// adds the image of the tileset and attaches it to the JSON data
var tileset = map.addTilesetImage('Forest_Tileset', 'tiles')
```

## Coding

### TileMap and Player
After creating my map, I immediately wanted a player on screen to explore it. So, I started off with a simple phaser program, much like what we created in week 12. I followed a fantastic tutorial on tilemaps within Phaser. (1)

At first I could only get the top half of my map to show. And I wanted the player to appear in the bottom of the map, and then make their way up the mountain road, finding berries and getting stuck at the river. Then using a "ladder" to get past the river. Finally, I got the player to appear where I wanted them.

Then came the struggle with collisions.

My JSON file showed I had certain tiles marked with a collision property, and Phaser v3 is supposed to make collisions easier, but it wasn't working. So I began to research and dig around for examples of tilemaps and tutorials on Tiled.(2)(3) In order to get my collisions to work I moved all the tiles with collisions to a layer above a background layer. Then, when I moved my collider code `  this.physics.add.collider(player, tree_layer);` above my player animations, suddenly it worked. It is still not quite where I want it, since the player walks over the top of the trees, so if I have time I'll update my map yet again, but I have collisions! Now, the player can't get past the water!

### Berry Collection

In order to have a large group of berries appear, I ended up creating a group and then using a variable called  `frameQuantity`. This allowed me to create berries randomly within the game's boundaries.(4) Once they appeared on the screen I made them collectable.

### Connecting Scenes

In order to make my code readable I needed to seperate my files and connect them. Phaser v3 does this with scenes. (5) For some reason I couldn't figure this out, and I spent days looking at different tutorials. Ultimately I discovered I had put a comma in the wrong place. So, with my config fixed, my loading screen would appear, and preload the assets. From there it takes you to the camper, where you'll be able to interact with objects and load the game's forest map I created earlier.

I created a simple title screen. It's like the opening of an animated cartoon, except with it shows all of Rosie the Bear different emotions. This is the code that makes the animation play. `face.anims.play('faces');`

## Camper

I began working on my camper scene today. I added background artwork and then updated it dozens of times to get the sizing correct. I wanted the objects in the camper to be interactive, so they had to be sprites and the most efficent way is to use a spritesheet. But you need to select a specific frame from your sheet and I wasn't sure how to do that when it was not being animated. It turns out, as long as you upload the spritesheet and specify the frame width and height, then when you add it to your scene, you use `setFrame()` to select which frame is used.

Next up, I tried adding some events. Phaser v3 lets you make sprite (objects) interactive. Then you can attach an event to the object such as: `pointerdown`, which is an event when the mouse is clicked, `pointerover` is like a CSS `:hover`. I used `setVisible(false)` to make some invisible text that then reveals when you hover over an object.

By my second week, I feel like I am finally getting the hang reading the documentation pages for Phaser v3.

### Camera

Today's major goal was the fix the camera so that the forest RPG scene would display properly. After researching the camera, I found a tutorial that provided my solution.(6) I needed to set the `world.bounds.width` to the `map.widthInPixels`. This fixed my map, and with the camera following my player, the player shows up exactly where I want. Now, I just need to make some obstacles for my player.

### Enemies

I desperately need enemies. The forest RPG map is deadly boring as a pick up game. And there is no 'end' to this game yet, you just get stuck at the water. But enemies are most important... If I have enemies I'll need a health status that can be effected by their attacks. So, enemy movement is my next challenge. I have 2 enemies, a strange mystical butterfly and bees.

Creating my butterflies took forever for some reason. It's like I forgot how to animate something and how to make a group of things move. Once I resued some of the previous code, I got one butterfly animated, then I created random movement based on a p5.js project(7). I wanted them to have an erratic pattern to their flight and it worked to add `var speed_x = Phaser.Math.Between(-8,4);`. The tricky part was making sure this movement applied to all the children in my butterfly group. The bees I setup to target the player. For now, I only have one swarm of bees, and that's plenty. They're the first thing to attack you when the forest scene begins.

Next up the health meter.

### Health and UI

In order to have a health status I also need to have a UI display. This will show how many berries you pickup and how much health you have left. There are some fancy examples with actual bars, but for now I'm going to use a simple text/number display. To make sure my text is visible I used `.setScrollFactor(0)`, this prevents the object from moving with the camera.

I attempted to create a fancy health bars, but I couldn't get the bar to actually change its length.(8) However, having my health as numbers work, so I'm leaving the numbers. It would be better if there was some indication you were getting hurt, but the audio should help.

Mostly importantly, today I figured out how to move data between scenes. You have to pass the data through using the scene start code. So, in scene 2, when you "die", this code is called. `this.scene.start('Scene1', { berries: berry_inventory});` The data is 'berries' and it keeps track of how many berries you've collected.
Then in Scene 1 there is an `init()` which makes the data from the previous scene available.

```
init(data){
  //console.log('init', data);
  this.berries = data.berries
}
```

This code lets me change things based on how many berries you collected. So, now if you collect anything the diary changes and shows how many you collected. And if you collect more than 2 berries, the ladder is suddenly available.

### Level 2 Using the ladder

My goal is to make the ladder clickable, then you go to the Scene 2 with more of the map suddenly available, because... now you can use the ladder as a bridge over the water. But how do I make the code do this? It would be nice if I could start the player at a different location... even past the water. Then I don't have to make a bridge at all. I'm going to try making the player's x,y location a variable and then pass that data from scene 1 to scene 2.

It worked! I was able to add the player data into the scene, so now when you click on the bucket it loads you in the bottom corner, and when you get access to the ladder it loads you past the water.

### AUDIO

I planned to do the audio last, and now I know exactly why this was a good idea. I have to test play the game constantly, after every update to the code, and if I had to listen to the audio every single time I'd go crazy. Luckily, audio is pretty straightforward. You preload it, add a sound and then play that sound wherever you need it for a sound effect, or as a background loop. I made sure to reduce my file sizes before loading them.

### Feedback

It look a while, but I got some feedback on my game. I was worried they wouldn't be able to find the forest, but they clicked so much on the camper page it loaded for them. Then they got some berries, and realized they had to avoid the bees. They suggested I add a camper to the forest scene, so you can get back to the camper without dying. It's a really good idea, and I'm going to try to impliment that right away.

The other major problem is loading. One of my testers had the game crash on her, and the loading time took 30 seconds or longer inbetween scenes. She suggested adding loading text. We tested it on Firefox and that's where the loading was troublesome, and it wouldn't work at all in Edge. So I need to add delay methods before the scene loads. Her last suggestion was to add more text so when you reach the Forest Ranger, and have collected enough berries, then it feels like the ending to the game. My last tester couldn't even get the game to load at all!

### Time Delays and trying to fix loading issues

It was a little tricky, but I added a time event that works like javascript's `setTimeout()`.
Phaser v3 has a `time.addEvent` that gives you other options, such as looping. This is the code:
`this.time.addEvent({delay: 3000, callback: loading_delay, callbackScope: this, loop: false});`
and its tied to a function I created, which simply loads the text after a 3 second delay.
```
function loading_delay(){
  this.add.text( 175, 50, 'Click to Start Game...', { fontSize: 20, color: '#472f0a' }) ;
}
```
So to deal with my loading problem, I tried a couple of things. I changed my map from a static layer to a dynamic layer, and I added in the preload() function, even though I don't use it in my scenes. I remaped by tilemap, making it slightly smaller, which hopefully reduced the json data size. I cleaned up the code, removing older experiments, such as masking on the health bar image. I tested how long it takes to preload my assets and found out it happens in 2-3 seconds. The testing code came from a tutorial about (11), so that's not the problem. The issues is loading inbetween scenes. Lastly, I added messages about loading into the game.

I used the same time delay code above to delay my the game scene for 1 second. This allowed the game to display some loading text right before it starts actually loading. Hopefully, this will help. Hopefully, the game doesn't freeze when my teacher plays it.

## Conclusion

Having finally reached the end of my project, I am mentally exhausted, yet proud of my accomplishment. I didn't think I would ever make it to the end. But I created a plan, with a firm deadline and then followed along until I had this game. It involved a massive todo list, but by tackling each problem one at a one and slowly moving forward I was able to create something much bigger. This is my first game with multiple scenes and progression. But I wish the gameplay was more exciting, and I wish I could have expanded the story.

I'm feeling somewhat bittersweet about it all, because I wasn't able to fully realize this game. Was it a survival game? Or a point and click adventure? Did it tell an interactive story? I'm not so sure. I learned a lot about making games with this project, from the importance of pre-planning, designing game art, but most importantly was understanding the game's core experience and making obstacles for your player! My next game will be even better.

## References
1) Hadley, West Michael. "Modular Game Worlds in Phaser 3(Tilemaps #1 - static maps)". Medium.com
medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6

2) "Tiled Map Editor Tutorial Series" Games from Scratch.com www.gamefromscratch.com/post/2015/10/14/Tiled-Map-Editor-Tutorial-Series.aspx

3)"Phaser 3 Game Tutorial 10 Tilemaps" jest array. YouTube. www.youtube.com/watch?v=uznkhVMbVr8

4) Phaser Examples: Random Rectangle. Phaser.com phaser.io/examples/v3/view/actions/random-rectangle

5) "Part 2: Phaser Scenes - Getting Started with Phaser 3". Luis Zuno. YouTube. www.youtube.com/watch?v=gFXx7lgxK9A
6) "How to Create a Turn-Basd-RPG in Phaser3 - part 1" GameDevAcademy.com Zenva Pty Ltd. gamedevacademy.org/how-to-create-a-turn-based-rpg-game-in-phaser-3-part-1/
7) P5.js Particles Example https://p5js.org/examples/simulate-particles.html
8) Feronato, Emanuel. "Add a nice Time bar energy mana bar whatever to your HTML5 game using phaser 3 Maskes" www.emanueleferonato.com/2019/04/24/add-a-nice-time-bar-energy-bar-mana-bar-whatever-bar-to-your-html5-games-using-phaser-3-masks/
9) http://phaser.io/examples/v3/view/time/remove-timer-event
10) "Audio- Getting Started with Phaser 3" Luis Zuno Youtube.com www.youtube.com/watch?v=COncYQLGJS8&t=17s
11) Westover, Scott. "Creating a prelading Screen in Phaser 3" GameDevAcademy.com. Zenva Pty Ltd. gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/

## Credits
### Audio
Sneaky Adventure by Kevin MacLeod
Link: https://incompetech.filmmusic.io/song/4383-sneaky-adventure
License: http://creativecommons.org/licenses/by/4.0/

Julia Florida (Barcarolle) by Agustin Pi Barrioers Mangore
Performed by Jorge de la Cruz
CC By-nc 3.0 https://musopen.org/music/13022-julia-florida-barcarolle/

### Artwork
<a href="https://www.vecteezy.com/free-vector/camp-food">Camp Food Vectors by Vecteezy</a>

<a href="https://www.vecteezy.com/free-vector/berry">Berry Vectors by Vecteezy</a>

<a href="https://www.vecteezy.com/vector-art/137848-free-hand-drawn-wild-life-background">Wild Life Background Vectors by Vecteezy</a>

<a href="https://www.vecteezy.com/free-vector/diary">Diary Vectors by Vecteezy</a>

Elthen <a href ="https://elthen.itch.io/2d-pixel-art-forest-tileset
"> created the forest pixel art.</a>

Pipoya <a href="https://pipoya.itch.io/pipoya-free-rpg-character-sprites-nekonin"> designed the bear character sprite and animation. </a>

<a href="https://www.vecteezy.com/free-vector/camper">Classic Camper Vectors by Vecteezy</a>

CC Butterfly Created by Jordan Irwin (AntumDeluge) (https://opengameart.org/content/butterfly)

I used <a href="https://thorbjorn.itch.io/tiled">Tiled to create my RPG map.</a>
