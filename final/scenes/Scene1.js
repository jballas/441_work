class Scene1 extends Phaser.Scene{

    constructor(){
      super('Scene1');
    }

    init(data){
      console.log('init', data);
      this.berries = data.berries
  }

    create() {
      // Add background image
      this.add.image(0,0, 'camper').setOrigin(0,0);
      this.add.image(160,405, 'bus_icons').setFrame(0); // fork and spoon

      // Add interactive sprites

      cans = this.add.sprite(100,425, 'bus_icons');
      cans.setFrame(1);

      peppers = this.add.sprite(155,425, 'bus_icons');
      peppers.setFrame(7);

      toilet_paper = this.add.sprite(170, 350, 'bus_icons');
      toilet_paper.setFrame(3);

      bucket = this.add.sprite(250, 300, 'bus_icons');
      bucket.setFrame(5);

      diary = this.add.sprite(270, 200, 'bus_icons');
        diary.setFrame(6);

      ladder = this.add.sprite(270, 650, 'bus_icons');
        ladder.setFrame(4);

      cans_text = this.add.text(375, 400, "Should I eat something?").setVisible(false);
      peppers_text = this.add.text(375, 425, "Papa's favorite...").setVisible(false);
      toilet_paper_text = this.add.text(375, 350, "I don't need to go...").setVisible(false);
      bucket_text = this.add.text(375, 250, "Should I pick some berries?").setVisible(false);
      ladder_text = this.add.text(375, 650, "Should I use the ladder?").setVisible(false);

      // If you collect berries, then the diary text changes.
        if(this.berries >= 1){
          diary_text = this.add.text(375,200, "Berries collected:" + this.berries);
        }
        else{
          diary_text = this.add.text(375, 200, "I'll write something later...").setVisible(false);
        }
  }
  update(){

    change_the_mouse(cans);
    change_the_mouse(peppers);
    change_the_mouse(toilet_paper);
    change_the_mouse(bucket);
    change_the_mouse(diary);


  //  show_hidden(ladder);

    // More Object interaction
    cans.on('pointerdown', function(){
      cans_text.setText("I'm still starving!");
      cans.setFrame(2)}, this);

      cans.on('pointerover', function(){
        cans_text.setVisible(true);
      }, this);

      cans.on('pointerout', function(){
        cans_text.setVisible(false);
      }, this);

      peppers.on('pointerdown', function(){
        peppers_text.setText("Ah so yummy!");
        peppers.setFrame(2)}, this);

      peppers.on('pointerover', function(){
          peppers_text.setVisible(true);
        }, this);

      peppers.on('pointerout', function(){
            peppers_text.setVisible(false);
          }, this);

          toilet_paper.on('pointerover', function(){
              toilet_paper_text.setVisible(true);
            }, this);

          toilet_paper.on('pointerout', function(){
                toilet_paper_text.setVisible(false);
              }, this);

          bucket.on('pointerover', function(){
            bucket_text.setVisible(true);
            }, this);

            bucket.on('pointerout', function(){
            bucket_text.setVisible(false);
              }, this);

            bucket.on('pointerdown', function(){
                bucket_text.setText("Let's head out!");
                game_over = false;
                health = 300;
                this.scene.start('Scene2'); // Begin playing berry game
              }, this);

          diary.on('pointerover', function(){
              diary_text.setVisible(true);
            }, this);

          diary.on('pointerout', function(){
                diary_text.setVisible(false);
              }, this);

          // If you collect enough berries, the ladder becomes available
        if(this.berries > 2){
          change_the_mouse(ladder);

          ladder.on('pointerover', function(){
              ladder_text.setVisible(true);
            }, this);

          ladder.on('pointerout', function(){
                  ladder_text.setVisible(false);
                }, this);
/* // I want the ladder to be clickable, and it takes you to scene2,
  //except now you can pass through the water blockade.
          ladder.on('pointerdown', function(){
              bucket_text.setText("Let's head out!");
              game_over = false;
              health = 300;
              this.scene.start('Scene2', {bridge:}); // Begin playing berry game
            }, this);*/
        }

  }
}

function change_the_mouse(object){

  object.setInteractive({
      useHandCursor: true
  });
}
 //Didn't work like I wanted it to
function show_hidden(object){

  object.on('pointerover', function(){
      object.setVisible(true);
    }, this);

  object.on('pointerout', function(){
        object.setVisible(false);
      }, this);

}
