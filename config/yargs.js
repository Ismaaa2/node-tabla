const argv = require('yargs')
    .option('b', {
        alias: 'base',
        describe: 'Especifica la base por que la que se va a multiplicar.',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        describe: 'Ver por pantalla la sálida de la multiplicación.',
        type: 'boolean',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        describe: 'Especifica hasta que número se va a multiplicar.',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {

        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw 'La base tiene que ser un número.'
        }

        return true;
    })
    .argv



module.exports = argv
