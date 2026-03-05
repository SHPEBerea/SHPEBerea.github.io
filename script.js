// Load navbar and footer components
document.addEventListener('DOMContentLoaded', function() {
  // Load navbar
  fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById('navbar-placeholder');
      placeholder.outerHTML = data;
      
      // After navbar is loaded, set up mobile navbar close functionality
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');

      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          // Check if navbar is expanded (on mobile)
          if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
          }
        });
      });
    })
    .catch(error => console.error('Error loading navbar:', error));

  // Load footer
  fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById('footer-placeholder');
      placeholder.outerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});