function mutation(arr) {

    //Crear array donde meter una copia en minusculas del array introducido en la funcion
    let arrLower = [];

    //Recorrer el array introducido por parametros y convertir valores en minusculas e introducir valores en el nuevo array
    for (let i = 0; i < arr.length; i++) {
        arrLower.push(arr[i].toLowerCase())
    }

    //Extraer cadenas a comparar
    let target = arrLower[0];
    let test = arrLower[1];

    //Comparar si el string del primer valor del array contiene todas las letras del string del segundo valor
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);