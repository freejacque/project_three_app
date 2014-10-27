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
      deck.push(element);
    }
  };

  function populateBoard(){
    for(var i=0; i < 18; i++){
      $('<div>')
    }
  };
