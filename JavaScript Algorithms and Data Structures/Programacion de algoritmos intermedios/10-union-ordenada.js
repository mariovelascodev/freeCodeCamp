function uniteUnique(arr) {
  //Crear variables a utilizar
  //Uno almacenará los valores pasados por parámetros
  //El otro guardara el array de valores unicos
  let valores = [...arguments];
  let valoresUnicos = [];

  //Recorrer el array de valores
  //Y comparar si el valor no está incluido en el array de valores unicos
  //Si no lo está añadir valor
  for(let i = 0; i < valores.length; i++) {
    for(let j = 0; j < valores[i].length; j++) {
      if(!valoresUnicos.includes(valores[i][j])) {
        valoresUnicos.push(valores[i][j]);   
      }
    }
  }
  
  return valoresUnicos;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);