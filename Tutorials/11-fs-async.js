const {readFile, writeFile} = require('fs')

//Asynchronous read write example
readFile('./Tutorials/content/big.txt', 'utf8', (err, firstData)=>{
    if(err){console.log(err);return}
    readFile('./Tutorials/content/second.txt', 'utf8', (err, secondData)=>{
        if(err){console.log(err);return}
        const result = `${secondData} and ${firstData}`
        writeFile('./Tutorials/content/result-mind-grenade.txt', result, 'utf8', (err)=>{
            if(err){console.log(err);return}
            console.log('Async write done')
        })
    })
})