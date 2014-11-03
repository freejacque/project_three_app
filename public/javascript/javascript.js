var $card = $('.card')
var $set;
var $box = $('.box');
var $that;
var $total;
var $score = 0;

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

// set the variables for
function setVariables(){
  $moleculeBox = $('#molecule-box');
  $deck = $('ul#deck');
  // clear the cards
  $deck.html("");
  clearTimer();
  $score = 0;
  $('#score').text($score).appendTo($('#score-li'));
  $('y').html("");
  $chargesAdded = 0;
  $addCharges = [];
};


// constructor method for a card. this grabs all of the information from the
function Card(element){
  this.element = element;
}

Card.prototype = {
  template: _.template($("#card-template").html()),

  // function for rendering the cards
  render: function(){
    console.log(' view:render', this);
    var temp = this.template({element: this.element});
    this.$element = $(temp);
    this.$element.draggable({
      snap: '.box',
      revert: true,
      snapMode: 'inner',
      stack: '.card',
    });
    return this;
  },

  init: function(){
    var view = this;
    if (!this.$element){
      view.render();
      $("#deck").append(view.$element);
    }
  },
};

function setTimer(){
  set();
  console.log(set);
};

// incremnets the counter by 1 and sets it as the timer html
function count(){
  $timer = $('#interval');
  $counter++;
  $timer.html($counter);
};

// executes the count function every second.
function set(){
  $set = setInterval(count, 1000);
};

// clears the interval and sets the counter to zero
function clearTimer(){
  clearInterval($set);
  $counter = 0;
};

// function to add charges and append them & the score to the DOM
function addCharges(that){
  console.log(that);
  $dataNew = that;
  // grabs the charge and sign from the dropped card as a string
  $chargesStr = that.draggable.context.innerText[0] + that.draggable.context.innerText[1];
  // parses the charges into integers so they can be used in calculations
  var charge = $.parseJSON($chargesStr);
  var $chargesAdded = 0;
  // pushed charges of each dropped card into teh array addCharges
  $addCharges.push(charge);
  // loop to add charges together and award points when net charge is zero
  for(var i=0, len = $addCharges.length; i < len; i++){
    $chargesAdded += $addCharges[i];
    console.log($chargesAdded);
    if($chargesAdded === 0){
      // increments the score
      $score++;
      // puts the sum of charges on the DOM
      $('y').html($chargesAdded).appendTo($('chargeEq'));
      // puts the score on the DOM
      $('#score').text($score).appendTo($('#score-li'));
      // sets chargesAdded back to zero
      $chargesAdded = 0;
    } else {
    $('y').html($chargesAdded).appendTo($('chargeEq'));
    };
  };
};


// makes the three boxes droppable and sets the draggable to variable $that
// which allows it to be accessed in other functions.
$box.droppable({
  tolerance: "fit",

  drop: function(event, ui){
    console.log('dropped');
    ui.draggable.draggable("disable");
    ui.draggable.revert("disable");
    $that = ui.draggable;
  }
});

// adds the charges of the dropped cards.
function addOnDrop(e,$that){
  console.log(e);
  console.log($that);
  $newData = $that;
  addCharges($that);
  console.log($addCharges);
};

function resetDroppables(){

}
