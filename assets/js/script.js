const hiddenElements = document.querySelectorAll(
    ".section-title, .about-card, .education-card, .skill-category, .sap-card, .timeline-content, .project-card, .achievement-card, .certification-card, .contact-card"
);

hiddenElements.forEach((element) => {
    element.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((element) => {
    observer.observe(element);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});