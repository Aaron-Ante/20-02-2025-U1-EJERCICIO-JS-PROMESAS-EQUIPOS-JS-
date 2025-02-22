/*
Instrucción:
Crea una función verificarEdad(edad) que devuelva una promesa.
Si la edad es 18 o más, la promesa se resuelve con "Compra permitida".
Si la edad es menor de 18, la promesa se rechaza con "Debes ser mayor de edad para comprar este producto".
*/

function age(age){ //funcion edad
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ // retraso de 3 segundos
            if(age >=18){ //condicion if para validar la edad 
                resolve("Compra permitida")
            }else{
                reject("Debes ser mayor de edad para compar este producto")
            }


        }, 3000)// 3 seg
    })

}
    //llamados de la promesa
    //Aceptada
    age(18)
        .then((mensaje) => console.log(mensaje))
        .catch((error) => console.log(error))
    //Rechazada
    age(17)
        .then((mensaje) => console.log(mensaje))
        .catch((error) => console.log(error))    