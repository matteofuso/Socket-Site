// Update the slide when the hash changes
function updateSlide() {
    const hash = window.location.hash;
    if (hash) {
        const slide = document.querySelector(hash);
        if (slide && slide.classList.contains("carousel-item")) {
            const slideIndex = Array.from(slide.parentElement.children).indexOf(slide);
            carousel.to(slideIndex);
        }
    }
}

// Initialize the carousel
const carousel = new bootstrap.Carousel('#carouselExample')
// Event handlers
document.addEventListener("DOMContentLoaded", updateSlide);
window.addEventListener("hashchange", updateSlide);