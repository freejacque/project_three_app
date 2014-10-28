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
    }
  };

  function Card(element){
    this.element = element;
    // this.atomicNumber = element.atomicNumber;
    // this.name = element.name;
    // this.symbol = element.symbol;
    // this.electronConfiguration = element.electronConfiguration;
    // this.category = element.category;
    // this.charge = element.charges[0];
    // this.charge2 = element.charges[1];
  }

  Card.prototype = {
    template: _.template($("#card-template").html()),

    render: function(){
      console.log(' view:render', this);
      var temp = this.template({element: this.element});
      this.$element = $(temp);

      return this;
    },

    init: function(){
      console.log(' view:init', this);
      var view = this;
      if (!this.$element){
        view.render();
        $("#card").append(view.$element);
        console.log(this.$element);
      }
    },
  };

  function populateBoard(){
    for(var i=0; i < 18; i++){
    }
  };
