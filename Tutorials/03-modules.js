//  CommonJS, every file is, by default, a module.
// MOdules are encapsulated code, like a function, that only share the minimum amount of information. properties, methods etc.

const name = require('./04-name.js')
const message = require('./05-utils.js')
const data = require('./06-alternative-flavor.js')
require('./07-mind-grenzade.js')

// name
console.log(name.Shakira)
console.log(name.Pitbull)

// utils
message(name.Shakira)
// data
console.log(data.items[0])
console.log(data.mercWithAMask)