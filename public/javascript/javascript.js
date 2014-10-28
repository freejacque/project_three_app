var $card = $('.card')



function seedAtomicNumbers(){
    for(i=1; i <= 20; i++){
      atomicNumbers.push(i);
    };
    for(i=26; i <= 36; i++){
      atomicNumbers.push(i);
    };
  };

  function getElements(){
    for(var i=0; i < 18; i++){
      atomicNumber = atomicNumbers[Math.floor(Math.random() * atomicNumbers.length)];
      element = elements[parseInt(atomicNumber, 10)];
      var card = new Card(element);
      // debugger
      card.init();
    }
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
        snap: true,
        revert: true,
      });
      this.$element.droppable( {
          drop: function(ev, ui) {
            var dragElement = ui.draggable;
            // dragElement.draggable( 'disable' );
            dragElement.draggable( 'option', 'revert', false );

          }
        });
      return this;
    },

    init: function(){
      console.log(' view:init', this);
      var view = this;
      if (!this.$element){
        view.render();
        $("#deck").append(view.$element);
        console.log(this.$element);
      }
    },
  };

  function setTimer(){
    $gameHeader = $('.game-header')
    var set = setInterval(count, 1000);
    console.log(set);
  };

  function count(){
    $timer = $('.timer');
    $counter += 1;
    $timer.html("Time: " + $counter + "s");

  };
