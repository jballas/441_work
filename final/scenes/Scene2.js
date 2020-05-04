class Scene2 extends Phaser.Scene{

    constructor(){
      super('Scene2');
    }

    init(data){
      //console.log('init', data);
      this.playerX = data.playerX;
      this.playerY = data.playerY;
  }

    create() {

      // uses the JSON data to make a tilemap
      var map = this.make.tilemap({ key: 'mtn_map'});
      // adds the image of the tileset and attaches it to the JSON data
      var tileset = map.addTilesetImage('Forest_Tileset', 'tiles')

      // my tilemap has 2 layers, these are both static images
      var bg_layer = map.createDynamicLayer("background", tileset, 0,0);
      var tree_layer = map.createDynamicLayer("trees", tileset, 0,0);

      // This makes sure the world size is the map size.
      this.physics.world.bounds.width = map.widthInPixels;
      this.physics.world.bounds.height = map.heightInPixels;

      // Creates Collisions with any tile that has been marked collides
     tree_layer.setCollisionByProperty({collides: true});

     //Player's XY data needs to be a variable, so we can load it from scene1 and adjust as needed
     player = this.physics.add.sprite(this.playerX, this.playerY, 'rosie');

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
    var camera = this.cameras.main;
    camera.setBounds(0,0, map.widthInPixels, map.heightInPixels);
    camera.startFollow(player);

    // Collectables

    ripe_berries = this.physics.add.group({
      key: 'sprites',
      frame: [0] ,
      frameQuantity: 10
    });

    var rect = new Phaser.Geom.Rectangle(0,0, map.widthInPixels, map.heightInPixels)
    Phaser.Actions.RandomRectangle(ripe_berries.getChildren(), rect);

    var green_berries = this.physics.add.group({
      key: 'sprites',
      frame: [1] ,
      frameQuantity: 20

    });
    // create a bunch of green berries within rectangle
    var rect = new Phaser.Geom.Rectangle(0,0, map.widthInPixels, map.heightInPixels)
    Phaser.Actions.RandomRectangle(green_berries.getChildren(), rect);

    this.physics.add.overlap(player, ripe_berries, collect, null, this);

    this.physics.add.overlap(player, green_berries, bad_collect, null, this);

    // ENEMIES
    bees = this.physics.add.sprite(200, 2010, 'sprites').setFrame(2);
    bees.setCollideWorldBounds(true)

    // Bee movement toward player
    this.physics.accelerateToObject(bees, player, 10, 30, 30);

      // when player and bees overlap, the bees attack
      this.physics.add.overlap(player, bees, enemy_attack, null, this);

    butterfly = this.physics.add.group({
      key: 'butterfly',
      repeat: 20
    });

    // create a bunch of butterflies
    var rect = new Phaser.Geom.Rectangle(0,0, map.widthInPixels, map.heightInPixels)
    Phaser.Actions.RandomRectangle(butterfly.getChildren(), rect);

     //this.physics.add.sprite(100,2000, 'butterfly');

    // Butterfly Animation
    this.anims.create({
        key: 'fly_turn',
        frames: [ { key: 'butterfly', frame: 1 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'fly_up',
        frames: this.anims.generateFrameNumbers('butterfly', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
    });

    this.anims.create({
        key: 'fly_down',
        frames: this.anims.generateFrameNumbers('butterfly', { start: 6, end: 8 }),
        frameRate: 5,
        repeat: -1
    });

    this.anims.create({
        key: 'fly_left',
        frames: this.anims.generateFrameNumbers('butterfly', { start: 9, end: 11 }),
        frameRate: 5,
        repeat: -1
    });

    this.anims.create({
        key: 'fly_right',
        frames: this.anims.generateFrameNumbers('butterfly', { start: 3, end: 5 }),
        frameRate: 5,
        repeat: -1
    });

      // create butterfly animations
        butterfly.children.iterate(function (child){
            butterfly.playAnimation('fly_right');

          // Create random speed for x and y
             var speed_x = Phaser.Math.Between(-8,4);
             var speed_y = Phaser.Math.Between(-4,8);

             // Assign random number to butterfly's location
             //Assign random velocity to butterfly
             child.setVelocityX(speed_x );
             child.setVelocityY( speed_y);

        });
        // if player and butterfly overlap, you get hurt
        this.physics.add.overlap(player, butterfly, enemy_attack, null, this);

        // CAMPER
        camper = this.physics.add.sprite(200,2050, 'bus_icons');
        camper.setFrame(8).setSize(62,40);

        // if player and camper overlap, you'll return to scene 1.
        this.physics.add.overlap(player, camper, return_home, null, this);

        // Forest Ranger
        ranger = this.physics.add.sprite(1000, 130, 'sprites').setFrame(3);

        // If the player finds the Forest Ranger, then they return home with an extra diary entry, depending on how many berries they have collected
        this.physics.add.overlap(player, ranger, finale, null, this);

        // UI details
      healthbar = this.add.image(320,40, 'healthbar').setScrollFactor(0);
      energybar = this.add.image(320,healthbar.y+28, 'energybar').setScrollFactor(0);

      // Emotes
      // Idealy, these emotes would change when you eat something or get hurt.
      emote = 0;
      var face = this.physics.add.sprite(320,42, 'emotions').setFrame(emote).setScale(3).setScrollFactor(0);

        //Berry's collected
        berry_text = this.add.text( 16, 16, 'Berries:' + berry_inventory, {
           fontSize: '32px', fill: '#000000', backgroundColor: 'white' }).setScrollFactor(0);

        // Health
        health_text = this.add.text(400, 16, 'Health: 300',{
          fontSize: '32px', fill: '#000000', backgroundColor: 'white' }).setScrollFactor(0); // This keeps the text stationary, it scrolls with the camera

        //AUDIO
        bg_music = this.sound.add('sneaky_music',{
            mute: false,
            volume: .2,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        });
        bg_music.play();
        pickup_sound = this.sound.add('pickup_sound');
        bad_pickup_sound = this.sound.add('bad_pickup_sound');
        hit_sound = this.sound.add('hit_sound',{
            mute: false,
            volume: .05,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        });

}

update(){
         if (game_over) {
              return;
          }

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

}

function collect(player, ripe_berries){
  ripe_berries.disableBody(true, true);
  pickup_sound.play();
  berry_inventory +=1
  berry_text.setText('Berries:' + berry_inventory);
}

function bad_collect(player, green_berries){
  green_berries.disableBody(true, true);
  bad_pickup_sound.play();
  berry_inventory -=1
  berry_text.setText('Berries:' + berry_inventory);
}


function enemy_attack(){
    console.log('ouch');

      health -= 10;
      health_text.setText('Health:' + health);
      hit_sound.play();

      if (health <= 0 ){
        player.anims.play('turn');
        game_over = true;
        bg_music.stop();
        this.add.text(150, 200, 'Game Over', { fontSize: '100px', fill: '#000' });
        this.scene.start('Scene1', { berries: berry_inventory, diary_ending: 0});
      }
}

function return_home(){
  //console.log('I am home');
      health -= 400;
      if (health <= 0 ){
        player.anims.play('turn');
        game_over = true;
        bg_music.stop();
        this.add.text(150, 200, 'Game Over', { fontSize: '100px', fill: '#000' });
        this.scene.start('Scene1', { berries: berry_inventory, diary_ending: 0});
      }
}

function finale(){
  //console.log('Curse is broken');
      health -= 400;
      if (health <= 0 ){
        player.anims.play('turn');
        game_over = true;
        bg_music.stop();
        this.add.text(150, 200, 'Game Over', { fontSize: '100px', fill: '#000' });
        this.scene.start('Scene1', { berries: berry_inventory, diary_ending: 1});
      }
}
