function frankenSplice(arr1, arr2, n) {
    //Crear copia del array al que le introduciremos los datos
    let arr = arr2.slice();

    //Recorrer el primer array
    for (let i = 0; i < arr1.length; i++) {
        /*Extraer valores primer array y añadirlos a la copia del segundo
        en posicion indicada en la funcion*/
        arr.splice(n++, 0, arr1[i])
    }

    //Devolver el nuevo array
    return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);