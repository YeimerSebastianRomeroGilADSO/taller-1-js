addEventListener("DOMContentLoaded", ()=>{
   // 7. Escribir un programa que calcule el volumen de una esfera:
    // Radio = 3 volumen de la esfera = 4/3 * PI * radio˄3
    let km =Number(prompt(`Ingrese los kilometros `, 2))
    let convKm = (km * 1000);
    let m = Number(prompt(`Ingrese los minutos`, 5));
    let convMin =(m * 60);
    let velocidad = (convKm / convMin);
    console.log(`La velocidad es: ${velocidad} m/s `);

})