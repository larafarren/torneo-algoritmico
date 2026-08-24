function iniciarTorneo() {
  let victoriasUsuario = 0;
  let victoriasMaquina = 0;

  // ERROR LÓGICO 1 SOLUCIONADO:
  // Se usa && (Y) para que el bucle se detenga apenas uno llegue a 2 victorias.
  while (victoriasUsuario < 2 && victoriasMaquina < 2) {

    let jugada = prompt("Elige: Piedra, Papel o Tijera");

    // Cancelar si el usuario cierra la ventana
    if (!jugada) {
      alert("Torneo cancelado.");
      return;
    }

    // ERROR 2 SOLUCIONADO: Normalización de texto
    jugada = jugada.toLowerCase().trim();

    // Validación de entrada
    if (jugada !== "piedra" && jugada !== "papel" && jugada !== "tijera") {
      alert("Opción no válida. Escribe Piedra, Papel o Tijera.");
      continue;
    }

    let azar = Math.random();
    let jugadaMaquina = "";

    if (azar < 0.33) {
      jugadaMaquina = "piedra";
    } else if (azar < 0.66) {
      jugadaMaquina = "papel";
    } else {
      jugadaMaquina = "tijera";
    }

    // ERROR 3 SOLUCIONADO: Template Literals
    console.log(`La máquina eligió: ${jugadaMaquina}`);

    // ERROR 4 SOLUCIONADO: Acumuladores
    if (jugada === jugadaMaquina) {
      console.log("¡Empate en esta ronda!");
      alert(`Empate. Ambos eligieron ${jugada}.`);
    } else if (
      (jugada === "piedra" && jugadaMaquina === "tijera") ||
      (jugada === "papel" && jugadaMaquina === "piedra") ||
      (jugada === "tijera" && jugadaMaquina === "papel")
    ) {
      victoriasUsuario++;
      console.log(`¡Ganaste la ronda! Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
      alert(`¡Ganaste la ronda! (${jugada} vence a ${jugadaMaquina})\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
    } else {
      victoriasMaquina++;
      console.log(`¡Perdiste la ronda! Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
      alert(`¡Perdiste la ronda! (${jugadaMaquina} vence a ${jugada})\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
    }
  }

  // ERROR 5 SOLUCIONADO: Operador ternario
  const mensajeFinal = victoriasUsuario > victoriasMaquina
    ? `🏆 ¡Felicidades! Ganaste el torneo ${victoriasUsuario} a ${victoriasMaquina}.`
    : `🤖 La máquina ganó el torneo ${victoriasMaquina} a ${victoriasUsuario}. ¡Inténtalo de nuevo!`;

  console.log(mensajeFinal);
  alert(mensajeFinal);
}
