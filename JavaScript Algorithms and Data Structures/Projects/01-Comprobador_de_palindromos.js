function palindrome(str) {

    //Convertir la cadena a minusculas, quitandole todos los caracteres no alfanumericos
    let strLowerCase = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    //Damos la vuelta a la cadena en minusculas
    let strReverse = strLowerCase.split('').reverse().join('');

    //Comparar ambas cadenas y ver si es un palindromo
    if (strLowerCase === strReverse) {
        return true;
    } else {
        return false;
    }

}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("1 eye for of 1 eye.");