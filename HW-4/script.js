var name;
var title;
var desire;
var action;
var trance;

// Image Variables
var zeeQ_image = " <img src='../HW-3/images/retro-Zee.jpg' alt='woman in retro 1950's dress'> ";
var dee_image = " <img src='../HW-3/images/Dee.png' alt='sci-fi woman in wormhole'> ";
var bunker_image = " <img src='../HW-3/images/bunker.jpg' alt='underground stairs leading down'> ";
var cyber_image =" <img src='../HW-3/images/cyberpunk.jpg' alt='neon-lit city street ca 1980's cyberpunk mystic'> ";
var cyborg_image =" <img src='../HW-3/images/cyborg.jpg' alt='robotic woman'>";
var dating_image =" <img src='../HW-3/images/dating.png' alt='silhouette of man and woman facing each other hearts in background'> ";
var exploring_image =" <img src='../HW-3/images/explore.png' alt='sci-fi woman on bridge above a planet'> ";
var bored_image =" <img src='../HW-3/images/bored.jpg' alt='woman staring out the window toward foggy sunset over the city'> ";
var multi_image = " <img src='../HW-3/images/multiverse.jpg' alt='closeup on woman's robotic eye'> ";

//function for entering a name, and if you don't enter a name a window alert appears.

function enter_name (){
    name = document.getElementById("entered_name").value;

    if (name == ""){
        window.alert("Enter Name to continue!")
      }
    else{
        document.getElementById("featuring").innerHTML = "featuring " + name;
        start_game();
      }
}

// Function to start the game over, or begin the game
function start_game(){
  let glitch = "<button type='button' class='title_btn' onclick=pick_title(1)>Glitch</button>";
  let multi = "<button type='button' class='title_btn' onclick=pick_title(2)>Multiverse</button>";

  document.getElementById("story").innerHTML = "<h2>Pick your Path</h2>" + glitch + multi;
  document.getElementById("images").innerHTML="";
  document.getElementById("middle").innerHTML= "";
  document.getElementById('story').style.backgroundColor = '#10374a';
  document.getElementById('story').style.transform = 'none';
  document.getElementById('title').style.fontFamily = 'monospace';
}

// Create Start Over game button
function start_button(){
  var start = "<button id='btn_start' onclick=start_game()>Start Over</button>";
    document.getElementById("middle").innerHTML= start;
}

// The first choice is which 'story' to play.

function pick_title(title) {

    switch (title){

        case 1:
            story(title);
            break;

        case 2:
            story(title);
            break;
  }
}
function story(title){
    let protect = "<button onclick=picked_desire(1)>Protect</button>";
    let leave = "<button onclick=picked_desire(2)>Leave</button>";
    let explore = "<button onclick=picked_desire(3)>Explore</button>";
    let sell = "<button onclick=picked_desire(4)>Sell</button>";


    if (title== 1){
      document.getElementById("story").innerHTML = "<h2> Glitch Act one</h2>" + name + " Q you are a pessimist, but your husband is an optimist. Your husband has gotten a job offer to time travel to the 1950s era. In prepration, you have become a fantastic pie baker. Your son Tommy is excited to eat <span class='food'> jello </span> all the time. You are feeling a little doubtful about the big move. What do you, " + name + " want? To protect the family? Or will you leave for the Big City on your own? <br>" + protect + leave;
      document.getElementById("images").innerHTML= zeeQ_image;
      extra_choices();
    }

    else if (title===2){
      document.getElementById("story").innerHTML = "<h2>Multiverse</h2>" + name + "'s adventure into the unknown begins... <p>You visit the amusement park named Quarkland, while riding the most boring ride in the world you fall into a trance. When you leave the ride you discover you are in a new universe! What will you do next? Continue to explore or sell your discovery?</p>" + explore + sell ;
      document.getElementById("images").innerHTML= dee_image;
      new_universe();
      }
}

// Style changes which occur during your Multiverse and Glitch Adventures
function new_universe(){

    let changes = Math.round(Math.random());

    if (changes == 0 ){
            document.getElementById('story').style.backgroundColor = '#2c96c9';
            document.getElementById('story').style.left = '100px';
            document.getElementById('story').style.transform = 'rotate(10deg)';
            document.getElementById('title').style.fontFamily = 'carbontype, serif';
    }

    if (changes == 1){
            document.getElementById('story').style.backgroundColor = '#98c0d4';
                        document.getElementById('story').style.left = '100px';
            document.getElementById('story').style.transform = 'rotate(-10deg)';
            document.getElementById('title').style.fontFamily = 'atomic, serif';
    }
}

function extra_choices(){
  let choice_label = "<label id='ch_name'> Favorite Food? </label>";
  let choice_input = "<input id='fav_food' type='text'>";
  let choice_btn = "</br><button id='btn_food' onclick='food()'>Change</button>"

  document.getElementById("middle").innerHTML = choice_label + choice_input + choice_btn;

}

// Another function including a loop, to change elements in a class. https://www.geeksforgeeks.org/html-dom-getelementsbyclassname-method/
function food(){
  fav_food = document.getElementById('fav_food').value;

  var elements=document.getElementsByClassName('food');
              for (var i = 0; i < elements.length; i++) {
              elements[i].innerHTML = fav_food;
              }
  console.log(fav_food);
}


// Creates Act 2 in stories, includes all the options

function picked_desire(desire){
  let rebel = "<button onclick=picked_action(1)>Rebel</button>";
  let bunker = "<button onclick=picked_action(2)>Bunker</button>";
  let sleep = "<button onclick=picked_action(3)>Sleep</button>";
  let escape_city = "<button onclick=picked_action(4)>Escape City</button>";
  let hermit = "<button onclick=action_hermit()>Be Hermit</button>";
  let date = "<button onclick=action_date()>Start Dating</button>";
  let shutdown = "<button onclick=action_shutdown()>Shutdown</button>";
  let run = "<button onclick=action_run_away()>Run away</button>";

      if (desire ==1) {

            document.getElementById("story").innerHTML = "<h2 class='act'> Act Two</h2> You decide to stay with and protect your family. Unfortunately, there is a glitch during the move and instead of ending up in the 1950s era, you end up in the 1980s era: Cyberpunk City 2020. Luckily, you start a business making <span class='food'> pies </span>. It is a big hit. Tommy loves <span class='food'> pies </span>. Unfortunately, the computers in cyberpunk city achieve sentience and war breaks out in the streets. You must choose what to do next. Will " + name + " join the rebels? Or will " + name + " hide in the Bunker?<br>" + rebel + bunker;
            document.getElementById("images").innerHTML= cyber_image;
            new_universe();
            extra_choices();
      }

      else if (desire ==2) {

         document.getElementById("story").innerHTML ="<h2 class='act'>Act Two</h2> You decide not to follow your husband to his new job in the 1950s era. Instead you takes your son Tommy to the big city. Luckily, you begin a business making <span class='food'>pies </span>, and it's a success! Tommy loves <span class='food'> pies </span> <p> Unfortunately, the city is invaded by sentient AIs, who have escaped from Cyberpunk City. They are intent on destroying the world. You have to act fast. What will you do next?</p> Will you join the scientists and enter cryogenic sleep? Or escape the city with other refugees?<br>" + sleep + escape_city;

         document.getElementById("images").innerHTML= bored_image;
         new_universe();
         extra_choices();
      }

      else if (desire == 3){
        document.getElementById("story").innerHTML = "<h2 class='act'> Act Two</h2>You are exploring the universe. How many did you find? Only now you realize you're poor and lonely. <p>What will you do? Give up earthly desires and become a hermit? Or start dating?</p>" + hermit + date;

        fancy_loop();
        document.getElementById("images").innerHTML= exploring_image;
      }

      else if (desire == 4){ document.getElementById("story").innerHTML = "<h2 class='act'> Act Two</h2> You decided to sell your discovery. You build a company called Multiverse Inc. Now you're rich but bored. <p>What will you do next? Shutdown the corporation you built? Or escape into the multiverse with all your money?</p>" + shutdown + run;
      document.getElementById("images").innerHTML= bored_image;
      }
  }
//Because I needed a loop. I can't figure out how else to implement one into the story. If I try to put a loop withh a document.getElementById you don't see it change 7 times. If I try to do it by document.getByClassName I already have to have information for it to change. But my information doesn't appear until you click a button, so I just get an error.
// Seven times is WAY too many for a joke. I'm switching it to 2 times
function fancy_loop(){
  for (var i = 0; i < 2; i++ ){
    window.alert("You discovered a new universe!");
  }
}


// Creates Act 3 of Glitch's storyline
function picked_action(action){

  if (action ===1){
    document.getElementById("story").innerHTML = "<h2 class= 'act'> Act Three </h2> After joining the rebels, the Q family suffer many hardships during the war against the cyborgs but at least they are together....The End. <br>";

    start_button();
    document.getElementById("images").innerHTML= cyborg_image;
  }

  else if (action ===2){
    document.getElementById("story").innerHTML = "<h2 class='act'> Act Three </h2>" + name + " and the Q family decide to hide inside the Bunker. They spend the rest of their lives underground without sunlight, eating protein packets and vitamins.... The End. <br>";
    new_universe();

    start_button();
    document.getElementById("images").innerHTML= bunker_image;
  }

  else if (action === 3){
    document.getElementById("story").innerHTML = "<h2 class='act'> Act Three </h2>" + name + " and Tommy enter cryogenic sleep, to wait until the war is finished. Unfortunately, there is a glitch in the system and " + name + " can't be woken up. It isn't until the year 3030 that you are returned to life. Tommy died years ago. Lonely, you decide to take a vacation at a themepark called Quarkland. To see more of your adventures, play the story <em>Multiverse</em>.<br>";
    new_universe();

    start_button();
    document.getElementById("images").innerHTML= multi_image;
  }

  else if (action === 4){
    document.getElementById("story").innerHTML = "<h2 class='act'> Act Three </h2>" + name + " and Tommy escape from the city into the countryside. Unfortunately, they are captured by the AI. Tommy is injured and dying, and you make a deal with the AI in order to save his life. Tommy becomes a cyborg and you must work for the AI in the themepark Quarkland. For more of your adventures see <em>Multiverse</em>.<br>";
    new_universe();

    start_button();
    document.getElementById("images").innerHTML= multi_image;
  }
}


  // Second Storyline Functions. Right now I'm keeping these as seperate functions, because I'm using strings inside the story and that would get ruined.

// These are Functions if you Pick Explore in Part 2 of Mulitverse story
function action_hermit(){
    action = "hermit";

    if (action=== "hermit"){
      document.getElementById("story").innerHTML = "<h2 class='act'> Act 3 </h2> You decided to be a " + action + ". Unfortunately, your adventures have attracted the attention of the Interdimentional Police. You end up in an underground prison. The End.<br>";

      start_button();
      document.getElementById("images").innerHTML= bunker_image;
    }
}

function action_date(){
    action = "date";

    if ( action === "date" ){
      document.getElementById("story").innerHTML = "<h2 class='act'> Act 3 </h2> You decided to " + action + ". Soon you meet a nice man named Jim Q and have a son named Tommy. For more of your adventures see <em>Glitch</em>.<br>";
      new_universe();

      start_button();
      document.getElementById("images").innerHTML= dating_image;
    }
}

// These are functions if you pick 'Sell' button in Act 2 of Multiverse Story
function action_shutdown(){
      action = "shutdown";

      if (action=== "shutdown"){
        document.getElementById("story").innerHTML = " <h2 class='act'> Act 3 </h2> You decided to " + action + " the evil coporation you built. Unfortunately, multiple-versions of yourself appear to stop you. They are members of the interdimentional police and their job is to protect the multiverse. They are here to recuit you. Life won't be boring anymore! The End.<br>" ;
        new_universe();

        start_button();
        document.getElementById("images").innerHTML= cyborg_image;
      }
  }

  function action_run_away(){
      action = "run";

      if (action=== "run"){
          document.getElementById("story").innerHTML = " <h2 class='act'> Act 3 </h2> You decided to " + action + " with all the money. Unfortunately, the Interdimentional police appear to arrest you. You somehow manage to escape, but you have to change your name and go into hiding in a nice suburban where you bake pies. For more of your adventures see <em>Glitch</em>.";
          new_universe();

          start_button();
          document.getElementById("images").innerHTML= zeeQ_image ;
      }
  }
