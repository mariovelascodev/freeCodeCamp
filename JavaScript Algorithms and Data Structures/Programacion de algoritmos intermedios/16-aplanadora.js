function steamrollArray(arr) {
  //Concatenar la entrada  si no es un array; de lo contrario, reducir de nuevo de forma recursiva
    return arr.reduce(function(inputArray, inputToFlat){
        return inputArray.concat(Array.isArray(inputToFlat) ? steamrollArray(inputToFlat) : inputToFlat);
    }
    ,[]);
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, {}, [3, [[4]]]]);