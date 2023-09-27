document.addEventListener("DOMContentLoaded", function () {
  // Seleziona gli elementi SVG all'interno delle card
  const svgElements = document.querySelectorAll(".card-image");

  // Definisci le animazioni personalizzate per gli SVG
  svgElements.forEach((svgElement) => {
    anime({
      targets: svgElement,
      translateX: [60, -80], // Sposta l'elemento lungo l'asse X da 0 a 50
      translateY: [40, -80], // Sposta l'elemento lungo l'asse Y da 0 a -30
      scale: [1, 1.4], // Cambia la scala da 1 a 1.2
      rotate: "+=100deg", // Ruota di 90 gradi in senso orario
      duration: 6000, // Durata in millisecondi
      loop: true, // Ripeti l'animazione all'infinito
      easing: "easeInOutSine", // Tipo di easing
      direction: "alternate", // Alterna la direzione dell'animazione
    });
  });
});