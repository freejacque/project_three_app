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


function setVariables(){
  $moleculeBox = $('#molecule-box');
  $('ul#deck').html("");
  clearTimer();
  $score = 0;
  $('#score').text($score).appendTo($('#score-li'));
  $('y').html("");
  $chargesAdded = 0;
  $addCharges = [];
};

function Card(element){
  this.element = element;
}

Card.prototype = {
  template: _.template($("#card-template").html()),

  render: function(){
    console.log(' view:render', this);
    var temp = this.template({element: this.element});
    this.$element = $(temp);
    this.$element.draggable({
      snap: '.box',
      // revert: true,
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

function count(){
  $timer = $('#interval');
  $counter++;
  $timer.html($counter);
};

function set(){
  $set = setInterval(count, 1000);
};

function clearTimer(){
  clearInterval($set);
  $counter = 0;
};

function addCharges(that){
  console.log(that);
  $dataNew = that;
  $chargesStr = that.draggable.context.innerText[0] + that.draggable.context.innerText[1];
  var charge = $.parseJSON($chargesStr);
  var $chargesAdded = 0;
  $addCharges.push(charge);
  for(var i=0, len = $addCharges.length; i < len; i++){
    $chargesAdded += $addCharges[i];
    console.log($chargesAdded);
    if($chargesAdded === 0){
      $score++;
      $('y').html($chargesAdded).appendTo($('chargeEq'));
      $('#score').text($score).appendTo($('#score-li'));
      $chargesAdded = 0;
    } else {
    $('y').html($chargesAdded).appendTo($('chargeEq'));
    };
  };
};

$box.droppable({
  tolerance: "fit",

  drop: function(event, ui){
    console.log('dropped');
    ui.draggable.draggable("disable");
    $that = ui.draggable;
    // $that.remove();
    // $box.css({visibility: 'hidden'});
  }
});

function addOnDrop(e,$that){
      console.log(e);
      console.log($that);
      $newData = $that;
      addCharges($that);
      console.log($addCharges);
    };

