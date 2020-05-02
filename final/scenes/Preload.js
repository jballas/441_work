class Preload extends Phaser.Scene{

  constructor(){
    super('Preload');
  }

  preload(){
          //ART
          this.load.image('title_background', 'assets/title_page.png');
          this.load.spritesheet('emotions', 'assets/rosie-emotes.png', {frameWidth: 32, frameHeight: 32, endFrame:8});
          this.load.image('camper', 'assets/camper.png');
          this.load.spritesheet('bus_icons', 'assets/game-icons.png', {frameWidth: 64, frameHeight: 64, endFrame: 8});
          this.load.image('tiles', 'assets/Forest_Tileset.png', { frameWidth: 32, frameHeight: 32});
          this.load.tilemapTiledJSON('mtn_map', 'assets/mtn_map.json');
          this.load.spritesheet('rosie', 'assets/rosie.png', { frameWidth: 32, frameHeight: 32, endFrame: 11});
          this.load.spritesheet('sprites', 'assets/collectables-enemies.png', {frameWidth: 32, frameHeight: 32, endFrame: 4});
          this.load.spritesheet('butterfly', 'assets/butterfly.png', {frameWidth: 16, frameHeight: 16, endFrame: 11});
          this.load.image('healthbar', 'assets/health.png')
          this.load.image('energybar', 'assets/energy-bar.png')

          //AUDIO
  }

  create(){

// This is basically my titlepage, it also preloads all my images and assets.
    let background = this.add.image(0,32,'title_background').setOrigin(0,0);
    //console.log(background.displayWidth);

    this.add.text( 20, 10, 'Click to Start Game...');

    this.add.text(125,100, 'UNBEARABLE', { fontFamily: 'monospace', fontSize: 64, color: '#472f0a' })

// animated face
    var face = this.physics.add.sprite(300,450, 'emotions').setScale(10);

    this.anims.create({
        key: 'faces',
        frames: this.anims.generateFrameNumbers('emotions', { start: 0, end: 7 }),
        frameRate: 1,
        repeat: -1
    });

// this plays the animations we created above
face.anims.play('faces');

  }

  update(){

    // if you click the mouse, then the game begins.
    this.input.once('pointerdown', function () {
          this.scene.start('Scene1', {berries: 0}); // This will start a new scene, closing the current one.
            }, this);

  }
}
