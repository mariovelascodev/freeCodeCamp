function telephoneCheck(str) {

    //Expresión regular que comprueba los números de telefono de EEUU con prefijo
    let phoneNumber = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm;

    //Comprobar si el número de telefono introducido es correcto
    if (phoneNumber.test(str)) {
        return true;
    } else {
        return false;
    }
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 456 789 4444");