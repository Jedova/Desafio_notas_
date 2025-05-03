
ingresarNotas("html");
ingresarNotas("css");
ingresarNotas("js");

function ingresarNotas(ramo) {
    let notas = [];
    for (let i = 1; i <= 3; i++) {
      let nota = parseFloat(prompt(`Ingrese la nota ${i} de ${ramo.toUpperCase()}:`));
      document.getElementById(`nota${i}${ramo}`).textContent = nota;
      notas.push(nota);
    }
    const promedio = (notas[0] + notas[1] + notas[2]) / 3;
    document.getElementById(`promedio${ramo}`).textContent = promedio.toFixed(1);
  }
  