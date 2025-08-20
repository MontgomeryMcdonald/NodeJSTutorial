const os = require('os')

const user = os.userInfo()
console.log(user)

function convertTime(seconds){
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}:${minutes}:${Math.floor(seconds%60)}`
}

console.log(convertTime(os.uptime()))

// Convert to hours mins and seconds

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMemory: os.freemem(),
    device: os.platform(),
    arch:os.arch()
}



console.table(currentOS)