// Ejercicio 7: Consulta de Clima desde un "Servicio"
// Instrucción:
// Crea una función consultarClima(ciudad) que devuelva una promesa con el siguiente comportamiento:
// Si la ciudad existe en una base de datos local, la promesa se resuelve con { ciudad, temperatura, condicion }.
// Si la ciudad no existe, la promesa se rechaza con { error: "Ciudad no encontrada", codigo: 404 }.
let dataBase =[ //Declaración de base de datos meteorológicos de ciudades
    {
        city: "Tepic", 
        temperature: 25, 
        condition: "Soleado"    
    },
    {
        city: "Xalisco", 
        temperature: 21, 
        condition: "Lloviendo"    
    },
    {
        city: "Monterrey", 
        temperature: 45, 
        condition: "Soleado"    
    },
    {
        city: "Sanblas", 
        temperature: 27, 
        condition: "Soleado"    
    },
    {
        city: "Ruiz", 
        temperature: 21, 
        condition: "Nublado"    
    }
];

function consultWheater(city) { //Función para saber la información meteorológica de una ciudad pasando el id
    return new Promise ((resolve, reject) =>{ //Declaración de la promesa con resolve y reject
        setTimeout(() => { //Se usara .setTimeout() para simular la llamada al servidor
            let cities = dataBase.map((city_) => city_.city) //Se crea un arreglo con el nombre de todas las ciudades
            let id = cities.indexOf(city) //Se busca el indice de la ciudad con .indeOf() si no se encuetra da como resultado -1
            if ( id ==-1 ){ //Se compara el id si es igual a -1 para ir al camino del reject
                reject({ error: "Ciudad no encontrada", codigo: 404 }) //Resultado rechazado de la promesa
            }else{
                resolve(dataBase[id]) //Resultado cumplido de la promesa
            }
        },2000);
    });
}

//Prueba con promesa con resultado cumplido
consultWheater("Xalisco")
    .then((message) => console.log(message)) //Manejador de éxito de la promesa
    .catch((error) => console.log(error)); //Manejador de error de la promesa

//Prueba con promesa con resultado rechazado
consultWheater("Barcelona")
    .then((message) => console.log(message)) //Manejador de éxito de la promesa
    .catch((error) => console.log(error)); //Manejador de error de la promesa

/*
    
*/
