function spinalCase(str) {
  //Crear variable que elimina espacios al principio y el final
  //Poner espacio entre las palabras juntas sin espacio que sean minúscula y mayúscula
  //Separar el string por espacios en blanco o guiones bajos
  //Unir el string por guiones y convertirlo a minúsculas
  let spinal = str.trim().replace(/([a-z])([A-Z])/g, "$1 $2").split(/[\s|_]+/g).join("-").toLowerCase();

  return spinal;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");