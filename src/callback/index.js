/**
 * Un callback es una función que pasa como argumento otra función y que dentro va a ser utilizada según sea el casa.
 * @param {*} a 
 * @param {*} b 
 */

function sum(a, b) {
    return  (a+b);
}

function calc(num1, num2, callback) {

    return callback(num1, num2); // no es obligación usar callback
    
}


console.log(calc(2, 3, sum));

setTimeout(function (){ // setTimeOut ya es un callback

    console.log('Hola JavaScript');

}, 5000);

function grettin(name) {
    
    console.log(`Hola ${name}`);

}

let nameAuthor = 'Daniel';

setTimeout(grettin, 2000, nameAuthor); 

