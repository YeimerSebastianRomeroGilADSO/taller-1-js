addEventListener("DOMContentLoaded", ()=>{
   // 9. Escribir un programa que calcule el área y el volumen de un cilindro:
    // A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
    // V = (PI * r2) * h
    let radio = Number(prompt(`Ingrese el valor del radio `));
    let altura = Number(prompt(`Ingrese el valor de la altura `))
    let area = (2 * (Math.PI *  Math.pow(radio,2))) + ((2 * Math.PI * radio) * altura)
    console.log(`la formula es: (${2} * (${Math.PI} *  ${Math.pow(radio,2)})) + ((${2} * ${Math.PI}* ${radio}) * ${altura}) `);
    console.log(`El volumen de la esfera es: ${area}`);
})