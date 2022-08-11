function sumAll(arr) {
  //Ordenamos el array para que este ordenado de menor a mayor
  const ordenado = arr.sort((a, b) => a - b);
  //Creo variables
  let suma = 0;
  let min = Math.min(ordenado[0]);
  let max = Math.max(ordenado[1]);
  let contador = min;

  //Recorrer bucle mientras la variable contador sea menor igual al valor maximo
  while(contador <= max) {
    //Realizar la suma de todos los numeros entre el valor minimo y maximo del array
    suma += contador;
    contador++
  }

  return suma;
}

sumAll([1, 4]);
sumAll([10, 5])