var $card = $('.card')
var $set;
var $box = $('.box');
var $that;
var $netCharge = 0;
function seedAtomicNumbers(){
    for(i=1; i <= 20; i++){
      atomicNumbers.push(i);
    };
    for(i=26; i <= 36; i++){
      atomicNumbers.push(i);
    };
  };

function getElements(){
  $moleculeBox = $('#molecule-box');
  $('ul#deck').html("");
  clearTimer();
  for(var i=0; i < 15; i++){
    atomicNumber = atomicNumbers[Math.floor(Math.random() * atomicNumbers.length)];
    element = elements[parseInt(atomicNumber, 10)];
    var card = new Card(element);
    card.init();
  }
  setTimer();
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
  var $charge = $.parseJSON($chargesStr);
  $addCharges.push($charge);
  // $chargeEq.text($addCharges).appendTo($chargeEq);
  $chargesAdded = 0;
  for(var i=0, len=addCharges.length; i < len; i++){
    var $total = $chargesAdded += $addCharges[i];
    if($total === $netCharge){
      $chargeEq.text($netCharge).appendTo($chargeEq);
    } else {
      $chargeEq.text($total).appendTo($chargeEq);
    };
  };
};

$box.droppable({
  tolerance: "fit",
  drop: function(event, ui){
    console.log('dropped');
    ui.draggable.draggable("disable");
    $that = ui.draggable;
    $thatId = ui.draggable.prop('id');
    console.log($thatId);
    // $box.css({visibility: 'hidden'});
  }
});

function addOnDrop(e,$that){
      console.log(e);
      console.log($that);
      $newData = $that;
      addCharges($that);
    };

