class Scene1 extends Phaser.Scene{

    constructor(){
      super('Scene1');
    }

    init(data){
      //console.log('init', data);
      this.berries = data.berries;
      this.diary_ending = data.diary_ending;
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
          diary_text = this.add.text(375,140, "Berries collected:" + this.berries);
        }
        if(this.berries> 1 && this.diary_ending == 1){
            diary_text = this.add.text(375, 200, "Today I met a Forest Ranger.");
        }
        if (this.berries > 5 && this.diary_ending ==1){
          diary_text = this.add.text(375,220, "He is going to help me\n climb the mountain\n and break my curse.\nThat's a story for another game.\n Thanks for playing! " )
        }
        if (this.berries > 10 && this.diary_ending ==1){
          diary_text = this.add.text(375,100, 'Wow you must love berries')
        }
        if (this.berries < -3 && this.diary_ending ==0){
          diary_text = this.add.text(375,160, 'Do you hate berries?')
        }
        else{
          diary_text = this.add.text(375, 180, "I'll write something later...").setVisible(false);
        }

        // PLAY AUDIO
        radio = this.sound.add('radio', {loop: true});
        radio.play();

  }
  update(){

    change_the_mouse(cans);
    change_the_mouse(peppers);
    change_the_mouse(toilet_paper);
    change_the_mouse(bucket);
    change_the_mouse(diary);

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
                radio.stop();
              //  this.scene.start('Scene2', {playerX: 50, playerY: 2000}); // Begin playing berry game

                this.add.text(375, 270, 'Loading...') ;
                this.time.addEvent({delay: 1000, callback: start_level1, callbackScope: this, loop: false});
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
 // I want the ladder to be clickable, and it takes you to scene2,
          ladder.on('pointerdown', function(){

              game_over = false;
              health = 300;
              radio.stop();
              this.add.text(375, 670, 'Loading...', { fontSize: 20, color: '#white' }) ;
              this.time.addEvent({delay: 1000, callback: start_level2, callbackScope: this, loop: false});
            //  this.scene.start('Scene2', {playerX: 850, playerY: 640}); // Begin playing berry game at level 2
            }, this);
        }

  }
}

function change_the_mouse(object){

  object.setInteractive({
      useHandCursor: true
  });
}
 //this will start the next scene, with scene listed and parameters
 function start_level1(){
   this.scene.start('Scene2', {playerX: 50, playerY: 2000}); // Begin playing berry game
 }

function start_level2(){
  this.scene.start('Scene2', {playerX: 850, playerY: 640});
}
