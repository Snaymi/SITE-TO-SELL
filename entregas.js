document.getElementById("pills-home-tab").addEventListener("click", function () {
    const textoEntregamos = document.getElementById("texto-entregamos");
    if (textoEntregamos.style.display === "none") {
      textoEntregamos.style.display = "block"; // Mostra o texto
    } else {
      textoEntregamos.style.display = "none"; // Oculta o texto
    }
  });
  
  document.getElementById("pills-profile-tab").addEventListener("click", function () {
    const textoEntregamos = document.getElementById("texto-entregamos");
    textoEntregamos.style.display = "none"; // Oculta o texto ao clicar em Contato
  });
  
  document.getElementById("pills-contact-tab").addEventListener("click", function () {
    const textoEntregamos = document.getElementById("texto-entregamos");
    textoEntregamos.style.display = "none"; // Oculta o texto ao clicar em Contact
  });