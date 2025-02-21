// Ejercicio 1: Simulación de Descarga de Archivo
// Instrucción:
// Crea una función descargarArchivo(tamaño) que devuelva una promesa.
// Si el tamaño es menor o igual a 50MB, la promesa se resuelve con "Descarga completada".
// Si el tamaño es mayor a 50MB, la promesa se rechaza con "El archivo es demasiado grande".

function downloadFile(size){//Función para hacer descargar de archivos se pasa el tamño del archivo en MB
    return new Promise(( resolve, reject)=>{ //Declaración de la promesa en el return para que regrese el resolve o el reject
        setTimeout(()=>{ //Se usa setTimeout() para simular la llamada al servior 
            if (size <= 50){ //Comparación si cumple con el tamaño limitado
                resolve("Descarga completada"); //resulado de resolve
            }else{
                reject("El archivo es demasiado grande");//resultado de reject
            }
        },2000) //Duración del setTimeout() de 2 segundos
    });
}
//Prueba con promesa con resultado cumplido
downloadFile(50) 
    .then((message) => {console.log(message)}) //Imprime si la promesa se resulve
    .catch((error) => {console.log(error)}); //Imprime si la promesa no se resulve

//Prueba con salidad con reject
downloadFile(51)
    .then((message) => {console.log(message)}) //Imprime si la promesa se resulve
    .catch((error) => {console.log(error)}); //Imprime si la promesa no se resulve
