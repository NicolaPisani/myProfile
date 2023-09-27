document.addEventListener("DOMContentLoaded", function () {
  // Il tuo codice JavaScript per le animazioni qui

  // Definisci l'animazione per il primo SVG
  // const svgavatar1 = document.getElementById("svgavatar1");
  // const svgavatar2 = document.getElementById("svgavatar2");
  const svgicon1 = document.getElementById("svgicon1");
  const svgicon2 = document.getElementById("svgicon2");
  const svgicon3 = document.getElementById("svgicon3");
  const svgicon4 = document.getElementById("svgicon4");

  const animation1 = anime({
    targets: svgicon1,
    translateX: 10, // Sposta l'elemento di 250px lungo l'asse X
    rotate: "1turn", // Ruota l'elemento di 360 gradi
    duration: 10000, // Durata dell'animazione in millisecondi (1 secondo)
    autoplay: false, // Impedisci l'avvio automatico
  });

  const animation2 = anime({
    targets: svgicon2,
    translateX: 10, // Sposta l'elemento di 250px lungo l'asse X
    rotate: "1turn", // Ruota l'elemento di 360 gradi
    duration: 10000, // Durata dell'animazione in millisecondi (1 secondo)
    autoplay: false, // Impedisci l'avvio automatico
  });

  const animation3 = anime({
    targets: svgicon3,
    translateX: 10, // Sposta l'elemento di 250px lungo l'asse X
    rotate: "1turn", // Ruota l'elemento di 360 gradi
    duration: 10000, // Durata dell'animazione in millisecondi (1 secondo)
    autoplay: false, // Impedisci l'avvio automatico
  });

  const animation4 = anime({
    targets: svgicon4,
    translateX: 10, // Sposta l'elemento di 250px lungo l'asse X
    rotate: "1turn", // Ruota l'elemento di 360 gradi
    duration: 10000, // Durata dell'animazione in millisecondi (1 secondo)
    autoplay: false, // Impedisci l'avvio automatico
  });

  
  // Attiva le animazioni per gli SVG nel footer
  svgicon1.addEventListener("mouseenter", () => {
    animation1.play();
  });

  svgicon2.addEventListener("mouseenter", () => {
    animation2.play();
  });

  svgicon3.addEventListener("mouseenter", () => {
    animation3.play();
  });

  svgicon4.addEventListener("mouseenter", () => {
    animation4.play();
  });
  // const svgavatar = anime({
  //   targets: svgavatar1,
  //   translateX: 10, // Sposta l'elemento di 250px lungo l'asse X
  //   rotate: "1turn", // Ruota l'elemento di 360 gradi
  //   duration: 100000, // Durata dell'animazione in millisecondi (1 secondo)
  //   autoplay: false, // Impedisci l'avvio automatico
  // });

  // Definisci l'animazione per il secondo SVG
  // const svgavatars = anime({
  //   targets: svgavatar2,
  //   translateX: 10, // Sposta l'elemento di 250px lungo l'asse X
  //   rotate: "1turn", // Ruota l'elemento di 360 gradi
  //   duration: 100000, // Durata dell'animazione in millisecondi (1 secondo)
  //   autoplay: false, // Impedisci l'avvio automatico
  // });

  // Attiva le animazioni al passaggio del mouse o a un evento specifico
  // svgavatar1.addEventListener("mouseenter", () => {
  //   svgavatar.play(); // Avvia l'animazione del primo SVG al passaggio del mouse
  // });

  // svgavatar2.addEventListener("mouseenter", () => {
  //   svgavatars.play(); // Avvia l'animazione del secondo SVG al click
  // });

  const flip = new Flip({
    target: ".card",
    duration: 10000,
    axis: "y",
  });

});
