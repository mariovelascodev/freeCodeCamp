function truncateString(str, num) {

    //Se corta la cadena a la distancia indicada en el parametro
    let cutStr = str.slice(0, num);

    //Creamos una variable con los ... y los añadimos a la cadena
    let dots = "...";
    let truncate;

    //Si la longitud de la cadena es mayor o igual al numero introducido
    //Se mostrara igual
    if (str.length == num || str.length <= num) {
        return str;
    }

    //Si no se mostrará truncada
    truncate = cutStr + dots
    console.log(truncate);

    return truncate;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);