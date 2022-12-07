addEventListener("DOMContentLoaded", ()=>{
   // 13. Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en
    // kilómetros por hora, proporcione la velocidad en metros por segundos.
    let km = Number(prompt(`Ingrese los kilometros que desea convertir a ms`))
    let conversion = km*0.2778
    console.log(`el valor en kilomtros sobre segundos es de ${conversion}`); 
})