addEventListener("DOMContentLoaded", ()=>{
    // 14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
    // ingresando el costo de los medicamentos calcules el descuento y el precio final.

    let precio = Number(prompt(`Ingrese el valor del medicamento`))
    let desc = precio-(precio*0.10)
    console.log(`El valor del medicamento con el descuento del 10% es de ${desc}`);
})