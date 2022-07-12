function chunkArrayInGroups(arr, size) {

    //Crear un array donde guardar la copia troceada
    let copyArr = [];

    //Dividir el array en la longitud indicada y añadir las particiones a la variable copyArr
    for (let i = 0; i < arr.length; i += size) {
        let sliceArr = arr.slice(i, i + size);
        copyArr.push(sliceArr);
    }

    return copyArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);