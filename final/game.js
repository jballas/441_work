var config = {
    type: Phaser.AUTO,
    width: 639,
    height: 840,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0 }
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
var health;
var hunger;
var game_over = false;
var menu;
let showDebug = false;
var ripe_berries;
var berry_inventory = 0;
var berry_text;

var cans;
var bucket;
var show_text;

const game = new Phaser.Game(config);
