// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll prompt functionality
document.querySelector(".scroll-prompt").addEventListener("click", function () {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(21, 27, 59, 0.95)";
    navbar.style.padding = "10px 0";
  } else {
    navbar.style.backgroundColor = "rgba(21, 27, 59, 0.9)";
    navbar.style.padding = "15px 0";
  }
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.feature, .content, .image-container');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Set initial state for animation
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.feature, .content, .image-container');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger animation after a short delay
  setTimeout(() => {
    animateOnScroll();
  }, 300);
  
});

window.addEventListener('scroll', animateOnScroll);