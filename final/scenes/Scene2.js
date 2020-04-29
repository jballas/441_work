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

    var rect = new Phaser.Geom.Rectangle(0,0, map.widthInPixels, map.heightInPixels)
    Phaser.Actions.RandomRectangle(green_berries.getChildren(), rect);

    this.physics.add.overlap(player, ripe_berries, collect, null, this);

    // Inventory

    berry_text = this.add.text( 16, 2450, 'Berries: 0', {
       fontSize: '32px', fill: '#000' })
       .setScrollFactor(1);

    }

    update(){
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



}

function collect(player, ripe_berries){
  ripe_berries.disableBody(true, true);

  berry_inventory +=1
  berry_text.setText('Berries:' + berry_inventory);
}
