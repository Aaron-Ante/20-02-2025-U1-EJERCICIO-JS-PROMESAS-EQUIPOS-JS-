/*
Instrucción:
Crea una función verificarSaldo(cuenta, monto) que devuelva una promesa con el siguiente comportamiento:
Si el saldo de la cuenta es suficiente para la transacción, la promesa se resuelve con { cuenta, saldoRestante, mensaje: "Transacción aprobada" }.
Si el saldo no es suficiente, la promesa se rechaza con { error: "Fondos insuficientes", saldoDisponible, codigo: 402 }.

 */

function checkBalance(account, amount) { //funcion  verificar Saldo
    return new Promise((resolve, reject) => {
        setTimeout(()=>{ // retraso de 3 segundos

        
        if (account.balance >= amount) {//condicion if para verificar saldo 
            resolve({ 
                account: account.number,
                remainingBalance: account.balance - amount,
                message: "Transacción aprobada"
            });
        } else {
            reject({
                error: "Fondos insuficientes",
                availableBalance: account.balance,
                code: 402
            });
        }
    },3000 ) //3 seg 
    });
}

// ejemplo exitoso
const successAccount = { number: "123456789", balance: 700 };
const successWithdrawal = 600;

checkBalance(successAccount, successWithdrawal)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error));

// Ejemplo rechazado
const errorAccount = { number: "987654321", balance: 500 };
const errorWithdrawal = 600;

checkBalance(errorAccount, errorWithdrawal)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error));
