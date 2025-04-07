document.addEventListener("DOMContentLoaded", function () {
    const btnEntregas = document.getElementById("pills-home-tab");
    const btnContato = document.getElementById("pills-profile-tab");
    const btnContact = document.getElementById("pills-contact-tab");
    const textoEntregamos = document.getElementById("texto-entregamos");

    // Alterna a visibilidade do texto ao clicar em "Entregas"
    btnEntregas.addEventListener("click", function () {
        textoEntregamos.style.display = ""; // Remove o estilo inline
        textoEntregamos.classList.toggle("mostrar"); // Alterna a classe "mostrar"
    });

    // Oculta o texto ao clicar em "Contato"
    btnContato.addEventListener("click", function () {
        textoEntregamos.classList.remove("mostrar"); // Remove a classe "mostrar"
    });

    // Oculta o texto ao clicar em "Contact"
    btnContact.addEventListener("click", function () {
        textoEntregamos.classList.remove("mostrar"); // Remove a classe "mostrar"
    });
});