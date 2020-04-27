class Scene1 extends Phaser.Scene{

    constructor(){
      super('Scene1');
    }

    preload(){
  }

    create() {
      // Add background image
      this.add.image(0,0, 'camper').setOrigin(0,0);

      // Add interactive sprites

      var cans = this.add.sprite(100,425, 'icons');
      cans.setFrame(5).setScale(2);

      var peppers = this.add.sprite(130,425, 'icons');
      peppers.setFrame(6);

      var empty_can = this.add.sprite(150,450, 'icons');
      empty_can.setFrame(7).setScale(2);

      var toilet_paper = this.add.sprite(400, 350, 'icons');
      toilet_paper.setFrame(8).setScale(2);


  }
}
