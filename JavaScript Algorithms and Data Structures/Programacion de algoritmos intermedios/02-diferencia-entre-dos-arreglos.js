function diffArray(arr1, arr2) {
  let newArr = [];

  //Crear un  nuevo array, concatenando los dos arrays introducidos por parametros
  //Filtrar el valor que no esta incluido en cualquiera de los dos arrays 
  newArr = arr1.concat(arr2).filter(valor => !arr1.includes(valor) || !arr2.includes(valor));
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);