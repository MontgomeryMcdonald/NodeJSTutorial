const {readFileSync, writeFileSync} = require('fs')
const path = require('path')

console.log('Winter Is Here')
// Synchronous(fs:readFuileSync and fs.writeFileSync)
// these are considered blocking events
// blocks the event loop (code execution) until the operation finishes
// no other code will run at this time.
// simimilair to non-sync versions of the command, but might freeze the server if the file is large or disk space is low

// performance is slow when handling many requests at once because each operation halts all other operations.
// best for programs like utilities or back-ups, or large database changes

const first = readFileSync(path.join(__dirname, '/content/first.txt'), 'utf8')
const second = readFileSync(path.join(__dirname, '/content/second.txt'), 'utf8')
const third = readFileSync(path.join(__dirname, '/content/third.txt'),  'utf8')
console.log(third)

writeFileSync(path.join(__dirname, "/content/FullMetalAlchemist.txt"), `Here is the result: \n ${first}, \n ${second}, \n ${third}`,'utf8', {flags: "a"})

// write paths: w opens for writing. overwrites existing data. makes file if not already made
// wx similiar to w but if wont overwrite existing data.

// a: opens the file for appending. if the file doesnt exist it is created. if it does exist, it appends the new data.

// ax is similair to a but it fails if the path exists. this ensures data is only appended to a file if it is newly made

// w+ opens the file for reading and writing. if the file doesnt exist it is made. if it exists it is overwritten

// a+ same as w+ but doesnt overwrite. appends instead

// rs+ opens the file for reading and writing synchronously. this flag should be used with caution as it can block nodejs event loop