class Element

  def self.find(atomic_number)
    self.new
  end

  def atomic_number
    1
  end

  def name
    "Hydrogen"
  end

  def symbol
    "H"
  end

  def electron_configuration
    "1s1"
  end

  def category
    "Hydrogen"
  end

  def charges
    [-1]
  end
end
