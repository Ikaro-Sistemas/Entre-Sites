document.addEventListener('DOMContentLoaded', () => {
  // --- WHATSAPP FLOATING MESSAGE & DYNAMIC REDIRECT ---
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = '33999483324';
      const text = 'Olá! Visitei o site da Entre Sites e gostaria de solicitar um orçamento para o meu projeto.';
      const url = `https://wa.me/55${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  // --- SMOOTH SCROLL FOR ANCHORS ---
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- CONTACT FORM INTERACTION (SIMULATED LEAD STORAGE) ---
  const contactForm = document.getElementById('agency-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get values
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const phone = document.getElementById('form-phone').value;
      const product = document.getElementById('form-product').value;
      const message = document.getElementById('form-message').value;
      
      // Visual feedback
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalText = submitBtn.innerText;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" style="width: 20px; height: 20px; border: 3px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: white; animation: spin 1s infinite linear; display: inline-block; vertical-align: middle; margin-right: 8px;"></svg>
        Processando...
      `;
      
      // Simulate API submission
      setTimeout(() => {
        // Success state
        contactForm.innerHTML = `
          <div class="glass-card" style="text-align: center; border-color: var(--accent-green); padding: 40px 20px;">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--accent-green-glow); color: var(--accent-green); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto;">
              <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="width: 32px; height: 32px;"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
            </div>
            <h3 style="font-size: 22px; color: #fff; margin-bottom: 10px;">Contato Enviado com Sucesso!</h3>
            <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 25px;">Olá ${name}, recebemos sua solicitação. Entraremos em contato no e-mail <strong>${email}</strong> ou WhatsApp em até 2 horas.</p>
            <button class="btn-primary" onclick="window.open('https://wa.me/5533999483324?text=Olá,%20acabei%20de%20enviar%20o%20formulário%20no%20site%20da%20Entre%20Sites!', '_blank')" style="display: inline-flex; align-items: center; gap: 10px;">
              <svg fill="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.451 5.424 0 9.835-4.394 9.838-9.799.002-2.618-1.01-5.08-2.857-6.93C16.598 2.025 14.137.994 11.52.994c-5.43 0-9.843 4.394-9.847 9.8c0 1.688.444 3.337 1.288 4.796L1.93 21.034l5.632-1.477c-1.492.813-2.316.634-1.492.813z"></path></svg>
              Falar no WhatsApp Imediatamente
            </button>
          </div>
        `;
      }, 1500);
    });
  }

  // --- GLASS CARD GLOW EFFECT ON MOUSEMOVE ---
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
  // Global mousemove listener for cursor glow layer
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });
});

// CSS animation helper
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
