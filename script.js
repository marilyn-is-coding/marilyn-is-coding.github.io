/* Small progressive enhancements: navigation state, reveal effects, and mobile-menu closing. */
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const setNavState = () => navbar.classList.toggle('scrolled', window.scrollY > 16);
  setNavState();
  window.addEventListener('scroll', setNavState, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

  document.querySelectorAll('.navbar a[href^="#"]').forEach((link) => link.addEventListener('click', () => {
    const menu = document.querySelector('#navMenu');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }));
  document.querySelector('#current-year').textContent = new Date().getFullYear();
});
