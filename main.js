addEventListener("DOMContentLoaded", ()=>{
   // 6. Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
    // el resultado en metros/segundo. Velocidad = espacio/tiempo
    let km =Number(prompt(`Ingrese los kilometros `, 2))
    let convKm = (km * 1000);
    let m = Number(prompt(`Ingrese los minutos`, 5));
    let convMin =(m * 60);
    let velocidad = (convKm / convMin);

})