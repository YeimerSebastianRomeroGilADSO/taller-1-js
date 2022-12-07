addEventListener("DOMContentLoaded", ()=>{
   // 5. Escribir un programa que calcule la longitud y el área de una circunferencia: Radio = 4
    // Longitud de la circunferencia = 2 * PI * radio
    // Área de la circunferencia = PI * radio˄2
    let radio = Number(prompt(`Ingrese el radio `, 4));
    let longitud = (2 * Math.PI * radio);
    let area = (Math.PI * radio * Math.pow(radio,2));

    console.group(`La formula para encontrar la longitud de una circunferencia: ${2} * ${Math.PI} * ${radio**2}`);  
        console.log(`La longitud es: ${longitud}`);
    console.groupEnd();
    console.group(`La formula para encontrar el area de una circunferencia: ${Math.PI} * ${radio**2}`);
        console.log(`el area es: ${area}`)
    console.groupEnd();

})