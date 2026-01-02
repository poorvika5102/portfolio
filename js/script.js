// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dynamic year in footer
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} Poorvika`;

