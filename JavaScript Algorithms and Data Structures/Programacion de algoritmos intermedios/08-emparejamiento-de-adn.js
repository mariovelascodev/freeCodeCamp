function pairElement(str) {
  //Crear variables
  let pares = [];
  let indice;

  //Recorrer el string
  //Dependiendo de la posición de cada caracter
  //Añadir el caracter en un array y añadirle su par
  for(let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "A":
        indice = str[i].split("");
        indice.push("T");
        break;
      case "C":
        indice = str[i].split("");
        indice.push("G");
        break;
      case "G":
        indice = str[i].split("");
        indice.push("C");
        break;
      case "T":
        indice = str[i].split("");
        indice.push("A");
        break;
    }
    //Al array pares añadirle el array indices
    pares.push(indice);
  }
  return pares;
}

pairElement("GCG");
pairElement("TTGAG");
pairElement("CTCTA");
