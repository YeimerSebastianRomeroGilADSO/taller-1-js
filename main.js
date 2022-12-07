addEventListener("DOMContentLoaded", ()=>{
    // 11. Escribir un programa que calcule el volumen de un elipsoide
// V = (4/3) * PI * a * b *c
let A = Number(prompt('Ingrese el valor del termino A'))
let B = Number(prompt('Ingrese el valor del termino B'))
let C = Number(prompt('Ingrese el valor del termino C'))
let formula = ((4/3)*Math.PI*A*B*C) 
console.log(`El resultado de (4/3)*(${Math.PI})*(${A})*(${B})*(${C}) es ${formula}`);
})