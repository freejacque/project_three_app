
$rulesText  = $('<ul id="rules-ul"><li>' +
                'The object of the game is to create ionic compounds using cards' +
                ' like the one below. Each card has a charge in the upper right corner.' +
                ' When a card is placed inside the gray box on the right side of' +
                ' the board a number will appear beside net charge.' +
                ' Once you have achieved a net charge of zero, you will earn a point.' +
                ' ' +
                ' ' +
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
  $deck.empty();
  // clears the timer
  clearTimer();
  // appends a rules div to the main page
  $rulesDiv = $('<div class="modal" id="rules"></div>').appendTo($deck);
  $rulesTitle = $('<h2 class="modal-title">Rules</h2>').appendTo($rulesDiv);
  $rulesSpan = $('<span id="rules-text"></span>').appendTo($rulesDiv);
  $rulesText.appendTo($rulesSpan);
  $demoCardDiv = $('<div class="demo-card-div">').appendTo($rulesDiv);
  // calls the function to create a demo card
  demoCard();
  console.log('rules are being shown');
  // sets an event listener to remove the rules div on click
  $rulesDiv.on('click', removeRulesDiv);
};

function gameOver() {
  clearTimer();
  setBestScore();
  $deck.empty();
  $gameOverDiv = $('<div class="modal" id="game-over-div">').appendTo($deck);
  $gameOverSpan = $('<span class="game-over blink_me" id="game-over-span">').appendTo($gameOverDiv);
  $gameOverSpan.html('Game Over!');
  $gameScoreDiv = $('<div class="game-score-div">').appendTo($gameOverDiv);
  $gameScoreSpan = $('<span class="score-span" id="game-score-span">').html("Current Score: " + score + " pts").appendTo($gameScoreDiv);
  $bestScoreDiv = $('<div class="game-score-div">').appendTo($gameOverDiv);
  $bestScoreSpan = $('<span class="score-span" id="best-score-span">').html("Best Score: " + bestScore + " pts").appendTo($bestScoreDiv);
  setInterval(blinker, 1000);
  $gameOverDiv.on('click', removeGameOverDiv);
};

function blinker() {
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

function removeGameOverDiv(){
  removeDiv($gameOverDiv);
};
