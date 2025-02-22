/*
Ejercicio 3: Verificación de Stock en una Tienda
Instrucción:
Crea una función verificarStock(producto, cantidad) que devuelva una promesa.
Si el producto existe en inventario y la cantidad está disponible, la promesa se resuelve con "Stock disponible, procediendo con la compra".
Si no hay suficiente stock, la promesa se rechaza con "Stock insuficiente".
*/
let stock = { "laptop": 5, "mouse": 10, "teclado": 0 };

function checkStock(product, amount) {
    return new Promise((resolve, reject) => { //Retorna una promesa
        setTimeout(() => {
            if (Object.keys(stock).includes(product)) { //Crea un arreglo con las llaves del objeto stock
                // y compara si existe dentro de el, el nombre del producto que el usuario introduce
                if (stock[product] >= amount) { //Si el producto existe entonces verifica si hay cantidad suficiente
                    resolve("Stock disponible, procediendo con la compra"); //Mensaje de exito
                } else {
                    reject("Stock insuficiente"); //Si existe el producto pero no la cantidad que se busca se manda este mensaje
                }

            } else {
                reject("Producto no existente"); //Si el producto no se encuentra o existe manda este mensaje
            }

        });
    }, 3000);
}

checkStock("laptop", 2)
    .then(sucess => (console.log(sucess)))
    .catch(error => (console.log(error)))

checkStock("monitor", 2)
    .then(sucess => (console.log(sucess)))
    .catch(error => (console.log(error)))