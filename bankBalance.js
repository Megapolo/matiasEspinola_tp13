let arrayDeOpsBancarias = [5000,10000,-3000,8000,-12000,9000,-13000,15000,-2000,-1000,2000,-500]

function calculateBalances(array) {
    let depositos = 0;
    let retiros = 0;
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            depositos += array[i];
        } else {
            retiros += array[i];
        }
        total += array[i];
    }

    return {
        depositos: depositos,
        retiros: retiros,
        total: total
    }
}

function bankBalance (nombre, apellido, array) {
    let balances = calculateBalances(array);
    return `Estimado/a ${nombre} ${apellido}.
El monto total de sus depositos es de ${balances.depositos}.
El monto total de sus retiros es de ${balances.retiros}
Por lo tanto, su saldo actual en cuenta es de ${balances.total}`
}

//console.log(bankBalance("Matías", "Espínola", arrayDeOpsBancarias));

module.exports = bankBalance
