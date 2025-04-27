let testimonialIndex = 0; // Renamed variable for testimonials
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
    showTestimonial(testimonialIndex);
}

setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

// Removed carousel functionality as Bootstrap handles it now

// Debug logs for carousel functionality
let carouselIndex = 0; // Variable for carousel

function moveCarousel(direction) {
    console.log(`Moving carousel: ${direction}`); // Debug log
    const items = document.querySelectorAll('.carousel-item');
    items[carouselIndex].classList.remove('active');
    carouselIndex = (carouselIndex + direction + items.length) % items.length;
    items[carouselIndex].classList.add('active');
    console.log(`Current carousel index: ${carouselIndex}`); // Debug log
}

// Auto-scroll functionality for carousel
setInterval(() => {
    console.log('Auto-scrolling carousel'); // Debug log
    moveCarousel(1); // Move to the next item
}, 5000); // Change every 5 seconds
