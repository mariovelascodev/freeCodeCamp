function confirmEnding(str, target) {
    //Crear variables para saber la longitud de ambos parametros
    let lengthWord = str.length;
    let lengtTarget = target.length

    //Crear variable donde extraer el final de la cadena
    let endWord = str.slice(lengthWord - lengtTarget);

    //Comparar si el final de la cadena es igual al segundo parametro
    if (endWord == target) {
        return true;
    }

    return false;
}

confirmEnding("Bastian", "n");