const { expect } = require('chai')
const SumArray = require('../Ejercicios/02-SumArray/SumArray')

xdescribe('Sumarray(arr, n)', function () {
  it('should return true when there is a combination of two numbers that sums n', function () {
    expect(SumArray([2, 4, 5, 9], 9)).to.equal(true)
  })
  it('should return false when no combination of two numbers sums n', function () {
    expect(SumArray([2, 4, 5, 9], 12)).to.equal(false)
  })
  it('should not sum the same number twice to reach n', function () {
    expect(SumArray([2, 5, 9], 4)).to.equal(false)
  })

  xdescribe('Extra: unordered array', function () {
    it('should return true when there is a combination of two numbers that sums n', function () {
      expect(SumArray([4, 2, 9, 5], 7)).to.equal(true)
    })
    it('should return false when no combination of two numbers sums n', function () {
      expect(SumArray([5, 2, 9, 4], 12)).to.equal(false)
    })
  })
})
