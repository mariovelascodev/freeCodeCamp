function booWho(bool) {

    //Saca tipo de dato que es
    let type = typeof (bool);

    //Compara si el valor es booleano o no lo es
    if (type === 'boolean') {
        return true
    }

    return false;
}

booWho(null);