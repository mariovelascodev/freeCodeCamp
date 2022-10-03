function convertToRoman(num) {

    let numRoman = '';

    while (num > 0) {
        if (num >= 1000) {
            num -= 1000;
            numRoman += 'M';
        } else if (num >= 900 && num < 1000) {
            num -= 900;
            numRoman += 'CM';
        } else if (num >= 500 && num < 900) {
            num -= 500;
            numRoman += 'D';
        } else if (num >= 400 && num < 500) {
            num -= 400;
            numRoman += 'CD';
        } else if (num >= 100 && num < 400) {
            num -= 100;
            numRoman += 'C';
        } else if (num >= 90 && num < 100) {
            num -= 90;
            numRoman += 'XC';
        } else if (num >= 50 && num < 90) {
            num -= 50;
            numRoman += 'L';
        } else if (num >= 40 && num < 50) {
            num -= 40;
            numRoman += 'XL';
        } else if (num >= 10 && num < 40) {
            num -= 10;
            numRoman += 'X';
        } else if (num >= 9 && num < 10) {
            num -= 9;
            numRoman += 'IX';
        } else if (num >= 5 && num < 9) {
            num -= 5;
            numRoman += 'V';
        } else if (num >= 4 && num < 5) {
            num -= 4;
            numRoman += 'IV';
        } else if (num >= 1 && num < 4) {
            num -= 1;
            numRoman += 'I';
        } else {
            console.log('Introduce un número');
        }
    }
    return numRoman;
}

convertToRoman(36);
convertToRoman(3);
convertToRoman(97);
convertToRoman(400);
convertToRoman(891);
convertToRoman(3999);