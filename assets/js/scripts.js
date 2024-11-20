window.addEventListener('load', () => {
    // Mostrar el contenido después de la carga
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // 2 segundos de carga

    // Lógica del primer carrusel (con botones de navegación)
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    const showItem = (index) => {
        const totalItems = items.length;
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    };

    prevButton.addEventListener('click', () => {
        showItem(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showItem(currentIndex + 1);
    });

    showItem(currentIndex);

    // Lógica del segundo carrusel (desplazamiento automático de testimonios)
    const testimoniosContainer = document.querySelector('.testimonios-carrusel');
    const testimoniosItems = document.querySelectorAll('.testimonio-item');
    let testimoniosIndex = 0;

    const showTestimonios = (index) => {
        const totalTestimonios = testimoniosItems.length;
        if (index >= totalTestimonios) {
            index = 0;
        }
        const offset = -index * 100;
        testimoniosContainer.style.transform = `translateX(${offset}%)`;
        testimoniosIndex = index;
    };

    setInterval(() => {
        showTestimonios(testimoniosIndex + 1);
    }, 1000); // Cambia cada 2 segundos

    showTestimonios(testimoniosIndex);

});
