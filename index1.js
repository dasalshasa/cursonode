const os = require('os');
const fs = require('fs');

console.log(os.platform());
console.log(os.release());
console.log('free mem:',os.freemem());
console.log('total mem:',os.totalmem());

//callback tercer parametro se ejecuta cuando termian de crear el archivo
//codigo bloqueante   const res=fs.writeFile('./text.txt','linea uno')

fs.writeFile('./text1.txt','linea uno',function (err) {
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
})//cod asincrono


console.log('ultima linea ded codigo');// es asincrono porque el archivo lo crea el os mod
fs.readFile('./text.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
//dsdsd dsdsd  sdds