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
                //debug: true
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
var emote;

var music;
var radio;
var bg_music;
var pickup_sound;
var bad_pickup_sound
var hit_sound;

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


const game = new Phaser.Game(config);
