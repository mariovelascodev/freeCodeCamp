function findLongestWordLength(str) {

    //La cadena se convierte en un array
    let arrayStr = str.split(" ");

    //Suponer que la palabra mas larga es la primera, para inicializar la variable
    let longestWord = arrayStr[0];

    //Recorrer el array y comparar valores
    for (const word of arrayStr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    //Devolver el valor numerico
    return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");