
$rulesText  = $('<ul id="rules-ul"><li>The object of the game is to create an ionic compound.</li>' +
          '<li>You can do this by bonding positively charged ions and</li>' +
          '<li>negatively charged ions until they create a net charge of zero.</li>' +
          '<li>Each card is labeled in the upper right corner with a charge.</li>' +
          '<li>Once the net charge equals zero you will earn a point.</li>' +
          '<li>Earn as many points as you can in one minute by dragging cards </li>' +
          '<li>and dropping them on the gray square on the right of the board.</li></ul>');

// creates a demo card for the rules
function demoCard(){
  atomicNumber = 1;
  element = elements[parseInt(atomicNumber, 10)];
  var card = new Card(element);
  card.rulesInit();
};

// creates a rules div, displays rules content & appends to DOM
function showRules(){
  $rulesDiv = $('<div class="modal" id="rules"></div>').appendTo($deck);
  $rulesTitle = $('<h2 class="modal-title">Rules</h2>').appendTo($rulesDiv);
  $rulesSpan = $('<span id="rules-text"></span>').appendTo($rulesDiv);
  $rulesText.appendTo($rulesSpan);
  $demoCardDiv = $('<div class="demo-card-div">').appendTo($rulesDiv);
  demoCard();
  console.log('rules are being shown');
  $rulesDiv.on('click', removeRulesDiv);
};

// removes a div from the DOM
function removeDiv(divToDelete){
  divToDelete.detach();
  console.log("div deleted");
};

function removeRulesDiv(){
  removeDiv($rulesDiv);
};
