var name;
var title;
var desire;
var action;

var dee_desire;
var dee_action;

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
        document.getElementById("title").innerHTML = "featuring " + name + " Q"
      }
}


// when you click the buttons it calls this function, which makes the window.prompts appear. The if statements decide what text is written to the website, based on your choices.

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
      document.getElementById("first-act").innerHTML = " <h2>Act one</h2>" + name + " Q is a pessimist, but your husband is an optimist. Your husband has gotten a job offer to time travel to the 1950s era. In prepration, You have become a fantastic pie baker. Your son Tommy is excited to eat jello all the time. You are feeling a little doubtful about the big move. What do you, " + name + " want? To protect the family? Or will you leave for the Big City on your own?" + protect + leave;
    }

    else if (title===2){
      document.getElementById("multi_act1").innerHTML = "Multiverse, featuring " + name + dee_image + " <p>You visit the amusement park named Quarkland, while riding the most boring ride in the world you fall into a trace. When you leaves the ride you discover you are in a new universe! What will you do next? Continue to explore or sell your discovery?</p>" + explore + sell ;
      }
}

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

            document.getElementById("second-act").innerHTML = cyber_image + "<h2> Act Two</h2> Zee decides to stay with Jim and protect her family. Unfortuantely, there is a glitch during their move and instead of ending up in the 1950s era, they end up in the 1980s era: Cyberpunk City 2020. Luckily, Zee's pies are still a big hit. Unfortunately, the computers in cyberpunk city achieve sentience and war breaks out in the streets. You must choose what to do next. Will " + name + " join the rebels? Or will " + name + " hide in the Bunker?" + rebel + bunker;
      }

      else if (desire ==2) {

         document.getElementById("second-act").innerHTML = bored_image + " <h2>Act Two</h2> Zee decides not to follow Jim to his new job in the 1950s era. She takes her son Tommy to the big city. Luckily, Zee begins a pie-baking business, and it's a success! <p> Unfortunately, the city is invaded by sentient AIs, who have escaped from Cyberpunk City. They are intent on destroying the world. Zee has to act fast. What will she do next?</p> Will you join the scientists and enter cryogenic sleep? Or Escape the city?" + sleep + escape_city;
      }

      else if (desire == 3){
        document.getElementById("multi_act2").innerHTML = exploring_image + "You are exploring the universe, but now you're poor and lonely. <p>What will you do? Give up earthly desires and become a hermit? Or start dating?</p>" + hermit + date;
      }

      else if (desire == 4){ document.getElementById("multi_act2").innerHTML = bored_image + "You decided to sell your discovery. You build a company called Multiverse Inc. Now you're rich but bored. <p>What will you do next? Shutdown the corporation you built? Or escape into the multiverse with all your money?</p>" + shutdown + run;
      }
  }

function picked_action(action){

  if (action ===1){
    document.getElementById("third-act").innerHTML = cyborg_image +  "<h2> Act Three </h2>After joining the rebels, Zee and her family suffer many hardships during the war against the cyborgs but at least they are together....The End";
  }

  else if (action ===2){
    document.getElementById("third-act").innerHTML = "<h2> Act Three </h2>Zee and her family decide to hide inside the Bunker. They spend the rest of their lives underground without sunlight, eating protein packets and vitamins.... The End" + bunker_image;
  }

  else if (action === 3){
    document.getElementById("third-act").innerHTML = " <h2> Act Three </h2> Zee and her son enter cryogenic sleep, to wait until the war is finished. Unfortunately, there is a glitch in the system and Zee can't be woken up. It isn't until the year 3030 that she is returned to life. Tommy died years ago. Lonely, Zee decides to take a vacation at a themepark called Quarkland. To see more of her adventures, play the story <em>Multiverse</em>" + multi_image;
  }

  else if (action === 4){
    document.getElementById("third-act").innerHTML = cyborg_image + "<h2> Act Three </h2> Zee and her son escape from the city into the countryside. Unfortunately, they are captured by the AI. Tommy is injured and dying, and Zee makes deal with the AI in order to save his life. Tommy becomes a cyborg and Zee must work for the AI in the themepark Quarkland. For more of your adventures see <em>Multiverse</em>." + multi_image;
  }
}


  // Second Storyline Functions



// Function writes information to <div> with ID=multi_act2, and 2 buttons appear
/*
  function picked_explore(){

    dee_desire = "explore";
    let hermit = "<button onclick=action_hermit()>Be Hermit</button>";
    let date = "<button onclick=action_date()>Start Dating</button>";

    if (dee_desire == "explore"){
      document.getElementById("multi_act2").innerHTML = exploring_image + "You are exploring the universe, but now you're poor and lonely. <p>What will you do? Give up earthly desires and become a hermit? Or start dating?</p>" + hermit + date;
    }
}*/

function action_hermit(){
  dee_action = "hermit";

  if (dee_action=== "hermit"){
    document.getElementById("multi_act3").innerHTML = " <h2> Act 3 </h2> You decided to be a " + dee_action + ". Unfortunately, your adventures have attracted the attention of the Interdimentional Police. You end up in an underground prison. The End." + bunker_image;
  }

}

function action_date(){
  dee_action = "date";

  if ( dee_action === "date" ){
    document.getElementById("multi_act3").innerHTML = dating_image + "<h2> Act 3 </h2> You decided to " + dee_action + ". Soon you meet a nice man named Jim Q and have a son named Tommy. For more of your adventures see <em>Glitch</em>.";
  }
}

// This is function if you pick 'Sell' button in Act 2 of Multiverse Story
/*  function picked_sell(){

    dee_desire = "sell";
    let shutdown = "<button onclick=action_shutdown()>Shutdown</button>";
    let run = "<button onclick=action_run_away()>Run away</button>";

    if (dee_desire == "sell"){ document.getElementById("multi_act2").innerHTML = bored_image + "You decided to sell your discovery. You build a company called Multiverse Inc. Now you're rich but bored. <p>What will you do next? Shutdown the corporation you built? Or escape into the multiverse with all your money?</p>" + shutdown + run;
    }
  } */

  function action_shutdown(){
    dee_action = "shutdown";

    if (dee_action=== "shutdown"){
      document.getElementById("multi_act3").innerHTML = cyborg_image + " <h2> Act 3 </h2> You decided to " + dee_action + " the evil coporation you built. Unfortunately, multiple-versions of yourself appear to stop you. They are members of the interdimentional police and their job is to protect the multiverse. They are here to recuit you. Life won't be boring anymore! The End.";
    }
  }

    function action_run_away(){
      dee_action = "run";

      if (dee_action=== "run"){
        document.getElementById("multi_act3").innerHTML = " <h2> Act 3 </h2> You decided to " + dee_action + " with all the money. Unfortunately, the Interdimentional police appear to arrest you. You somehow manage to escape, but you have to change your name and go into hiding in a nice suburban where you bake pies. For more of your adventures see <em>Glitch</em>." + zeeQ_image;
      }
    }
