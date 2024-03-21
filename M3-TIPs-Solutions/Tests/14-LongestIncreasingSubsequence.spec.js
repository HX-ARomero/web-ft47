const { expect } = require('chai')
const longestIncreasingSubsequence = require('../Ejercicios/14-LongestIncreasingSubSequence/LongestIncreasingSubSequence')

xdescribe('LongestIncreasingSubSequence', function () {
  it('should return 3 as the longest increasing sequence is 3,4,5', function () {
    expect(longestIncreasingSubsequence([3, 10, 4, 5])).to.equals(3)
  })
  it('should return 3 as the longest increasing sequence is 3,4,10', function () {
    expect(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6])).to.equals(3)
  })
  it('should return 6 as the longest increasing sequence is 10,22,33,41,60,80', function () {
    expect(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])).to.equals(6)
  })
  it('should return 9 as the longest increasing sequence is 10,20,21,23,24,25,26,27,28', function () {
    expect(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28])).to.equals(9)
  })
})
