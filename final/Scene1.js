class Scene1 extends Phaser.Scene{

  constructor(){
    super('Scene1')
  }

  create(){

    this.add.text( 20, 200, 'Start Game...', {
       fontSize: '32px', fill: '0xFFFFFF' });

    var start_button = scene.add.rectangle(20,200, 100, 20, fillColor: 0x000000 );

  }

start_game(){
    this.scene.start('Scene2');
  }

}
