var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 832,
    scale: {
        mode: Phaser.Scale.FIT, // This makes the game mobile responsive
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    audio: {
       disableWebAudio: true
     },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0 }
              //  debug: true
        }
      },
    scene: [
          Preload,
          Scene1,
          Scene2
          ]

};

// GLOBAL VARIABLES
var player;
var cursors;
var game_over = false;
var ripe_berries;
var berry_inventory = 0;
var health = 400;
var health_text;
var berry_text;
var healthbar;
var energybar;
var energymask;
//var hunger;

var cans;
var peppers;
var toilet_paper;
var bucket;
var diary;
var ladder;
var camper;

var cans_text;
var peppers_text;
var toilet_paper_text;
var bucket_text;
var diary_text;
var ladder_text;

var butterfly;
var bees;
var ranger;

// Didn't work like I wanted it to.
var bus_text = {cans: "Should I eat something?", peppers: "Papa's favorite", toilet_paper: "I don't need to go", bucket: "Should I go pick some berries?", diary: "Read something?"};


const game = new Phaser.Game(config);
