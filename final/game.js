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

const game = new Phaser.Game(config);

function preload(){
  //this.load.image('bus', 'assets/bus_background.png');
  this.load.image('tiles', 'assets/Forest_Tileset.png');
  this.load.tilemapTiledJSON('mtn_map', 'assets/mtn_map.json');
  this.load.spritesheet('rosie', 'assets/rosie.png', { frameWidth: 32, frameHeight: 32, endFrame: 11});
}

function create() {
  // displays the tilemap from the tileset
  var map = this.make.tilemap({ key: 'mtn_map', tileWidth: 32, tileHeight: 32});
  var tiles = map.addTilesetImage('Forest_Tileset', 'tiles')

  // my tilemap has 2 layers, these are both static images
  var bg_layer = map.createStaticLayer("background", tiles, 0,0);
  var tree_layer = map.createStaticLayer("trees", tiles, 0,0);

  // Creates Collisions with any tile that has been marked
  bg_layer.setCollisionByProperty({collision: true});

// displays player sprite

}

function update(){

}
