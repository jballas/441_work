class Scene1 extends Phaser.Scene{

  constructor(){
    super('Scene1');
  }

  create(){

    this.add.text( 200, 200, 'Start Game...', {
       font: '45px Arial', fill: 'white' });


    cursors = this.input.keyboard.createCursorKeys();


  }

  /*update(){
    if (cursors.x.isDown){
      this.scene.start('Scene2');
    }
  }
*/
start_game(){
    this.scene.start('Scene2');
  };

}
