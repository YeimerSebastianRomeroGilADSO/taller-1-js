addEventListener("DOMContentLoaded", ()=>{
  // 15. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit
  let centi = Number(prompt(`Ingrese los grados centigrados`))
  let cenFaren = (centi * (9/5)) + 32
  console.log(`Los grados fahrennheit ${cenFaren}`);  
})