// Setup game details
var config = {
    type: Phaser.AUTO,
    width: 1152,
    height: 2496,
    parent: "game-container",
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0 }
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
let showDebug = false;

const game = new Phaser.Game(config);

function preload(){
  //this.load.image('bus', 'assets/bus_background.png');
  this.load.image('tiles', 'assets/Forest_Tileset.png');
  this.load.tilemapTiledJSON('mtn_map', 'assets/mtn_map.json');
  this.load.spritesheet('rosie', 'assets/rosie.png', { frameWidth: 32, frameHeight: 32, endFrame: 11});
  this.load.spritesheet('food', 'assets/game-icons.png', {frameWidth: 32, frameHeight: 32, endFrame: 8});
}

function create() {

  // uses the JSON data to make a tilemap
  var map = this.make.tilemap({ key: 'mtn_map'});
  // adds the image of the tileset and attaches it to the JSON data
  var tileset = map.addTilesetImage('Forest_Tileset', 'tiles')

  // my tilemap has 2 layers, these are both static images
  var bg_layer = map.createStaticLayer("background", tileset, 0,0);
  var tree_layer = map.createStaticLayer("trees", tileset, 0,0);

  // Creates Collisions with any tile that has been marked collides
 tree_layer.setCollisionByProperty({collides: true});


// displays player sprite
player = this.physics.add.sprite(50,2400, 'rosie');

// Keeps player within world boundary
  player.setCollideWorldBounds(true);
  // check if player and objects have collided. IT WORKS! I have no idea why
  this.physics.add.collider(player, tree_layer);

// Player animations
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('rosie', { start: 3, end: 5 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'rosie', frame: 1 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('rosie', { start: 6, end: 8 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('rosie', { start: 9, end: 11 }),
    frameRate: 10,
    repeat: -1
});
this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('rosie', { start: 0, end: 2 }),
    frameRate: 10,
    repeat: -1
});

// Movement with keyboard Input
    cursors = this.input.keyboard.createCursorKeys();

// Camera details

camera = this.cameras.main;
// camera size
//camera.setSize(640, 800)
camera.startFollow(player);
camera.setBounds(0,0, map.widthInPixels, map.heightInPixels);

// Collectables

berry = this.physics.add.group({
  key: 'food',
  frame: [0,0,0,0,0,0] ,
  setXY:{
    x: 100,
    y: 2300,
    stepX: 100,
    stepY: -200
  }
})

}

function update(){
/*      if (gameOver) {
          return;
      } */
      let speed = 160;

      if (cursors.left.isDown)
      {
          player.setVelocityX(-speed);

          player.anims.play('left', true);
      }
      else if (cursors.right.isDown)
      {
          player.setVelocityX(speed);

          player.anims.play('right', true);
      }
      else if (cursors.up.isDown)
      {
          player.setVelocityY(-speed);

          player.anims.play('up', true);
      }
      else if (cursors.down.isDown)
      {
          player.setVelocityY(speed);

          player.anims.play('down', true);
      }

      else
      {
          player.setVelocityX(0);
          player.setVelocityY(0);

          player.anims.play('turn');
      }
      // This will help with the player's diagonal velocity. It scales down the velocity
      player.body.velocity.normalize().scale(speed);


}
