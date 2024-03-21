const { expect } = require('chai')
const curry = require('../Ejercicios/16-Curry/Curry')

xdescribe('Curring', function () {
  const calcAllFour = (var1, var2, var3, var4) => {
    return var1 + var2 - var3 * var4
  }
  let curriedDoSomething
  beforeEach(() => {
    curriedDoSomething = curry(calcAllFour)
  })
  it('should return a function', function () {
    expect(typeof curry(calcAllFour)).to.equal('function')
  })
  it('next calls should return a function if not all the arguments where provided', function () {
    const firstReturn = curriedDoSomething(1)
    expect(typeof firstReturn).to.equal('function')
    const secondReturn = firstReturn(2, 3)
    expect(typeof secondReturn).to.equal('function')
  })
  it('should return the result of curried function when all the arguments are provided', function () {
    const firstReturn = curriedDoSomething(1)
    const secondReturn = firstReturn(2)
    const thirdReturn = secondReturn(3)
    const fourthReturn = thirdReturn(4)
    expect(fourthReturn).to.equal(-9)
  })
})
