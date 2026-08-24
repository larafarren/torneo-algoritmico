function iniciarTorneo() {
  let victoriasUsuario = 0;
  let victoriasMaquina = 0;

  // ERROR LÓGICO 1: Se usa && para detener cuando uno llegue a 2 victorias
  while (victoriasUsuario < 2 && victoriasMaquina < 2) {

    let jugada = prompt("Elige: Piedra, Papel o Tijera");

    if (!jugada) {
      alert("Torneo cancelado.");
      return;
    }

    // ERROR 2: Normalización a minúsculas y sin espacios
    jugada = jugada.toLowerCase().trim();

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

    // ERROR 3: Template Literal
    console.log(`La máquina eligió: ${jugadaMaquina}`);

    // ERROR 4: Acumuladores de victorias
    if (jugada === jugadaMaquina) {
      alert(`Empate en esta ronda. Ambos eligieron ${jugada}.`);
    } else if (
      (jugada === "piedra" && jugadaMaquina === "tijera") ||
      (jugada === "papel" && jugadaMaquina === "piedra") ||
      (jugada === "tijera" && jugadaMaquina === "papel")
    ) {
      victoriasUsuario++;
      alert(`¡Ganaste la ronda! (${jugada} vence a ${jugadaMaquina})\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
    } else {
      victoriasMaquina++;
      alert(`¡Perdiste la ronda! (${jugadaMaquina} vence a ${jugada})\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
    }
  }

  // ERROR 5: Operador ternario para anuncio final
  const mensajeFinal = victoriasUsuario > victoriasMaquina
    ? `🏆 ¡Felicidades! Ganaste el torneo ${victoriasUsuario} a ${victoriasMaquina}.`
    : `🤖 La máquina ganó el torneo ${victoriasMaquina} a ${victoriasUsuario}.`;

  alert(mensajeFinal);
}
