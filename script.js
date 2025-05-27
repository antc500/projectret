  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;
      initMobileMenu();
    });

  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('active');
      });
    }
  }

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });

  fetch('product-card.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('product-card-container').innerHTML = data;
    });