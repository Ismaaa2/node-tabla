console.clear()
const argv = require('./config/yargs');
const { createFile } = require('./helpers/multiplicar')

require('colors');

createFile(argv.b, argv.l, argv.h)
    .then((nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')))
    .catch(err => console.log(err));







// console.log(process.argv)

// const factor = {
//     base:   2,
//     limit: 10
// }

// process.argv.forEach(it => {

//     if (it.includes('base')) return factor.base = it.split('=')[1]
//     if (it.includes('limit')) return factor.limit = it.split('=')[1]

// })

// console.log(factor)


// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');


// // const base = 2

// createFile(factor.base)
//     .then((nombreArchivo => console.log(nombreArchivo, 'creado')))
//     .catch(err => console.log(err));


