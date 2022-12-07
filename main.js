addEventListener("DOMContentLoaded", ()=>{
    // 12. Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355
    // pesos y un IVA de 20%.
    let valorMin = 355+(355*0.20)
    let canMin = Number(prompt(`Ingrese la cantidad de minutos gastados`)) 
    let formula = valorMin * canMin
    console.log(`El valor a pagar por los minutos consumindos es ${formula}`);
})