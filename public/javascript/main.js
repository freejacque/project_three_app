

$( document ).ready(function() {
  console.log( "ready!" );
  window = $('window');
  body = $('body');

  atomicNumbers = [];
  deck = [];
  elements = {
    1: {
      atomicNumber: 1,
      name: "hydrogen",
      symbol: "H",
      electronConfiguration: "1",
      category: "hydrogen",
      charges: [-1, +1]
    },
    2: {
      atomicNumber: 2,
      name: "helium",
      symbol: "He",
      electronConfiguration: "2",
      category: "noble gas",
      charges: [0]
    },
    3: {
      atomicNumber: 3,
      name: "lithium",
      symbol: "Li",
      electronConfiguration: "2-1",
      category: "metal",
      charges: [+1]
    },
    4: {
      atomicNumber: 4,
      name: "beryllium",
      symbol: "Be",
      electronConfiguration: "2-2",
      category: "metal",
      charges: [+2]
      },
    5: {
      atomicNumber: 5,
      name: "boron",
      symbol: "B",
      electronConfiguration: "2-3",
      category: "metalloid",
      charges: [+3]
      },
    6: {
      atomicNumber: 6,
      name: "carbon",
      symbol: "C",
      electronConfiguration: "2-4",
      category: "nonmetal",
      charges: [-4, +4]
      },
    7: {
      atomicNumber: 7,
      name: "nitrogen",
      symbol: "N",
      electronConfiguration: "2-5",
      category: "nonmetal",
      charges: [-3]
      },
    8: {
      atomicNumber: 8,
      name: "oxygen",
      symbol: "O",
      electronConfiguration: "2-6",
      category: "nonmetal",
      charges: [-2]
      },
    9: {
      atomicNumber: 9,
      name: "fluorine",
      symbol: "F",
      electronConfiguration: "2-7",
      category: "nonmetal",
      charges: [-1]
      },
    10: {
      atomicNumber: 10,
      name: "neon",
      symbol: "Ne",
      electronConfiguration: "2-8",
      category: "noble gas",
      charges: [0]
      },
    11: {
      atomicNumber: 11,
      name: "sodium",
      symbol: "Na",
      electronConfiguration: "2-8-1",
      category: "metal",
      charges: [-1]
    },
    12: {
      atomicNumber: 12,
      name: "magnesium",
      symbol: "Mg",
      electronConfiguration: "2-8-2",
      category: "metal",
      charges: [+2]
      },
    13: {
      atomicNumber: 13,
      name: "aluminum",
      symbol: "Al",
      electronConfiguration: "2-8-3",
      category: "metal",
      charges: [+2]
      },
    14: {
      atomicNumber: 14,
      name: "silicon",
      symbol: "Si",
      electronConfiguration: "2-8-4",
      category: "metalloid",
      charges: [-4, +4]
      },
    15: {
      atomicNumber: 15,
      name: "phosphorus",
      symbol: "P",
      electronConfiguration: "2-8-5",
      category: "nonmetal",
      charges: [-3]
      },
    16: {
      atomicNumber: 16,
      name: "sulfur",
      symbol: "S",
      electronConfiguration: "2-8-6",
      category: "nonmetal",
      charges: [-2]
      },
    17: {
      atomicNumber: 17,
      name: "chlorine",
      symbol: "Cl",
      electronConfiguration: "2-8-7",
      category: "nonmetal",
      charges: [-1]
      },
    18: {
      atomicNumber: 18,
      name: "argon",
      symbol: "Ar",
      electronConfiguration: "2-8-8",
      category: "noble gas",
      charges: [0]
      },
    19: {
      atomicNumber: 19,
      name: "potassium",
      symbol: "K",
      electronConfiguration: "2-8-8-1",
      category: "metal",
      charges: [+1]
      },
    20: {
      atomicNumber: 20,
      name: "calcium",
      symbol: "Ca",
      electronConfiguration: "2-8-8-2",
      category: "metal",
      charges: [+2]
      },
    26: {
      atomicNumber: 26,
      name: "iron",
      symbol: "Fe",
      electronConfiguration: "2-8-14-2",
      category: "trans metal",
      charges: [+2, +3]
      },
    27: {
      atomicNumber: 27,
      name: "cobalt",
      symbol: "Co",
      electronConfiguration: "2-8-15-2",
      category: "trans metal",
      charges: [+2, +3]
      },
    28: {
      atomicNumber: 28,
      name: "nickel",
      symbol: "Ni",
      electronConfiguration: "2-8-16-2",
      category: "trans metal",
      charges: [+2, +3]
      },
    29: {
      atomicNumber: 29,
      name: "copper",
      symbol: "Cu",
      electronConfiguration: "2-8-18-1",
      category: "trans metal",
      charges: [+1, +2]
      },
    30: {
      atomicNumber: 30,
      name: "zinc",
      symbol: "Zn",
      electronConfiguration: "2-8-8-1",
      category: "trans metal",
      charges: [+2]
      },
    31: {
      atomicNumber: 31,
      name: "gallium",
      symbol: "Ga",
      electronConfiguration: "2-8-18-3",
      category: "metal",
      charges: [+3]
      },
    32: {
      atomicNumber: 32,
      name: "germanium",
      symbol: "Ge",
      electronConfiguration: "2-8-18-4",
      category: "metalloid",
      charges: [-4, +4]
      },
    33: {
      atomicNumber: 33,
      name: "arsenic",
      symbol: "As",
      electronConfiguration: "2-8-18-5",
      category: "metalloid",
      charges: [-3]
      },
    34: {
      atomicNumber: 34,
      name: "selenium",
      symbol: "Se",
      electronConfiguration: "2-8-18-6",
      category: "nonmetal",
      charges: [-2]
      },
    35: {
      atomicNumber: 35,
      name: "bromine",
      symbol: "Br",
      electronConfiguration: "2-8-18-7",
      category: "nonmetal",
      charges: [-1]
      },
    36: {
      atomicNumber: 36,
      name: "krypton",
      symbol: "Kr",
      electronConfiguration: "2-8-18-8",
      category: "noble gas",
      charges: [0]
      },
  };

  window.onload = function(){
    seedAtomicNumbers();
    getElements();

  };



});  //document ready function end(don't erase!!!!)



