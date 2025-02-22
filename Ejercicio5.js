/*
Crea una función autenticarUsuario(usuario, contraseña) que devuelva una promesa con el siguiente 
comportamiento:
- Si el usuario es "admin" y la contraseña es "1234", la promesa se resuelve con un objeto que contiene { usuario, rol: "Administrador", mensaje: "Inicio de sesión exitoso" }.
- Si los datos son incorrectos, la promesa se rechaza con un objeto { error: "Credenciales incorrectas", codigo: 401 }.
*/

function autenticarUsuario(usuario, contraseña) { // función de autenticación de usuario
    return new Promise((resolve, reject) => { // promesa
        setTimeout(() => { // retraso de 3 segundos
            if (usuario === "admin" && contraseña === "1234") { // verificar si el usuario y la contraseña son correctos
                resolve({ usuario, rol: "Administrador", mensaje: "Inicio de sesión exitoso" });
            } else {
                reject({ error: "Credenciales incorrectas", código: 401 });
            }
        }, 3000); // 3 segundos
    });
}

// llamados de promesa
//exitoso
autenticarUsuario("admin", "1234")
    .then((mensaje) => console.log("Éxito:", mensaje)) // éxito
    .catch((error) => console.log("Error:", error)); // error

//credenciales incorrectas
autenticarUsuario("usuario", "contraseñaincorrecta")
    .then((mensaje) => console.log("Éxito:", mensaje)) // éxito
    .catch((error) => console.log("Error:", error)); // error
