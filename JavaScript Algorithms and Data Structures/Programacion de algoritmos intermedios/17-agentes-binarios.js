function binaryAgent(str) {
  //Crear variable donde almacenar el texto
  let text = '';

  //Convertir la cadena en un array y pasar el numero binario a decimal
  let newStr = str.split(' ');
  let numDecimal = newStr.map(x => parseInt(x, 2));

  //Recorrer el array con los numeros decimales y convertirlo a letras
  // for(let i = 0; i < numDecimal.length; i++) {  
  //   text += String.fromCharCode(numDecimal[i]);
  // }

  numDecimal.forEach(elemento => text += String.fromCharCode(elemento));

  return text;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")