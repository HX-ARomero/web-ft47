const { expect } = require('chai')
const FindWordStartingWith = require('../Ejercicios/08-FindWordStartingWith/FindWordStartingWith')

xdescribe('FindWordStartingWith', function () {
  const book = {
    id: 1,
    text:
      'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
  }
  it("should return all the indexes of words starting with 'de'", () => {
    expect(FindWordStartingWith(book, 'de')).to.deep.equal([23])
  })
  it("should return all the indexes of words starting with 'un'", () => {
    expect(FindWordStartingWith(book, 'un')).to.deep.equal([6, 14, 43])
  })
  it('should return an empty array if the word is not in the book', () => {
    expect(FindWordStartingWith(book, 'franco')).to.deep.equal([])
  })
  it('should be case insensitive & works for the first word', () => {
    expect(FindWordStartingWith(book, 'era')).to.deep.equal([0, 39])
  })
})
