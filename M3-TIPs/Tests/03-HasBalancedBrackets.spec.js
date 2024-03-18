const { expect } = require('chai')
const HasBalanceBrackets = require('../Ejercicios/03-HasBalancedBrackets/HasBalancedBrackets')

describe('HasBalanceBrackets', function () {
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
