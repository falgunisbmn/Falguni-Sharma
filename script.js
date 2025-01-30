// Ensure DOM is fully loaded before running animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate navbar menu items
    gsap.from(".navbar ul li", {
        opacity: 0,
        y: -20, // Moves items up 20px initially
        duration: 1, // Animation lasts 1 second
        stagger: 0.2, // Delay of 0.2s between each item's animation
    });

    // Animate banner title
    gsap.from(".banner h1", {
        opacity: 0,
        y: 20, // Moves title down 20px initially
        duration: 1.5, // Animation lasts 1.5 seconds
    });

    // Animate banner description
    gsap.from(".banner p", {
        opacity: 0,
        y: 20, // Moves paragraph down 20px initially
        duration: 1.5, // Animation lasts 1.5 seconds
        delay: 0.5, // Starts 0.5 seconds after the title animation
    });

    // Animate sections as they scroll into view
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section, // Animation triggers when the section enters the viewport
                start: "top 80%", // Starts when the section's top is 80% into the viewport
            },
            opacity: 0,
            y: 30, // Moves section down 30px initially
            duration: 1.5, // Animation lasts 1.5 seconds
        });
    });

    // Animate gallery items with a staggered effect
    const galleryItems = document.querySelectorAll(".gallery-item");
    gsap.from(galleryItems, {
        scrollTrigger: {
            trigger: "#gallery", // Animation triggers when the gallery section enters the viewport
            start: "top 80%", // Starts when the gallery section's top is 80% into the viewport
        },
        opacity: 0,
        y: 30, // Moves gallery items down 30px initially
        duration: 1, // Animation lasts 1 second
        stagger: 0.2, // Delay of 0.2s between each item's animation
    });
});
