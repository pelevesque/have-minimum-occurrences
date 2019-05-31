'use strict'

const substrOccurrence = require('substr-occurrence')

module.exports = (str, checks) => {
  let haveMinimumOccurences = true
  for (let i = 0, len = checks.length; i < len; i++) {
    if (substrOccurrence(checks[i][0], str) < checks[i][1]) {
      haveMinimumOccurences = false
      break
    }
  }
  return haveMinimumOccurences
}
