// Ejercicio 4: Simulación de un Pago en Línea
// Instrucción:
// Crea una función procesarPago(monto) que devuelva una promesa.
// Si el monto es mayor a 0, la promesa se resuelve con "Pago exitoso de $monto".
// Si el monto es 0 o menor, la promesa se rechaza con "Error: Monto inválido".


function processPayment(amount){ //Función para procesar pagos recide numeros si es el numero positivo el resultado es bueno y si es 0 o negativo el resultado es invalido
    return new Promise ((resolve, reject) => { //Return de la función con una promesa con resolve y recject
        setTimeout(() => { //Uso del setTimeout() para la simulación de una petición al servidor
            if (amount <= 0){ //Comparar si el monto es menor o igual a 0
                reject("Error: Monto inválido") //Resultado rechazado de la promesa
            }else{
                resolve(`Pago exitoso de ${amount}`) //Resultado cumplido de la promesa
            }
        },5000); //Tiempo del setTimeout() de 5 segundos
    });
}

//Prueba con promesa con resultado cumplido
processPayment(500)
    .then((message) => {console.log(message)}) //Manejador de éxito de la promesa
    .catch((error) => {console.log(error)}); //Manejador de error de la promesa

//Prueba con promesa con resultado rechazado
processPayment(0)
    .then((message) => {console.log(message)}) //Manejador de éxito de la promesa
    .catch((error) => {console.log(error)}); //Manejador de error de la promesa

