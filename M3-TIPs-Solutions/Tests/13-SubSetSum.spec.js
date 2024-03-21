const { expect } = require('chai')
const subSetSum = require('../Ejercicios/13-SubSetSum/SubSetSum')

xdescribe('SubSetSum', function () {
  it('should return true as 1 + 5 + 3 equals 9', function () {
    expect(subSetSum([1, 10, 5, 3], 9)).to.equals(true)
  })
  it('should return true as 1 + 10 + 5 + 3 equals 19', function () {
    expect(subSetSum([1, 10, 5, 3], 19)).to.equals(true)
  })
  it('should return fale as we can not sum 2', function () {
    expect(subSetSum([1, 10, 5, 3], 2)).to.equals(false)
  })
  it('should return true as 10 + 0 equals 10', function () {
    expect(subSetSum([1, 10, 5, 3], 10)).to.equals(true)
  })
})
