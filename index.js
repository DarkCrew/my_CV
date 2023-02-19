const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuLines = document.querySelector('.menu-icon');
const navigationMenu = document.querySelector('.header-nav');
const welcomeMenuItems = document.querySelectorAll('.header-nav ul li');

burgerMenu.addEventListener('click', changeStateWelcomeMenu);

window.onload = function () {
  const preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
  document.documentElement.style.overflow = 'visible';
};

function changeStateWelcomeMenu() {
  burgerMenuLines.classList.toggle('active');
  navigationMenu.classList.toggle('mobile');
  burgerMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
}

if (window.innerWidth <= 1024) {
  for (let i = 0; i < welcomeMenuItems.length; i++) {
    welcomeMenuItems[i].addEventListener('click', () => {
      changeStateWelcomeMenu();
    });
  }
}

const smoothLinks = document.querySelectorAll('a[href*="#"]');

smoothLinks.forEach((smoothLink) => {
  smoothLink.addEventListener('click', function (event) {
    event.preventDefault();

    const href = this.getAttribute('href').substring(1);

    const hrefOffset = document.getElementById(href).offsetTop;

    setTimeout(function () {
      window.scrollBy({
        top: hrefOffset,
        behavior: 'smooth',
      });
    }, 500);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
