/**
 * 
 * Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
 * 
 */

const promise = new Promise( function (resolve, reject){

    resolve('Hey!');

});

const cows = 15;

const countCows = new Promise(function (resolve, reject){

    if(cows > 10){

        resolve(`We have ${cows} cows on the farm.`);

    }else{

        reject("There is no cows on the farm.");

    }

});

countCows
.then((result) =>{

    console.log(result);

})
.catch((error) =>{

    console.error(error);

}).finally(() => console.log("Finally."));