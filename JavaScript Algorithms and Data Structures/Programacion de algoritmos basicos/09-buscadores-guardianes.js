function findElement(arr, func) {
    //Se usa el metodo find() para encontrar el primer elemento que cumple
    //la función si no cumple ninguno dará undefined
    return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);