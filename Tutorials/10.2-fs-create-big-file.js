const {writeFileSync} = require('fs')
const path = require('path')

// evvery bit of data is written to the end of the file
for(let i = 0; i < 200000; i++){
    writeFileSync(path.join(__dirname, '/content/big.txt'), `Iteration ${i}\n`,{flag:'a'})
}