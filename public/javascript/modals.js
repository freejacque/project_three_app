// the text that is shown in the rulesDiv
var $rulesText  = $('<ul id="rules-ul"><li>' +
                'The object of the game is to create ionic compounds using cards' +
                ' like the one below. Each card has a charge in the upper right corner.' +
                '<li> When a card is placed inside the gray box on the right side of' +
                ' the board a number will appear beside net charge.' +
                ' Once you have achieved a net charge of zero, you will earn a point.</li>' +
                '<li> Earn as many points as you can in 60 seconds.' +
                ' Remember that the positive ion(s) always go first.' +
                '</li></ul>');


// creates a demo card for the rules
function demoCard(){
  atomicNumber = 1;
  element = elements[parseInt(atomicNumber, 10)];
  var card = new Card(element);
  card.rulesInit();
};

// creates a rules div, displays rules content & appends to DOM
function showRules(){
  // clears any cards that may be displaying
  $deckDiv.empty();
  // clears the timer
  clearTimer();
  // appends a rules div to the main page
  $rulesDiv = $('<div class="modal" id="rules" style="cursor: pointer"></div>').appendTo($deckDiv);
  $rulesTitle = $('<h2 class="modal-title">Rules</h2>').appendTo($rulesDiv);
  $rulesSpan = $('<span id="rules-text"></span>').appendTo($rulesDiv);
  $rulesText.appendTo($rulesSpan);
  $demoCardDiv = $('<div class="demo-card-div">').appendTo($rulesDiv);
  $demoCardUl = $('<ul class="demo-card-ul">').appendTo($demoCardDiv);
  // calls the function to create a demo card
  demoCard();
  console.log('rules are being shown');
  // sets an event listener to remove the rules div on click
  $rulesDiv.on('click', removeRulesDiv);
};

function showStats(){
  var $statsText  = $('<ul id="stats-ul"><li style="margin-left: 1em">' +
                  'Your best score is: ' +
                   $.jStorage.get("bestScore") +
                   ' points made on ' +
                   $.jStorage.get("bestScoreDate") +
                  '.</li></ul>');
  // clears anything already on this section of the DOM
  $deckDiv.empty();
  // stops and clears the timer
  clearTimer();
  $statsDiv = $('<div class="modal" id="stats" style="cursor: pointer"></div>').appendTo($deckDiv);
  $statsTitle = $('<h2 class="modal-title">Stats</h2>').appendTo($statsDiv);
  $statsSpan = $('<span id="stats-text"></span>').appendTo($statsDiv);
  $statsText.appendTo($statsSpan);
  // sets a event listener to remove the stats div from the DOM
  $statsDiv.on('click', removeStatsDiv);
};


function gameOver() {
  clearTimer();
  // sets the new best score if the new score is higher
  setBestScore();
  // removes all remaining cards from the DOM
  $deck.empty();
  $gameOverDiv = $('<div class="modal" id="game-over-div" style="cursor: pointer">').appendTo($deckDiv);
  $gameOverSpan = $('<span class="game-over blink_me" id="game-over-span">').appendTo($gameOverDiv);
  $gameOverSpan.html('Game Over!');
  $gameScoreDiv = $('<div class="game-score-div">').appendTo($gameOverDiv);
  $gameScoreSpan = $('<span class="score-span" id="game-score-span">').html("Current Score: " + score + " pts").appendTo($gameScoreDiv);
  $bestScoreDiv = $('<div class="game-score-div">').appendTo($gameOverDiv);
  $bestScoreSpan = $('<span class="score-span" id="best-score-span">').html("Best Score: " + $bestScore + " pts").appendTo($bestScoreDiv);
  // makes the Game Over text flash
  setInterval(blinker, 1000);
  // sets an event listener to remove the gameOverDiv
  $gameOverDiv.on('click', removeGameOverDiv);
};

// this function makes the text blink
function blinker(){
    $('.blink_me').fadeOut(500);
    $('.blink_me').fadeIn(500);
};

// creates sub divs inside of $demoCardDiv to label the demoCard
function demoCardSubDivs(){

};

// removes a div from the DOM
function removeDiv(divToDelete){
  divToDelete.detach();
  console.log("div deleted");
};

// calls the removeDiv function for the $rulesDiv eventListener
function removeRulesDiv(){
  removeDiv($rulesDiv);
};

// calls the removeDiv function for the $statsDiv eventListener
function removeStatsDiv(){
  removeDiv($statsDiv);
};

// calls the removeDiv function for the $gameOverDiv eventListener
function removeGameOverDiv(){
  removeDiv($gameOverDiv);
};
