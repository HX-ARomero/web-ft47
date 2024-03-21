const { expect } = require('chai')
const { Node, MinStack } = require('../Ejercicios/05-MinStack/MinStack')

xdescribe('Node', function () {
  it('should have property value initilized with parameter passed', () => {
    const node = new Node(4)
    expect(node.value).to.equal(4)
  })
  it('should have property next initilized with null', () => {
    const node = new Node(4)
    expect(node.next).to.equal(null)
  })
})

xdescribe('MinStack', function () {
  let minStack
  beforeEach(() => {
    minStack = new MinStack()
  })
  it('shouled create a MinStack with top equals to null', () => {
    expect(minStack.top).to.equal(null)
  })
  it('should have method push', () => {
    expect(typeof minStack.push).to.equal('function')
  })
  it('should have method pop', () => {
    expect(typeof minStack.pop).to.equal('function')
  })
  it('should have method min', () => {
    expect(typeof minStack.min).to.equal('function')
  })
  it('should have method peek', () => {
    expect(typeof minStack.peek).to.equal('function')
  })
  it('push should insert on top of the stack', () => {
    expect(minStack.top).to.equal(null)
    minStack.push(4)
    expect(minStack.top.value).to.equal(4)
    minStack.push(1)
    expect(minStack.top.value).to.equal(1)
    minStack.push(1000)
    expect(minStack.top.value).to.equal(1000)
  })
  it('pop should get from the top of the stack, remove it from the Stack and return its value', () => {
    minStack.push(4)
    minStack.push(1)
    minStack.push(1000)
    expect(minStack.pop()).to.equal(1000)
    expect(minStack.pop()).to.equal(1)
    expect(minStack.pop()).to.equal(4)
  })
  it("peek should get Stack's top value without removing it", () => {
    minStack.push(4)
    minStack.push(1)
    minStack.push(1000)
    expect(minStack.peek()).to.equal(1000)
    expect(minStack.peek()).to.equal(1000)
  })
  it('min should return the minimum value of the Stack', () => {
    minStack.push(4)
    minStack.push(1)
    minStack.push(1000)
    minStack.push(0.5)
    minStack.push(5000)
    minStack.push(0.1)

    expect(minStack.min()).to.equal(0.1)
    minStack.pop()
    expect(minStack.min()).to.equal(0.5)
  })
})
