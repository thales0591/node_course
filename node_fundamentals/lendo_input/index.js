const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('qual seu nome paizao ', (nome) => {
    if (nome === 'nsei') {
        console.log(`como nao?`)
    } else {
        console.log(`o nome ${nome} é dahorinha pai`)
    }
    readline.close()
})