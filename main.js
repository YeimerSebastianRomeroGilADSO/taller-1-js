addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números

    let num1= Number(prompt('Ingrese el numero 1', 2));
    let num2= Number(prompt('Ingrese el numero 2', 2));

    console.log(`La suma de ${num1} + ${num2} = ${num1 + num2}`);    
    console.log(`La resta de ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`La multiplicacion de ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`La division de ${num1} / ${num2} = ${num1 / num2}`);


})