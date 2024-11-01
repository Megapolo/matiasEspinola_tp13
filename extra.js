function showNumbers(numero) {
    let numeroBase = numero + 10
    let numerosConsecuentes = []
    for (let i = numero+1; i <= numeroBase; i++) {
        numerosConsecuentes.push(i)
    }
    console.log(numerosConsecuentes);
}

function printEveryThree() {
    for (let i = 1; i <=57; i++) {
        if (i%3==0) {
            console.log(i);
        }
    }
}

function totalSummation() {
    let suma = 0
    for (let i = 0; i<=100;i++) {
        suma = suma + i;
    }
    console.log(suma);
}

function showToUpperCase(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i].toUpperCase());
    }
}

function returnPairs(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            console.log(numeros[i]);
        }
    }
}

module.exports = {showNumbers, printEveryThree, totalSummation, showToUpperCase, returnPairs}