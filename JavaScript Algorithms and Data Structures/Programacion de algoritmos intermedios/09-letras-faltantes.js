function fearNotLetter(str) {
  //Convertir la cadena a minuscula para acotar el campo de busqueda
  let cadenaMinusculas = str.toLowerCase();
  //Sacar código ASCII por el que comenzar la busqueda
  let inicioCadena = cadenaMinusculas[0].charCodeAt();
  let letra = "";

  //Busca solo las letras del abecedario en minusculas
  if(inicioCadena >= 97 && inicioCadena <= 122) {
    //Comparar la cadena con las letras del abecedario
    //Si en la cadena están todas devolver undefined
    //Si no devolver la letra que falta
    for(let i = 0; i < cadenaMinusculas.length; i++) {
      if(cadenaMinusculas[i].charCodeAt() === inicioCadena) {
        inicioCadena++;
      }else {
        letra = String.fromCharCode(inicioCadena);
        
        return letra;
      }//fin else
    }//fin for
    return undefined;
  }
}

fearNotLetter("abce");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");