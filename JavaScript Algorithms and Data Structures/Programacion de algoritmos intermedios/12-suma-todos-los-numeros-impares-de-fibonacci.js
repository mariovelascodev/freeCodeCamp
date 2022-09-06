function sumFibs(num) {
  
  //Crear variables
  let valorAnterior = 0;
  let valorActual = 1;
  let resultado = 0;

  //Mientras el valor actual sea menor o igual al número hacer bucle
  //Si el valor actual es impar sumarlo
  //Si no seguir con la serie de Fibonacci
  while(valorActual <= num) {
    if(valorActual % 2 !== 0){
      resultado += valorActual;
    }
    valorActual += valorAnterior;
    valorAnterior = valorActual - valorAnterior;
  
  }
    
  return resultado;
}

sumFibs(4);
sumFibs(10);
sumFibs(1000);
sumFibs(4000000);