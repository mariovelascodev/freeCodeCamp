function smallestCommons(arr) {
  //Ordenar el array de menor a mayor y sacar rango de numeros
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);

  //Sacar el valor maximo del rango de numeros
  const upperBound = range.reduce((prod, curr) => prod * curr);

  //Probar todos los multiplos del valor max 
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    //Comprobar si cada valor del rango es multiplo de la variable multiple
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1,5]);
smallestCommons([1, 13]);
smallestCommons([23, 18]);