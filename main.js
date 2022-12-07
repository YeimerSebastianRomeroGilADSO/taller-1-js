addEventListener("DOMContentLoaded", ()=>{
    let A = Number(prompt('Ingrese el valor del termino cuadratico'))
    let B = Number(prompt('Ingrese el valor del termino lineal'))
    let C = Number(prompt('Ingrese el valor del termino independiente'))
    let formula = (B**2-4*A*C) 
    let x1 = (-B+Math.sqrt(B**2-(4*A*C)))/((2*A))
    let x2 = (-B-Math.sqrt(B**2-(4*A*C)))/((2*A))
    if (formula<0){
        console.log('No tiene soluciones reales')
    }else if (A !=0){
        console.log(`El valor de x1(Raiz positiva) es igual a: ${x1}`)
        console.log(`El valor de x2(Raiz negativa) es igual a: ${x2}`)
    }
    else{
        console.log(`A tiene que ser diferente de cero(0)`)
    }
})