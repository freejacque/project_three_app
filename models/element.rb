class Element
  attr_reader :atomic_number, :name, :symbol,
               :electron_configuration, :category, :charges

  def initialize(atomic_number, name, symbol, electron_configuration, category, charges)
    @atomic_number = atomic_number
    @name          = name
    @symbol        = symbol
    @electron_configuration = electron_configuration
    @category      = category
    @charges       = charges
  end

  def self.find(atomic_number)
    element = @@elements[atomic_number]
    self.new(atomic_number, element[:name], element[:symbol],
             element[:electron_configuration], element[:category], element[:charges])
  end

  @@elements = {
    1 => {
      name: "hydrogen",
      symbol: "H",
      electron_configuration: "1",
      category: "hydrogen",
      charges: [-1, +1]
    },
    2 => {
      name: "helium",
      symbol: "He",
      electron_configuration: "2",
      category: "noble gas",
      charges: [0]
    },
    3 => {
      name: "lithium",
      symbol: "Li",
      electron_configuration: "2-1",
      category: "metal",
      charges: [+1]
    },
    4 => {
      name: "beryllium",
      symbol: "Be",
      electron_configuration: "2-2",
      category: "metal",
      charges: [+2]
      },
    5 => {
      name: "boron",
      symbol: "B",
      electron_configuration: "2-3",
      category: "metalloid",
      charges: [+3]
      },
    6 => {
      name: "carbon",
      symbol: "C",
      electron_configuration: "2-4",
      category: "nonmetal",
      charges: [-4, +4]
      },
    7 => {
      name: "nitrogen",
      symbol: "N",
      electron_configuration: "2-5",
      category: "nonmetal",
      charges: [-3]
      },
    8 => {
      name: "oxygen",
      symbol: "O",
      electron_configuration: "2-6",
      category: "nonmetal",
      charges: [-2]
      },
    9 => {
      name: "fluorine",
      symbol: "F",
      electron_configuration: "2-7",
      category: "nonmetal",
      charges: [-1]
      },
    10 => {
      name: "neon",
      symbol: "Ne",
      electron_configuration: "2-8",
      category: "noble gas",
      charges: [0]
      },
    11 => {
      name: "sodium",
      symbol: "Na",
      electron_configuration: "2-8-1",
      category: "metal",
      charges: [-1]
    },
    12 => {
      name: "magnesium",
      symbol: "Mg",
      electron_configuration: "2-8-2",
      category: "metal",
      charges: [+2]
      },
    13 => {
      name: "aluminum",
      symbol: "Al",
      electron_configuration: "2-8-3",
      category: "metal",
      charges: [+2]
      },
    14 => {
      name: "silicon",
      symbol: "Si",
      electron_configuration: "2-8-4",
      category: "metalloid",
      charges: [-4, +4]
      },
    15 => {
      name: "phosphorus",
      symbol: "P",
      electron_configuration: "2-8-5",
      category: "nonmetal",
      charges: [-3]
      },
    16 => {
      name: "sulfur",
      symbol: "S",
      electron_configuration: "2-8-6",
      category: "nonmetal",
      charges: [-2]
      },
    17 => {
      name: "chlorine",
      symbol: "Cl",
      electron_configuration: "2-8-7",
      category: "nonmetal",
      charges: [-1]
      },
    18 => {
      name: "argon",
      symbol: "Ar",
      electron_configuration: "2-8-8",
      category: "noble gas",
      charges: [0]
      },
    19 => {
      name: "potassium",
      symbol: "K",
      electron_configuration: "2-8-8-1",
      category: "metal",
      charges: [+1]
      },
    20 => {
      name: "calcium",
      symbol: "Ca",
      electron_configuration: "2-8-8-2",
      category: "metal",
      charges: [+2]
      },
    26 => {
      name: "iron",
      symbol: "Fe",
      electron_configuration: "2-8-14-2",
      category: "transition metal",
      charges: [+2, +3]
      },
    27 => {
      name: "cobalt",
      symbol: "Co",
      electron_configuration: "2-8-15-2",
      category: "transition metal",
      charges: [+2, +3]
      },
    28 => {
      name: "nickel",
      symbol: "Ni",
      electron_configuration: "2-8-16-2",
      category: "transition metal",
      charges: [+2, +3]
      },
    29 => {
      name: "copper",
      symbol: "Cu",
      electron_configuration: "2-8-18-1",
      category: "transition metal",
      charges: [+1, +2]
      },
    30 => {
      name: "zinc",
      symbol: "Zn",
      electron_configuration: "2-8-8-1",
      category: "transition metal",
      charges: [+2]
      },
    31 => {
      name: "gallium",
      symbol: "Ga",
      electron_configuration: "2-8-18-3",
      category: "metal",
      charges: [+3]
      },
    32 => {
      name: "germanium",
      symbol: "Ge",
      electron_configuration: "2-8-18-4",
      category: "metalloid",
      charges: [-4, +4]
      },
    33 => {
      name: "arsenic",
      symbol: "As",
      electron_configuration: "2-8-18-5",
      category: "metalloid",
      charges: [-3]
      },
    34 => {
      name: "selenium",
      symbol: "Se",
      electron_configuration: "2-8-18-6",
      category: "nonmetal",
      charges: [-2]
      },
    35 => {
      name: "bromine",
      symbol: "Br",
      electron_configuration: "2-8-18-7",
      category: "nonmetal",
      charges: [-1]
      },
    36 => {
      name: "krypton",
      symbol: "Kr",
      electron_configuration: "2-8-18-8",
      category: "noble gas",
      charges: [0]
      },
  }
end
