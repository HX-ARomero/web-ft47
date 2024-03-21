const { expect } = require('chai')
const intersection = require('../Ejercicios/12-Intersection/Intersection')

xdescribe('Intersection', function () {
  it('should return numbers that are in both arrays', function () {
    expect(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])).to.deep.equal([3, 10])
  })
  it('should return an empty array if there is no intersection', function () {
    expect(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])).to.deep.equal([])
  })

  xdescribe('Extra: unordered arrays', function () {
    it('should return numbers that are in both arrays', function () {
      expect(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])).to.be.an('array').that.includes(3)
      expect(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])).to.be.an('array').that.includes(10)
    })
  })
})
