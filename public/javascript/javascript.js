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
    this.atomicNumber = element.atomicNumber;
    this.name = element.name;
    this.symbol = element.symbol;
    this.electronConfiguration = element.electronConfiguration;
    this.category = element.category;
    this.charge = element.charges[0];
    this.charge2 = element.charges[1];
  }

  Card.prototype = {
    template: _.template($("#card-template").html()),

    render: function(){

    },

    init: function(){

    },
  }
  function populateBoard(){
    for(var i=0; i < 18; i++){
    }
  };
