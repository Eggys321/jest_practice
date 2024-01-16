const {default:TestRunner} = require("jest-runner");
const addFive = require('./addFive')

test('returns the number plus 6',()=>{
    expect(addFive(6)).toBe(11)
})