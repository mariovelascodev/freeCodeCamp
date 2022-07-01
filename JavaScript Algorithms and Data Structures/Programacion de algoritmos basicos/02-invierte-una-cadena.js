function reverseString(str) {
    /*Crear variable y aplicarle el metodo split para dividir el string
    en un array y aplicar el metodo reverse para darle la vuelta y unirlo
    con el metodo join*/
    let reverseStr;
    reverseStr = str.split("").reverse().join('');
    console.log(reverseStr);
    return reverseStr;
}

reverseString("hello");