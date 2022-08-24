function convertHTML(str) {
  //Crear variables donde guardar el resultado y separar la cadena en un array
  let cadenaHTML = "";
  let cadena = str.split("");

  //Recorrer el array creado
  //Y según su valor modificarlo
  for(let i = 0; i < cadena.length; i++) {
    switch(cadena[i]) {
      case '&':
        cadena[i] = '&amp;';
        break;
      case '<':
        cadena[i] = '&lt;';
        break;
      case '>':
        cadena[i] = '&gt;';
        break;
      case '\"':
        cadena[i] = '&quot;';
        break;
      case '\'':
        cadena[i] = '&apos;';
        break;
    }
  }

  //Unir de nuevo la cadena
  cadenaHTML = cadena.join("");

  return cadenaHTML;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");