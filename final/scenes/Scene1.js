class Scene1 extends Phaser.Scene{

    constructor(){
      super('Scene1');
    }

    preload(){
  }

    create() {
      // Add background image
      this.add.image(0,0, 'camper').setOrigin(0,0);
      this.add.image(160,405, 'icons').setFrame(0); // fork and spoon

      // Add interactive sprites

      cans = this.add.sprite(100,425, 'icons');
      cans.setFrame(1);

      var peppers = this.add.sprite(155,425, 'icons');
      peppers.setFrame(7);

/*      var empty_can = this.add.sprite(150,450, 'icons');
      empty_can.setFrame(2).setScale(2);*/

      var toilet_paper = this.add.sprite(170, 350, 'icons');
      toilet_paper.setFrame(3);

      var bucket = this.add.sprite(250, 300, 'icons');
      bucket.setFrame(5);

      var diary = this.add.sprite(270, 200, 'icons');
        diary.setFrame(6);

        show_text = this.add.text(300, 100, 'Should I eat something?');

        show_text.setVisible(false);
  }

  update(){

    cans.setInteractive({
        useHandCursor: true
    });

    cans.on('pointerdown', function(){
      this.add.text(250, 10, "I'm starving!");
      cans.setFrame(2)}, this);

    cans.on('pointerover', function(){
        show_text.setVisible(true);
      }, this);

    cans.on('pointerout', function(){
          show_text.setVisible(false);
        }, this);




//      bucket.on('pointerover', function(){
//        this.add.text(250, 20)
//      })

  }
}
