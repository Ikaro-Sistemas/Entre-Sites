// EntresSites - Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // Portfolio filter tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.service-card, .testimonial-card, .process-step, .portfolio-card, .why-item, .tech-card').forEach(el => {
    observer.observe(el);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  // Keyboard close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDemo();
  });
});

// Demo Modal
function openDemo(url, title) {
  const modal = document.getElementById('demoModal');
  const frame = document.getElementById('demoFrame');
  const modalTitle = document.getElementById('modalTitle');
  const openBtn = document.getElementById('modalOpenBtn');
  frame.src = url;
  modalTitle.textContent = title;
  openBtn.href = url;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDemo() {
  const modal = document.getElementById('demoModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    document.getElementById('demoFrame').src = '';
  }, 300);
}

// FAQ Toggle
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Counter animation
function animateCounters() {
  const nums = document.querySelectorAll('.stat-num');
  nums.forEach(el => {
    const target = el.textContent;
    const num = parseFloat(target);
    if (isNaN(num)) return;
    let start = 0;
    const inc = num / 50;
    const timer = setInterval(() => {
      start += inc;
      if (start >= num) { el.textContent = target; clearInterval(timer); return; }
      el.textContent = target.includes('%') ? Math.floor(start) + '%' : target.includes('+') ? Math.floor(start) + '+' : target.includes('h') ? Math.floor(start) + 'h' : Math.floor(start);
    }, 30);
  });
}

// Trigger counter on hero visibility
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) { animateCounters(); heroObserver.disconnect(); }
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);
