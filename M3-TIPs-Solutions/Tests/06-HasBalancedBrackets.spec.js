const { expect } = require('chai')
const HasBalanceBrackets = require('../Ejercicios/06-HasBalancedBrackets/HasBalancedBrackets')

xdescribe('HasBalanceBrackets', function () {
  it('should return true if called with {[]()}', function () {
    expect(HasBalanceBrackets('{[]()}')).to.equal(true)
  })
  it('should return false if called with {[(])}', function () {
    expect(HasBalanceBrackets('{[(])}')).to.equal(false)
  })
  it('should return false if called with {[(', function () {
    expect(HasBalanceBrackets('{[(')).to.equal(false)
  })
  it('should return true if called with {[([{()[]{}}])]}', function () {
    expect(HasBalanceBrackets('{[([{()[]{}}])]}')).to.equal(true)
  })
  it('should return false if called with {[]}}', function () {
    expect(HasBalanceBrackets('{[]}}')).to.equal(false)
  })
})
