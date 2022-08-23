function whatIsInAName(collection, source) {

  //Creo variable que contenga la propiedad de source
  let keys = Object.keys(source);

  //Filtrar todas las coincidencias de collection que tengan la propiedad y el valor de source
  return collection.filter(obj => keys.every(key => obj.hasOwnProperty(key) &&
                            obj[key] === source[key]));

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });