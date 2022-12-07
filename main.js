addEventListener("DOMContentLoaded", ()=>{
   // 18. Calcular el sueldo de un empleado dados comodatos de entrada: el nombre, hrs. De trabajo y el pago
    // en hora. Pagohora=15300
    let nombre = (prompt(`Ingrese su nombre`));
    let hrs = prompt(`Ingrese las horas de trabajo realizadas`)
    let sueldo = 15300*hrs
    console.log(`Señor ${nombre} su sueldo por ${hrs} horas de trabajo es de ${sueldo}`);
 
})