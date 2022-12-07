addEventListener("DOMContentLoaded", ()=>{
  //16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
// compone de los siguientes porcentajes:
//55% del promedio final de sus calificaciones de los tres(3) parciales.
//30% de la calificación examen final y
//15% de la calificación trabajo final.
let nota1 = Number(prompt(`Ingrese la primera nota`))
let nota2 = Number(prompt(`Ingrese la segunda nota`))
let nota3 = Number(prompt(`Ingrese la tercera nota`))
let examFin = Number(prompt(`Ingrese la nota de examen final`))
let trabaFin = Number(prompt(`Ingrese la nota del trabajo final`))
let prome = (nota1+nota2+nota3)/3
let proFin= ((prome*0.55)+(examFin*0.30)+(trabaFin*0.15))
console.log(`Su nota de promedio final es de ${proFin}`);
})