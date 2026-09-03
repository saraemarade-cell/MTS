/* MOTORISTA RACING — MTS Scripts */

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-container') && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }
});

// Smooth scroll with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = navbar.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Fade-up IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

const animTargets = [
  '.section-header',
  '.perche-card-mm',
  '.cose-text',
  '.cose-visuals',
  '.target-list-mm li',
  '.inv-card',
  '.partner-logo-static',
].join(',');

document.querySelectorAll(animTargets).forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navItems.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', setActiveNav, { passive: true });

// Form submission
const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = leadForm.querySelector('[type="submit"]');
    const fields = leadForm.querySelectorAll('[required]');
    let valid = true;

    fields.forEach(field => {
      field.style.borderColor = '';
      if (!field.value || (field.type === 'checkbox' && !field.checked)) {
        field.style.borderColor = '#D72E1F';
        valid = false;
      }
    });

    if (!valid) return;

    btn.textContent = 'Invio in corso...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Candidatura inviata!';
      btn.style.background = 'linear-gradient(135deg, #1a7a1a, #2ea82e)';
      leadForm.querySelectorAll('input, select, textarea').forEach(f => { if (f.type !== 'submit') f.value = ''; });
      setTimeout(() => {
        btn.textContent = 'Candidati ora';
        btn.style.background = '';
        btn.disabled = false;
      }, 3500);
    }, 900);
  });
}
