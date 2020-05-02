class Scene2 extends Phaser.Scene{

    constructor(){
      super('Scene2');
    }

    preload(){
  }

    create() {

      // uses the JSON data to make a tilemap
      var map = this.make.tilemap({ key: 'mtn_map'});
      // adds the image of the tileset and attaches it to the JSON data
      var tileset = map.addTilesetImage('Forest_Tileset', 'tiles')

      // my tilemap has 2 layers, these are both static images
      var bg_layer = map.createStaticLayer("background", tileset, 0,0);
      var tree_layer = map.createStaticLayer("trees", tileset, 0,0);

      // This makes sure the world size is the map size.
      this.physics.world.bounds.width = map.widthInPixels;
      this.physics.world.bounds.height = map.heightInPixels;

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

    // ENEMIES
    bees = this.physics.add.sprite(200, 2400, 'sprites').setFrame(2); // Bees
    // Creates a larger collision box, with object in the center
    bees.setCollideWorldBounds(true);

    // Bee movement
    let random_x = Phaser.Math.Between(-10, 2);
    let random_y = Phaser.Math.Between(-20, 10);

    this.physics.accelerateToObject(bees, player, 10, 30, 30);
    //    bees.setVelocityY(random_y);

      // when player and bees overlap, the bees accelerate toward the player to cause damage
      this.physics.add.overlap(player, bees, enemy_attack, null, this);

    butterfly = this.physics.add.group({
      key: 'butterfly',
      repeat: 20
    });


    // create a bunch of butterflies
    var rect = new Phaser.Geom.Rectangle(0,0, map.widthInPixels, map.heightInPixels)
    Phaser.Actions.RandomRectangle(butterfly.getChildren(), rect);

     //this.physics.add.sprite(100,2400, 'butterfly');

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
        // if player and child overlap,
        this.physics.add.overlap(player, butterfly, enemy_attack, null, this);



// UI details


        //Berry's collected
        berry_text = this.add.text( 16, 16, 'Berries: 0', {
           fontSize: '32px', fill: '#000000', backgroundColor: 'white' }).setScrollFactor(0);

        // Health
        health_text = this.add.text(400, 16, 'Health: 300',{
          fontSize: '32px', fill: '#000000', backgroundColor: 'white' }).setScrollFactor(0); // This keeps the text stationary, it scrolls with the camera

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

  berry_inventory +=1
  berry_text.setText('Berries:' + berry_inventory);
}


function enemy_attack(){
    console.log('ouch');

      health -= 10;
      health_text.setText('Health:' + health);

      if (health == 0){
        player.anims.play('turn');
        game_over = true;
        this.add.text(150, 200, 'Game Over', { fontSize: '100px', fill: '#000' });
        this.scene.start('Scene1');
        // setInterval(return_home, 4000);
      }

}

function return_home(){
      this.scene.start('Scene1');
}
