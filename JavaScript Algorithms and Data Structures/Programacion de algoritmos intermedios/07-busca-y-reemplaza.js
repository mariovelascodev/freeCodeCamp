function myReplace(str, before, after) {
  //Crear variables y expresión regular para letras mayúsculas
  let newStr = "";
  let mayusculas = /[A-Z]/g;

  //Comprobar si la palabra a cambiar esta capitalizada
  if(before[0].match(mayusculas)){
    //Capitalizar la palabra de reemplazo y reemplazar las palabras
    let capitalizar = after[0].toUpperCase();
    newStr = str.replace(before, after.replace(after[0], capitalizar));
    //Si la palabra a cambiar no está capitalizada poner la palabra de reemplazo en minúsculas
    //Y reemplazar palabras
  }else {
    let minuscula = after[0].toLowerCase();
    newStr = str.replace(before, after.replace(after[0], minuscula));
   }

  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("I think we should look up there", "up", "Down");