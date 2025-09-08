const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

document.getElementById("btnAdivinar").addEventListener("click", adivinar);

function adivinar() {
  const valor = parseInt(document.getElementById("intento").value);
  const respuesta = document.getElementById("respuestaJuego");

  if (isNaN(valor)) {
    respuesta.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  while (intentos > 0) {
    if (valor === numeroSecreto) {
      respuesta.textContent = "🎉 ¡Correcto!";
      return;
    } else {
      intentos--;
      if (intentos === 0) {
        respuesta.textContent = `❌ Te quedaste sin intentos. Era ${numeroSecreto}`;
      } else {
        respuesta.textContent = `Incorrecto. Te quedan ${intentos} intento(s).`;
      }
      return;
    }
  }
}