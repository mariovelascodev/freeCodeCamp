function repeatStringNumTimes(str, num) {

    //Convertir la cadena en un array y almacenarla en un array
    let arr = str.split();

    //Comparar si el numero introducido es inferior o igual a cero
    //Y si es así poner la cadena vacia
    if (num <= 0) {
        str = "";
    }

    //Repetir la cadena tantas veces como se nos pide
    for (let i = 1; i < num; i++) {
        str += arr;
    }

    return str;
}

repeatStringNumTimes("abc", 3);