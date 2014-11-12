

$( document ).ready(function() {
  console.log( "ready!" );
  // setting variables for use throughout the app.
  $window = $('window');
  $mainPage = $('main-page');
  $body = $('body');
  $newGame = $('#new-game');
  counter = 0;
  addCharges = [];
  $chemEq = $('li#chemical-equation');
  $chargeEq = $('li#charge-equation');
  $box1 = $('.box#1');
  atomicNumbers = [];
  deck = [];
  $deckDiv  = $('.deck-div');
  $stats = $('#player-stats');
  $rules = $('#game-rules');
  $timer = $('#interval');


  // elements were selected for their frequent use.
  // the information included is specific to the NYC chemistry regents.
  elements = {
    1: {
      atomicNumber: 1,
      name: "hydrogen",
      symbol: "H",
      electronConfiguration: "1",
      category: "hydrogen",
      charges: [+1],
      compoundName: "hydrogen"
    },
    2: {
      atomicNumber: 2,
      name: "helium",
      symbol: "He",
      electronConfiguration: "2",
      category: "noble gas",
      charges: [0],
      compoundName: "helium"
    },
    3: {
      atomicNumber: 3,
      name: "lithium",
      symbol: "Li",
      electronConfiguration: "2-1",
      category: "metal",
      charges: [+1],
      compoundName: "lithium"
    },
    4: {
      atomicNumber: 4,
      name: "beryllium",
      symbol: "Be",
      electronConfiguration: "2-2",
      category: "metal",
      charges: [+2],
      compoundName: "beryllium"
      },
    5: {
      atomicNumber: 5,
      name: "boron",
      symbol: "B",
      electronConfiguration: "2-3",
      category: "metalloid",
      charges: [+3],
      compoundName: "boron"
      },
    6: {
      atomicNumber: 6,
      name: "carbon",
      symbol: "C",
      electronConfiguration: "2-4",
      category: "nonmetal",
      charges: [-4],
      compoundName: "carbonide"
      },
    7: {
      atomicNumber: 7,
      name: "nitrogen",
      symbol: "N",
      electronConfiguration: "2-5",
      category: "nonmetal",
      charges: [-3],
      compoundName: "nitride"
      },
    8: {
      atomicNumber: 8,
      name: "oxygen",
      symbol: "O",
      electronConfiguration: "2-6",
      category: "nonmetal",
      charges: [-2],
      compoundName: "oxide"
      },
    9: {
      atomicNumber: 9,
      name: "fluorine",
      symbol: "F",
      electronConfiguration: "2-7",
      category: "nonmetal",
      charges: [-1],
      compoundName: "fluoride"
      },
    10: {
      atomicNumber: 10,
      name: "neon",
      symbol: "Ne",
      electronConfiguration: "2-8",
      category: "noble gas",
      charges: [0],
      compoundName: "neon",
      },
    11: {
      atomicNumber: 11,
      name: "sodium",
      symbol: "Na",
      electronConfiguration: "2-8-1",
      category: "metal",
      charges: [+1],
      compoundName: "sodium"
    },
    12: {
      atomicNumber: 12,
      name: "magnesium",
      symbol: "Mg",
      electronConfiguration: "2-8-2",
      category: "metal",
      charges: [+2],
      compoundName: "magnesium"
      },
    13: {
      atomicNumber: 13,
      name: "aluminum",
      symbol: "Al",
      electronConfiguration: "2-8-3",
      category: "metal",
      charges: [+3],
      compoundName: "aluminum"
      },
    14: {
      atomicNumber: 14,
      name: "silicon",
      symbol: "Si",
      electronConfiguration: "2-8-4",
      category: "metalloid",
      charges: [+4],
      compoundName: "silicon"
      },
    15: {
      atomicNumber: 15,
      name: "phosphorus",
      symbol: "P",
      electronConfiguration: "2-8-5",
      category: "nonmetal",
      charges: [-3],
      compoundName: "phosphide"
      },
    16: {
      atomicNumber: 16,
      name: "sulfur",
      symbol: "S",
      electronConfiguration: "2-8-6",
      category: "nonmetal",
      charges: [-2],
      compoundName: "sulfide"
      },
    17: {
      atomicNumber: 17,
      name: "chlorine",
      symbol: "Cl",
      electronConfiguration: "2-8-7",
      category: "nonmetal",
      charges: [-1],
      compoundName: "chloride"
      },
    18: {
      atomicNumber: 18,
      name: "argon",
      symbol: "Ar",
      electronConfiguration: "2-8-8",
      category: "noble gas",
      charges: [0],
      compoundName: "argon"
      },
    19: {
      atomicNumber: 19,
      name: "potassium",
      symbol: "K",
      electronConfiguration: "2-8-8-1",
      category: "metal",
      charges: [+1],
      compoundName: "potassium"
      },
    20: {
      atomicNumber: 20,
      name: "calcium",
      symbol: "Ca",
      electronConfiguration: "2-8-8-2",
      category: "metal",
      charges: [+2],
      compoundName: "calcium"
      },
    26: {
      atomicNumber: 26,
      name: "iron",
      symbol: "Fe",
      electronConfiguration: "2-8-14-2",
      category: "trans metal",
      charges: [+2],
      compoundName: "iron"
      },
    27: {
      atomicNumber: 27,
      name: "cobalt",
      symbol: "Co",
      electronConfiguration: "2-8-15-2",
      category: "trans metal",
      charges: [+2],
      compoundName: "cobalt"
      },
    28: {
      atomicNumber: 28,
      name: "nickel",
      symbol: "Ni",
      electronConfiguration: "2-8-16-2",
      category: "trans metal",
      charges: [+2],
      compoundName: "nickel"
      },
    29: {
      atomicNumber: 29,
      name: "copper",
      symbol: "Cu",
      electronConfiguration: "2-8-18-1",
      category: "trans metal",
      charges: [+2],
      compoundName: "copper"
      },
    30: {
      atomicNumber: 30,
      name: "zinc",
      symbol: "Zn",
      electronConfiguration: "2-8-8-1",
      category: "trans metal",
      charges: [+2],
      compoundName: "zinc"
      },
    31: {
      atomicNumber: 31,
      name: "gallium",
      symbol: "Ga",
      electronConfiguration: "2-8-18-3",
      category: "metal",
      charges: [+3],
      compoundName: "gallium"
      },
    32: {
      atomicNumber: 32,
      name: "germanium",
      symbol: "Ge",
      electronConfiguration: "2-8-18-4",
      category: "metalloid",
      charges: [+4],
      compoundName: "germanium"
      },
    33: {
      atomicNumber: 33,
      name: "arsenic",
      symbol: "As",
      electronConfiguration: "2-8-18-5",
      category: "metalloid",
      charges: [-3],
      compoundName: "arsenide"
      },
    34: {
      atomicNumber: 34,
      name: "selenium",
      symbol: "Se",
      electronConfiguration: "2-8-18-6",
      category: "nonmetal",
      charges: [-2],
      compoundName: "selenide"
      },
    35: {
      atomicNumber: 35,
      name: "bromine",
      symbol: "Br",
      electronConfiguration: "2-8-18-7",
      category: "nonmetal",
      charges: [-1],
      compoundName: "bromide"
      },
    36: {
      atomicNumber: 36,
      name: "krypton",
      symbol: "Kr",
      electronConfiguration: "2-8-18-8",
      category: "noble gas",
      charges: [0],
      compoundName: "krypton"
      },
  };

  // on onload the atomic numbers are seeded into the atomicNumbers array
  // event listeners are added to the newGame button and the drop box
    seedAtomicNumbers();
    $newGame.on('click', getElements);
    $rules.on('click', showRules);
    $stats.on('click', showStats);
    $box1.on('drop', addOnDrop);
});  //document ready function end(don't erase!!!!)



