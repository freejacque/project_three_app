describe 'Element' do
  # describe '#initialize' do
  #   it 'creates a new element' do
  #     expect(Element.new).to be_a_kind_of(Element)
  #   end
  # end

  describe '.find' do
    it 'returns the element with the given atomic number' do
      hydrogen = Element.find(1)
      expect(hydrogen.atomic_number).to eq(1)
    end
  end

  describe '#name, #symbol, #electron_configuration, #category, #charges' do
    it 'return an element\'s properties' do
      hydrogen = Element.find(1)
      expect(hydrogen.name).to eq('hydrogen')
      expect(hydrogen.symbol).to eq('H')
      expect(hydrogen.electron_configuration).to eq('1')
      expect(hydrogen.category).to eq('hydrogen')
      expect(hydrogen.charges).to eq([-1, +1])
    end
  end
end
