// setting variables for use throughout the game
var $card = $('.card')
var setVar;
var $box = $('.box');
var that;
var total;
var score = 0;
var bestScore = 0;
var bestScoreDate;
var $currentDraggables = [];
var numberOfCardsUsed = 0;


// seeds atomic numbers
function seedAtomicNumbers(){
    for(i=1; i <= 20; i++){
      atomicNumbers.push(i);
    };
    for(i=26; i <= 36; i++){
      atomicNumbers.push(i);
    };
  };

// randomly selects atomic numbers and places the corresponding information on the cards
function getElements(){
  setVariables();
  for(var i=0; i < 18; i++){
    atomicNumber = atomicNumbers[Math.floor(Math.random() * atomicNumbers.length)];
    element = elements[parseInt(atomicNumber, 10)];
    var card = new Card(element);
    card.init();
  }
  setTimer();
};

// set the variables for a new game
function setVariables(){
  $moleculeBox = $('#molecule-box');
  $deck = $('ul#deck');
  // clear the cards
  $deck.html("");
  clearTimer();
  // sets score to zero
  score = 0;
  // appends the current score to the DOM
  $('#score').text(score).appendTo($('#score-li'));
  // sets net charge to nothing on the DOM
  $('y').html("");
  // sets $chargesAdded to zero
  $chargesAdded = 0;
  // reset addChargesVar to an empty array
  addChargesVar = [];
};

// makes any boxes droppable and sets the draggable to variable "that"
// which allows the droppable to be accessible in other functions.
$box.droppable({
  // the cards need to fit onto the droppable for it to register
  tolerance: "fit",

  drop: function(event, ui){
    console.log('dropped');
    // once the card is dropped it will no longer revert to it's original position
    ui.draggable.draggable({
      revert: false,
    });
    // once card is dropped it is no longer draggable
    ui.draggable.draggable("disable");
    // setting the draggable to global variable "that"
    that = ui.draggable;
    // removes the dropped card form the box after 1 ms
    setTimeout(function() { ui.draggable.remove(); }, 1);
  }
});

// function to add charges and append them & the score to the DOM
function addCharge(that){
  console.log(that);
  $dataNew = that;
  // grabs the charge and sign from the dropped card as a string
  $chargesStr = that.draggable.context.innerText[0] + that.draggable.context.innerText[1];
  // parses the charges into integers so they can be used in calculations
  var charge = $.parseJSON($chargesStr);
  var $chargesAdded = 0;
  // pushed charges of each dropped card into the array addCharges
  addChargesVar.push(charge);
  // loop to add charges together and award points when net charge is zero
  for(var i=0, len = addChargesVar.length; i < len; i++){
    $chargesAdded += addChargesVar[i];
    console.log($chargesAdded);
    if($chargesAdded === 0){
      // increments the score
      score++;
      // puts the sum of charges on the DOM
      $('y').html($chargesAdded).appendTo($('chargeEq'));
      // puts the score on the DOM
      $('#score').text(score).appendTo($('#score-li'));
      // sets chargesAdded back to zero
      $chargesAdded = 0;
      // creates cards to replace the number of cards used for the previous point
      resetBoard();
    } else {
    $('y').html($chargesAdded).appendTo($('chargeEq'));
    };
  };
};

// adds the charges of the dropped cards.
function addOnDrop(e,that){
  console.log(e);
  console.log(that);
  // increments numberOfCardsUsed each time a card is dropped
  numberOfCardsUsed++;
  // sets the passed variable "that" as a new variable
  $newData = that;
  // instantiates the function addCharge and passes the parameter "that"
  addCharge(that);
  // creates a log of the used cards
  $currentDraggables.push(that);
  console.log($currentDraggables);
  console.log(addChargesVar);
};

function resetBoard(){
  // replaces previous net charge with nothing
  $('y').html("");
  //  sets $chargesAdded to zero
  $chargesAdded = 0;
  // resets addChargesVar to an empty array
  addChargesVar = [];
  // creates a new random card for each card used for the last point
  for(var i=0; i < numberOfCardsUsed; i++){
    atomicNumber = atomicNumbers[Math.floor(Math.random() * atomicNumbers.length)];
    element = elements[parseInt(atomicNumber, 10)];
    var card = new Card(element);
    card.init();
  };
  // resets the numberOfCardsUsed to zero
  numberOfCardsUsed = 0;
};

function setBestScore(){
  if(score > bestScore){
    // sets the current score as the best score
    bestScore = score;
    // sets the date the new best score was achieved
    bestScoreDate = Date.now;
  }; //else {
    // best score stays the same
  //   bestScore = bestScore;
  // }
};
