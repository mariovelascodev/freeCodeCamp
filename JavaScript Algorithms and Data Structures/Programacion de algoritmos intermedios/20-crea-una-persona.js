const Person = function (firstAndLast) {
  // Cambia solo el código debajo de esta línea
  //Crear una varible que contendrá el nombre completo
  let fullName = firstAndLast;

  //Métodos getter
  this.getFirstName = function () {
    return fullName.split(' ')[0];
  };

  this.getLastName = function () {
    return fullName.split(' ')[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  //Métodos setter
  this.setFirstName = function (name) {
    fullName = name + ' ' + fullName.split(' ')[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(' ')[0] + ' ' + name;
  };

  this.setFullName = function (name) {
    fullName = name;
  };

};

const bob = new Person('Bob Ross');
bob.getFirstName();
bob.getLastName();
bob.getFullName();
bob.setFirstName("Haskell");
bob.setFullName("Haskell Curry");