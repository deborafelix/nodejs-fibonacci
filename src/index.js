'use strict'

const fibonacci = () => {
    let newNumber = 1;
    let arrFibonacci = [0, 1];
    while(newNumber <= 350) {
        let penultNumber = arrFibonacci[arrFibonacci.length - 2];
        let lastNumber = arrFibonacci[arrFibonacci.length - 1];   

        newNumber = lastNumber + penultNumber;
        arrFibonacci.push(newNumber); 
   }
   return arrFibonacci;
}

const isFibonnaci = (num) => {
    const arrFibonacci = fibonacci();

    return arrFibonacci.find(fibonacciNumber => fibonacciNumber === num) ? true : false;
    // return arrFibonacci.includes(num);
}


module.exports = {
    fibonacci,
    isFibonnaci
}
