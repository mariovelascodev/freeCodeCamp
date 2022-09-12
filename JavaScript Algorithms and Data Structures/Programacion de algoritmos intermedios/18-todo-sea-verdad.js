function truthCheck(collection, pre) {
  
  //Recorrer el arreglo
  //Comprobar si contiene algún valor falso, y si tiene devolver false y parar bucle
  //De lo contrario devolver true
   for(let i = 0; i < collection.length; i++) {
     if(!collection[i][pre]) {
       return false;
       break;
     }
   }

   return true;

}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name");

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")