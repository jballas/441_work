class Scene1 extends Phaser.Scene{

  constructor(){
    super('Scene1');
  }

  create(){

    this.add.text( 200, 200, 'X to Start Game...', {
       font: '45px Arial', fill: 'white' });


    cursors = this.input.keyboard.createCursorKeys();

  }

  update(){

    this.input.keyboard.on('keydown_X', function (event) {
      this.scene.add('Scene2');
      });

    }

}
