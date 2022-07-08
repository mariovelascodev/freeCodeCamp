function bouncer(arr) {

    //Crear una copia del array original y filtrarlo para
    //quitar los valores falsos
    let result = arr.filter(arr => arr);

    return result;
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);