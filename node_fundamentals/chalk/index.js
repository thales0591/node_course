const chalk = require('chalk')
const nota = 2

if (nota >= 7) {
    console.log(chalk.green('parabens, passou'))
} else {
    console.log(chalk.red('vish, vai ter q fazer recuperacao'))
}