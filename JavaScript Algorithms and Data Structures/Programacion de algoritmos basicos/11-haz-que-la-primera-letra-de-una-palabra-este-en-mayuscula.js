function titleCase(str) {
    //Convertir la cadena todo a minusculas
    let lowerStr = str.toLowerCase();

    //Crear un array con la cadena
    let arrStr = lowerStr.split(' ');

    //Recorrer el array y poner en mayusculas la primera letra de cada posicion
    for (let i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].substr(1);
    }

    //Devolver la cadena
    return arrStr.join(" ");
}

titleCase("I'm a little tea pot");