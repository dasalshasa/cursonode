const Math={};
function add(a,b) {
    return a+b;
}

function substract(a,b) {
    return a-b; 
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b==0){
        console.log('no s epuede dividir por cero');
    } else{
        return a/b;
    }    
}

Math.add =add;
Math.substract =substract;
Math.multiply =multiply;
Math.divide =divide;
/*exports.add =add;
exports.substract =substract;
exports.multiply =multiply;
exports.divide =divide;
*/
module.exports =Math;