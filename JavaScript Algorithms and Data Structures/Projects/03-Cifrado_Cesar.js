function rot13(str) {
    //Convertir la cadena en mayusculas
    let strUpperCase = str.toUpperCase();

    let result = '';
    let letter = '';

    //Recorrer la cadena para reemplazar los caracteres y sacar cada letra reemplazada
    for (let i = 0; i < strUpperCase.length; i++) {
        let strCode = strUpperCase.charCodeAt(i);

        if (strCode <= 77 && strCode >= 65) {
            letter = strUpperCase.replaceAll(String.fromCharCode(strCode), String.fromCharCode(strCode + 13)).substring(i, i + 1);
        } else if (strCode > 77 && strCode <= 90) {
            letter = strUpperCase.replaceAll(String.fromCharCode(strCode), String.fromCharCode(strCode - 13)).substring(i, i + 1);
        } else {
            letter = String.fromCharCode(strCode);
        }//fin if/else

        //Crear la cadena descifrada
        result += letter;
    }//fin for

    return result;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");