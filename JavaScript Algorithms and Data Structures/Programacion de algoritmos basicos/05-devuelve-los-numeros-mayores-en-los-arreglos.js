function largestOfFour(arr) {

    //Array donde se guardaran los valores mas grandes
    let arrayLargestNumber = [];

    //Recorrer el array y sacar los numeros mayores con la funcion Math.max()
    //Y añadir al nuevo array
    for (let i = 0; i < arr.length; i++) {
        arrayLargestNumber.push(Math.max(...arr[i]));
    }

    return arrayLargestNumber;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);