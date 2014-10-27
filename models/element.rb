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
      name: "Hydrogen",
      symbol: "H",
      electron_configuration: "1s1",
      category: "Hydrogen",
      charges: [-1]
    },
    2 => {}
  }
end
