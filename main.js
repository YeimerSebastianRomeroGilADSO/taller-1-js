addEventListener("DOMContentLoaded", ()=>{
   // 8. Escribir un programa que evalúe la siguiente expresión:
    // (a+7*c)/(b+2-a)+2*b 
    let a = Number(prompt(`Ingrese el valor de a `));
    let b = Number(prompt(`Ingrese el valor de b `))
    let c = Number(prompt(`Ingrese el valor de c `))
    let expresion = (a+7*c)/(b+2-a)+2*b ;
    console.log(`la formula es: (${a} + 7 * ${c}) / ( ${b} + 2 - ${a}) + 2 * ${b} `);
    console.log(`El volumen de la esfera es: ${expresion}`);
})