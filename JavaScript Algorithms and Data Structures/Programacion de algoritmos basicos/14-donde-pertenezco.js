function getIndexToIns(arr, num) {

    //Añadir el nuevo valor en el array
    arr.push(num);

    //Ordenar el array de menor a mayor con el metodo sort
    arr.sort((a, b) => a - b);

    /*Comparar si el numero introducido es mayor o igual al primer valor del array y devolver el indice del valor introducido*/
    if (arr[0] <= num) {
        console.log(arr.indexOf(num));
        return arr.indexOf(num)
    }

}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([3, 10, 5], 3);