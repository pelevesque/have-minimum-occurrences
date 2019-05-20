/* global describe, it */
'use strict'

const expect = require('chai').expect
const haveMinimumOccurrences = require('../index')

describe('#haveMinimumOccurrences()', () => {
  it('should return true with an empty string and an empty check.', () => {
    const str = ''
    const checks = []
    const result = haveMinimumOccurrences(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return true with an empty string and a check with 0 minimum.', () => {
    const str = ''
    const checks = [['a', 0]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return false with an empty string and a check that is not met.', () => {
    const str = ''
    const checks = [['a', 1]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = false
    expect(result).to.equal(expected)
  })

  it('should return false with a check that is not met.', () => {
    const str = 'A little string.'
    const checks = [['t', 4]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = false
    expect(result).to.equal(expected)
  })

  it('should return true with a check that is met exactly.', () => {
    const str = 'A little string.'
    const checks = [['t', 3]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return true with a check that is more than met.', () => {
    const str = 'A little string.'
    const checks = [['t', 2]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return false with many checks that are not met.', () => {
    const str = 'A little string.'
    const checks = [['z', 1], ['?', 1], ['b', 1]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = false
    expect(result).to.equal(expected)
  })

  it('should return false with some checks that are not met.', () => {
    const str = 'A little string.'
    const checks = [['i', 2], ['z', 1]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = false
    expect(result).to.equal(expected)
  })

  it('should return true with checks that are met exactly.', () => {
    const str = 'A little string.'
    const checks = [['i', 2], ['t', 3], ['s', 1]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return true with checks that are more than met.', () => {
    const str = 'A little string.'
    const checks = [['i', 1], ['t', 2], [' ', 1]]
    const result = haveMinimumOccurrences(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })
})
