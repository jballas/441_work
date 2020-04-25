class Preload extends Phaser.Scene{

  constructor(){
    super('Preload');
  }

  create(){

    this.add.text( 20, 200, 'Click to Start Game...');
    //    this.scene.start('scene2');
  //  cursors = this.input.keyboard.createCursorKeys();
    console.log("scene1 is loading");
  }

  update(){

    this.input.once('pointerdown', function () {
          this.scene.switch('Scene2');
            }, this);

  }
}
