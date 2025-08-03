
function toggleMenu() {
  const nav = document.querySelector('.menu nav, nav.menu');
  if (nav) {
    nav.classList.toggle('d-none');
  }
}
// Hide menu on mobile by default
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 768) {
    const nav = document.querySelector('.menu nav, nav.menu');
    if (nav) nav.classList.add('d-none');
  }
});
// Optional: Close menu when clicking outside (mobile)
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.menu nav, nav.menu');
  const menuIcon = document.querySelector('.MenuItem');
  if (window.innerWidth < 768 && nav && !nav.contains(e.target) && !menuIcon.contains(e.target)) {
    nav.classList.add('d-none');
  }
});


  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'active' from all buttons
        buttons.forEach(btn => {
          if (btn !== button) {
            btn.classList.remove('active');
          }
        });
        // Toggle 'active' on the clicked button
        button.classList.toggle('active');
      });
    });
  });

