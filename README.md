# 20-02-2025-U1-EJERCICIO-JS-PROMESAS-EQUIPOS-JS-

Ejercicio 1: Simulación de Descarga de Archivo
    Para este ejercio se creo una fución para validar si se puede descargar un archivo recibiendo el tamaño del archivo en MB.
    Para realizar este ejercicio se utilizo un if para validar si el tamaño del archivo esta dentro de lo permitido, y se utilizo una promesa para regresar el resultado ya sea cumplido o rechazado.

Ejercicio 2: Validación de Edad para una Compra 
- Se creó la función age(age), que devuelve una promesa.
- Dentro de la promesa, se usó setTimeout() para simular un retraso de 3 segundos.
- Con una condicion if se verifico si la edad es mayor o igual a 18

Ejercicio 3: Verificación de Stock en una Tienda
- Se definió un objeto stock con productos y sus cantidades disponibles.
- La función checkStock(product, amount) devuelve una promesa.
Dentro de setTimeout() pusimos una condicion if donde:
- Se verifica si el producto existe en el objeto stock.
- Si existe, se verifica si la cantidad solicitada está disponible:
- Si hay suficiente stock, se resuelve con "Stock disponible, procediendo con la compra".
- Si no hay suficiente stock, se rechaza con "Stock insuficiente".
- Si el producto no existe en stock, se rechaza con "Producto no existente".

Ejercicio 4: Simulación de un Pago en Línea
    Este ejecicio se busca si las transacciones con números válidos, por medio de una función que recibe la cantidad y por medio de una promesa lo valida.
    Para resolverlo se uso la promesa para lanzar el resultado cumplido o rechazado y se uso if para ver si el número es valido.

Ejercicio 5: Autenticación de Usuario
- La función autenticarUsuario(usuario, contraseña) devuelve una promesa.
- Dentro de setTimeout() utilizamos una funcion if donde:
- Se verifica si el usuario es "admin" y la contraseña es "1234".
- Utilizamos un objeto que incluye:
- { "usuario": "admin", "rol": "Administrador", "mensaje": "Inicio de sesión exitoso" } si es correcto
sino
{ "error": "Credenciales incorrectas", "codigo": 401 }

Ejercicio 6: Verificación de Saldo Bancario
- Se creó la función checkBalance(account, amount), que devuelve una promesa.
Dentro de setTimeout() pusimos una condicion if donde:
- Verificamos si el saldo de la cuenta es suficiente.
- Si lo es, se resuelve con un objeto que indica:
- { "account": "123456789", "remainingBalance": saldoRestante, "message": "Transacción aprobada" }
- sino
- { "error": "Fondos insuficientes", "availableBalance": saldoDisponible, "code": 402 }


Ejercicio 7: Consulta de Clima desde un "Servicio"
    En este ejercicio se crea una función con promesas para que devuelva los datos meteorológicos de una base de datos, pasando a la función el nombre de la ciudad. 
    Para resolverlo se busco en el arreglo de objetos si estaba la ciudad con .map() y .indexOf() y se mostro la información con acceso lineal y console.log().

