function factorialize(num) {
    //Inicializar la variable donde se factorizara
    let factorial = 1;

    //Recorremos los numeros desde 1 hasta el numero asignado y operamos
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

factorialize(5);