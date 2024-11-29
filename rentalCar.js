
function rentalCar(tipoVehiculo, diasAlquiler, sillaParaBebe) {
    let costoDiario;
    //Julian recomendo usar switch en lugar de else if, pero tranquilamente se podria hacer de las dos maneras. En este caso use un switch
    switch (tipoVehiculo) {
        case "compacto":
            costoDiario = 14000;
            break;
        case "mediano":
            costoDiario = 17000;
            break;
        case "camioneta":
            costoDiario = 28000;
            break;
        default:
            return "Tipo de vehículo no válido";
    }
    // Ahora calculo el costo base sin tener en cuenta el costo de la silla para bebes.
    let costoBase = costoDiario * diasAlquiler;
    // En las siguientes lienas de codigo estoy contemplando el costo de la silla para bebes.
    if (sillaParaBebe) {
        costoBase += 1200 * diasAlquiler;
    }
    return costoBase;
    //Este return me retorna el costo total por el alquiler.
}
//Ahora aplico un console log para el caso del auto compacto sin el alquiler de la silla para bebes.
console.log("Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, el monto total a pagar es de $" + rentalCar("compacto", 3, false)); 
/*
Ahora dejo los 2 console log restantes como comentarios, que seria el auto mediano con alquiler de silla para bebes y la camioneta tambien con alquiler de silla para bebes.
console.log("Estimado cliente: en base al tipo de vehículo mediano alquilado, considerando los 5 días utilizados, el monto total a pagar es de $" + rentalCar("mediano", 5, true) + " con silla para bebé."); 
console.log("Estimado cliente: en base al tipo de vehículo camioneta alquilado, considerando los 7 días utilizados, el monto total a pagar es de $" + rentalCar("camioneta", 7, true) + " con silla para bebé.")
*/