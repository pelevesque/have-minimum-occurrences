'use strict'

const substrOccurrence = require('substr-occurrence')

module.exports = (str, checks) => {
  let haveMinimumOccurences = true
  for (let i = 0; i < checks.length; i++) {
    if (substrOccurrence(checks[i][0], str) < checks[i][1]) {
      haveMinimumOccurences = false
      break
    }
  }
  return haveMinimumOccurences
}
