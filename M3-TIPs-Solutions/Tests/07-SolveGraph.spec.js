const { expect } = require('chai')
const SolveGraph = require('../Ejercicios/07-SolveGraph/SolveGraph')

xdescribe('SolveGraph', function () {
  const graph = {
    a: ['c'],
    b: ['c'],
    c: ['s', 'r'],
    d: ['a'],
    s: ['a', 'c'],
    r: ['d'],
    z: ['z']
  }
  it('should return true as we can get from a to r', function () {
    expect(SolveGraph(graph, 'a', 'r')).to.equal(true)
  })
  it('should return true as we can get from a to d', function () {
    expect(SolveGraph(graph, 'a', 'd')).to.equal(true)
  })
  it('should return false as we can not get from s to b', function () {
    expect(SolveGraph(graph, 's', 'b')).to.equal(false)
  })
})
