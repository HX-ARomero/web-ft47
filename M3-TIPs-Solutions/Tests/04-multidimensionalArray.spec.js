const { expect } = require('chai')
const mdArraySum = require('../Ejercicios/04-MultidimensionalSumArray/MultidimensionalSumArray')

xdescribe('MultidimensionalSumArray', function () {
  it('should return the sum of all numbers of a simple array', function () {
    expect(mdArraySum([1, 2, 3, 4])).to.equal(10)
  })
  it('should return the sum of all numbers of an array of arrays', function () {
    expect(mdArraySum([[2, 4], [1], [4, 2, 1]])).to.equal(14)
  })
  it('should return the sum of all numbers of a multidensional array', function () {
    expect(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])).to.equal(26)
  })
})
