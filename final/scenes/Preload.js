class Preload extends Phaser.Scene{

  constructor(){
    super('Preload');
  }

  preload(){
          this.load.image('title_background', 'assets/Title_page.png');
          this.load.spritesheet('emotions', 'assets/rosie-emotes.png', {frameWidth: 32, frameHeight: 32, endFrame:8});
          //this.load.image('bus', 'assets/bus_background.png');
          this.load.image('tiles', 'assets/Forest_Tileset.png');
          this.load.tilemapTiledJSON('mtn_map', 'assets/mtn_map.json');
          this.load.spritesheet('rosie', 'assets/rosie.png', { frameWidth: 32, frameHeight: 32, endFrame: 11});
          this.load.spritesheet('food', 'assets/game-icons.png', {frameWidth: 32, frameHeight: 32, endFrame: 8});

  }

  create(){

    let background = this.add.image(0,30,'title_background').setOrigin(0,0);
    console.log(background.displayWidth);

    this.add.text( 20, 10, 'Click to Start Game...');

    var face = this.physics.add.sprite(300,450, 'emotions').setScale(10);

    this.anims.create({
        key: 'faces',
        frames: this.anims.generateFrameNumbers('emotions', { start: 0, end: 7 }),
        frameRate: 1,
        repeat: -1
    });

face.anims.play('faces');

//    this.add.image(50,300, 'emotions').setScale(10);


  }

  update(){

    this.input.once('pointerdown', function () {
          this.scene.start('Scene2');
            }, this);

  }
}
