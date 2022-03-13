export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const top = section.offsetTop;
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Forma alternativa
    // window.scrollTo({
    //   top:top,
    //   behavior:'smooth'
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
