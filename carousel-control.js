document.addEventListener('DOMContentLoaded', () => {
    // Função para gerenciar a transição de slides
    function setupCarousel(carouselId) {
        const carouselElement = document.querySelector(`#${carouselId}`);
        const items = carouselElement.querySelectorAll('.carousel-item');
        let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

        // Botão "Next" (Próximo slide)
        const nextButton = carouselElement.querySelector('.carousel-control-next');
        nextButton.addEventListener('click', () => {
            items[activeIndex].classList.remove('active');
            activeIndex = (activeIndex + 1) % items.length; // Avança para o próximo slide
            items[activeIndex].classList.add('active');
        });

        // Botão "Previous" (Slide anterior)
        const prevButton = carouselElement.querySelector('.carousel-control-prev');
        prevButton.addEventListener('click', () => {
            items[activeIndex].classList.remove('active');
            activeIndex = (activeIndex - 1 + items.length) % items.length; // Volta para o slide anterior
            items[activeIndex].classList.add('active');
        });
    }

    // Configurando os carrosséis
    setupCarousel('carouselExampleDark1');
    setupCarousel('carouselExampleDark2');
    setupCarousel('carouselExampleDark3');
    setupCarousel('carouselExampleDark4');
});
