addEventListener("DOMContentLoaded", ()=>{
  // 17. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
    // producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
    // tiempo y de un producto a otro, este dato se lee por teclado.
    let valorPro = Number(prompt(`Ingrese el costo del producto `));
    let valorIva= Number(prompt(`Ingrese el costo del IVA`));
    let iva= valorIva/100
    let costoTotal= valorPro+(valorPro*iva)
    console.log(`Su nota de promedio final es de ${costoTotal}`);
})