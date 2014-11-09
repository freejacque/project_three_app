
rules  = "The object of the game is to create an ionic compound." +
          "You can do this by bonding positively charged ions and" +
          "negatively charged ions until they create a net charge of zero." +
          "Each card is labeled in the upper right corner with a charge." +
          "Once the net charge equals zero you will earn a point." +
          "Earn as many points as you can in one minute."


function demoCard(){
  atomicNumber = 1;
  element = elements[parseInt(atomicNumber, 10)];
  var card = new Card(element);
  debugger
  card.rulesInit();
};

function showRules(){
  $rulesDiv = $('<div class="modal" id="rules">').html(rules).appendTo($deck);
  demoCard();
  console.log('rules are being shown');
};

