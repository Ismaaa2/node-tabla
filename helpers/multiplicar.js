const fs = require('fs');
const colors = require('colors');

const createFile = async (base, l = false, h) => {

    try {

        let salida  = "";
        let consola = "";

        for (let i = 1; i <= h; i++){
            salida += (`${base} x ${i} = ${base * i}\n`)
            consola += (`${colors.cyan(base)} ${'x'.green} ${colors.cyan(i)} = ${colors.yellow(base * i)}\n`)
        }


        fs.writeFileSync(`./out/tabla-${base}.txt`, salida, { encoding: "utf8" });

        if (l) {
            console.log('===================================='.red)
            console.log('          Tabla del:'.red, colors.blue(base))
            console.log('===================================='.red)
            console.log(consola)
        }


        return `Tabla-${base}.txt`;
    } catch (err) {
        throw err
    }


}


module.exports = {
    createFile
}






// const createFile = (base = 5) => {

//     return new Promise((resolve, reject) => {
//         console.log('====================================')
//         console.log('          Tabla del:', base)
//         console.log('====================================')

//         let salida = "";

//         for (let i = 1; i <= 10; i++) salida += (` ${base} x ${i} = ${base * i}\n`)

//         try {
//             fs.writeFileSync(`tabla-${base}.txt`, salida, { encoding: "utf8" });
//             resolve(`Tabla-${base}.txt`)
//         } catch (e) {
//             reject(e)
//         }


//     })
// }

