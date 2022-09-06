function sumPrimes(num) {

  /* Buscar la verificación de primalidad
  devolviendo falso si el número de destino
  es divisible por cualquier número entre 2 y 
  la raíz cuadrad del número de destino*/
  
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

  // Comprobar si todos los números son primos
  //y si lo son sumarlos
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

sumPrimes(10);