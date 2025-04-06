document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("caixa-bolhas");

    for (let i = 0; i < 50; i++) { // Número de bolhas
        let bubble = document.createElement("div");
        bubble.className = "bubble";

        // Tamanhos aleatórios
        let size = Math.random() * 40 + 10; // Entre 10px e 50px
        bubble.style.setProperty("--size", `${size}px`);

        // Posição aleatória
        bubble.style.left = `${Math.random() * 100}%`;

        // Atraso aleatório para cada bolha
        bubble.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(bubble);
    }
});
