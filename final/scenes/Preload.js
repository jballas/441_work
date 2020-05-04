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
          this.load.image('healthbar', 'assets/health.png');
          this.load.image('energybar', 'assets/energy-bar.png');

          //AUDIO
          this.load.audio('title', 'assets/audio/title.wav');
          this.load.audio('radio', 'assets/audio/Julia-Florida.mp3');
          this.load.audio('sneaky_music', 'assets/audio/sneaky-adventure-by-kevin-macleod-from-filmmusic-io.mp3');
          this.load.audio('pickup_sound', 'assets/audio/pickup.wav');
          this.load.audio('bad_pickup_sound', 'assets/audio/bad_pickup.mp3');
          this.load.audio('hit_sound', 'assets/audio/hit.wav');
  }

  create(){

// This is basically my titlepage, it also preloads all my images and assets.
    let background = this.add.image(0,32,'title_background').setOrigin(0,0);
    //console.log(background.displayWidth);

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

// AUDIO
pickup_sound = this.sound.add('pickup_sound');
music = this.sound.add('title', {loop: true});
//music.play();

// This delays the text about starting the screen, so there is more time to load images and audio...
this.time.addEvent({delay: 3000, callback: loading_delay, callbackScope: this, loop: false});

}

  update(){

    // if you click the mouse, then the game begins.
    this.input.once('pointerdown', function () {

      this.add.text(190, 320, 'Loading...', { fontSize: 20, color: '#472f0a' }) ;
      // This will delay the start of the next scene slightly, so the loading text shows up first.
      this.time.addEvent({delay: 1000, callback: start_game, callbackScope: this, loop: false});

          pickup_sound.play();
          music.stop();
            }, this);

  }
}

function loading_delay(){
  this.add.text( 175, 50, 'Click to Start Game...', { fontSize: 20, color: '#472f0a' }) ;
}

function start_game(){
    this.scene.start('Scene1', {berries: 0, diary_ending: 0}); // This will start a new scene, closing the current one.
}
