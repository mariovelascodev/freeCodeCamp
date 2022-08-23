function translatePigLatin(str) {
  //Crear expresión regular que diga si la palabra contiene una vocal
  let vocales = /[aeiou]/gi;
  let pigLatin ="";
  
  //Mirar si la primera letra de la palabra es vocal o consonante
  if(str[0].match(vocales)){
    //Si empieza por vocal le añadimos "way"
    pigLatin = str + "way";
    //Si solo contiene consonantes le añadimos "ay"
  }else if(str.match(vocales) === null){
    pigLatin = str + "ay";
  }else {
    //Encontrar cuantas consonantes existen antes de la primera vocal
    let vocalIndice = str.indexOf(str.match(vocales)[0]);
    
    //Tomar la cadena desde la primera vocal hasta el último carácter. 
    //Agregar las consonantes que se omitieron anteriormente y añadir la terminación
    pigLatin = str.substr(vocalIndice) + str.substr(0, vocalIndice) + "ay";
  }
  
  return pigLatin;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("glove");
translatePigLatin("schwartz");
translatePigLatin("rhythm");