var $card = $('.card')
var $set;
var $box = $('.box');

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
        // revert: true,
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

  $box.droppable({
    drop: function(event, ui){
      console.log('dropped');
      $box.css({visibility: 'hidden'});
    }
  });
