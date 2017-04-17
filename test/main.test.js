const chai = require('chai')
const assert = chai.assert
const dailyPlanner = require('../src/main.js')

describe('#dailyPlanner', function () {
  it('returns type string', function () {
    let result = dailyPlanner()
    assert.isString(result, 'This shit ain\'t a string')
  })

  it('should return the string "Working" if the days Monday -Thursday are inputted as strings', function () {
    let resultMon = dailyPlanner('Monday')
    let resultThurs = dailyPlanner('Thursday')
    assert.equal(resultMon, 'Working', 'Function returns an incorrect output')
    assert.equal(resultThurs, 'Working', 'Function returns an incorrect output')
  })

  it('should return the string "TGIF" if the string "Friday" is inputted', function () {
    let resultFri = dailyPlanner('Friday')
    assert.equal(resultFri, 'TGIF', 'Function returns an incorrect output')
  })

  it('should return the string "Weekend" if the string "Saturday" or "Sunday" is inputted', function () {
    let resultSat = dailyPlanner('Saturday')
    let resultSun = dailyPlanner('Sunday')

    assert.equal(resultSat, 'Weekend')
    assert.equal(resultSun, 'Weekend')
  })

  it('should return "Choose a day of the week" if no day is entered', function () {
    let badInput = dailyPlanner('yo')
    assert.equal(badInput, 'Choose a day of the week')
  })

  it('should return "Choose ONE day" if more than one day is entered', function () {
    let manyInput = dailyPlanner(['Monday', 'Tuesday'])
    let manyInput2 = dailyPlanner('Monday', 'Tuesday')

    assert.equal(manyInput, 'Choose ONE day')
    assert.equal(manyInput2, 'Choose ONE day')
  })
})
