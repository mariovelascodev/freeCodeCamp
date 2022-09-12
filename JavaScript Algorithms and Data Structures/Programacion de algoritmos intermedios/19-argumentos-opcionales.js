function addTogether() {
  //Guardar los argumentos en dos variables
   const [first, second] = arguments;

  /*Comprobar si el primer argumento es un numero y 
  la longitud de arguments es igual a 1, si es así retornar 
  un segundo argumento a la función*/
  if(typeof(first) === 'number' && arguments.length === 1) {
    return (second) => addTogether(first, second);
   //Si no comprobar si ambos argumentos son numeros y si no devolver undefined. 
  }else if(typeof(first) !== 'number' || typeof(second) !== 'number') {
     return undefined;
    //Si ambos son numeros devolver la suma 
   }else {
     return first + second;
   }
}

addTogether(2,3);
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
addTogether(5)(7);
addTogether(2, "3");
addTogether(2)([3]);
addTogether("2", 3);