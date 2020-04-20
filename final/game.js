// Setup game details
var config = {
    type: Phaser.AUTO,
    width: 1125,
    height: 2436,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0,
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// GLOBAL VARIABLES
var player;
var berries;
var cursors;
var health;
var hunger;
var game_over = false;
var menu;

var game = new Phaser.Game(config);

function preload(){
  this.load.image('bus', 'assets/bus_backgrounds.png');
  this.load.tilemap('mtn', 'assets/mtn_map.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.image('forest', 'Forest_Tileset.png');
  this.load.spritesheet('rosie', 'assets/rosie.png', { frameWidth: 32, frameHeight: 32, endFrame: 11});
}

function create() {
  this.map = this.add.tilemap('mtn', 32, 32, 36, 77);
   this.map.createLayer("background").resizeWorld();
  this.map.createLayer('trees');

  this.game.camera.x = this.map.layers[0].widthInPixels / 2;

}

function update(){

}
