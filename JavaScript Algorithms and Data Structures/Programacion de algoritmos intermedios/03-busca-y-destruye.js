function destroyer(arr) {

  //Filtrar que valores no se han introducido por parametros
  let newArr = arr.filter(valor => ![...arguments].includes(valor));
  
  //Retornar el nuevo array con los valores que no tienen el mismo valor
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");