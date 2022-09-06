function dropElements(arr, func) {
  //Crear variables
  const resultFunc = func;
  let arrResult = [];

  //Recorrer el array
  //Si se cumple la condicion de la funcion, cortar el array por el indice y cortar bucle
  for (let i = 0; i < arr.length; i++) {
    if (resultFunc(arr[i])) {
      arrResult = arr.slice(i);
      break;
    }
  }

  return arrResult;
}

dropElements([1, 2, 3], function (n) { return n < 3; });
dropElements([0, 1, 0, 1], function (n) { return n === 1; });
dropElements([1, 2, 3, 4], function (n) { return n >= 3; });
dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; });
dropElements([1, 2, 3], function (n) { return n > 0; });