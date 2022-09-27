function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const square_pi = 2 * Math.PI;
    const newArr = [];

    //Obtener el periodo orbital, y redondear al siguiente numero entero
    const getOrbPeriod = function (obj) {
        const a = Math.pow(earthRadius + obj.avgAlt, 3);
        const square_root = Math.sqrt(a / GM);
        const orbPeriod = Math.round(square_pi * square_root);
        //Crear un nuevo objeto
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    //Borrar la clave avgAlt y añadir la clave orbitalPeriod
    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);