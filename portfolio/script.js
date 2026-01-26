document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.getElementById('carouselExampleCaptions');

    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 4000,
        ride: 'carousel'
    });
});