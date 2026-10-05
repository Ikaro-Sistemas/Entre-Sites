/* ==========================================================================
   CONVITE 15 ANOS - ALYCE RIOS DO CARMO
   Interatividade JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCountdown();
    initAudioSystem();
    initRSVPForm();
    initWishesWall();
});

/* ==========================================================================
   1. SISTEMA DE ENVELOPE E ABERTURA
   ========================================================================== */
function openRoyalInvitation() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelopeScreen = document.getElementById('envelopeScreen');
    const mainContent = document.getElementById('invitationContent');

    // Play chime sound effect
    playSparkleChime();

    // Trigger flap animation
    envelopeWrapper.classList.add('open');

    // Fade out screen after animation
    setTimeout(() => {
        envelopeScreen.classList.add('hidden');
        mainContent.classList.add('visible');

        // Auto play subtle background melody if user permitted
        toggleBackgroundAudio(true);
    }, 900);
}

/* Sparkle chime sound generator using Web Audio API (no external file needed!) */
function playSparkleChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C E G C E G notes
        freqs.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

            gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
            gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + idx * 0.08 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.6);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + idx * 0.08);
            osc.stop(ctx.currentTime + idx * 0.08 + 0.6);
        });
    } catch (e) {
        console.log('Audio Context not allowed without user gesture yet', e);
    }
}

/* ==========================================================================
   2. SISTEMA DE MÚSICA DE FUNDO (FAIRYTALE WALTZ AMBIENT)
   ========================================================================== */
let isAudioPlaying = false;
let audioCtx = null;
let bgOscillators = [];
let audioLoopInterval = null;

function initAudioSystem() {
    const audioBtn = document.getElementById('audioControlBtn');
    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            toggleBackgroundAudio();
        });
    }
}

function toggleBackgroundAudio(forcePlay = false) {
    const audioBtn = document.getElementById('audioControlBtn');
    const audioIcon = document.getElementById('audioIcon');

    if (forcePlay && isAudioPlaying) return;

    if (!isAudioPlaying || forcePlay) {
        startFairytaleMelody();
        isAudioPlaying = true;
        if (audioBtn) audioBtn.classList.add('playing');
        if (audioIcon) audioIcon.className = 'fas fa-music';
        showToast('✨ Música encantada ativada!');
    } else {
        stopFairytaleMelody();
        isAudioPlaying = false;
        if (audioBtn) audioBtn.classList.remove('playing');
        if (audioIcon) audioIcon.className = 'fas fa-volume-mute';
        showToast('🔇 Música pausada');
    }
}

function startFairytaleMelody() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx) {
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        stopFairytaleMelody();

        // Fairytale waltz notes sequence (frequencies)
        const notes = [
            392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99,
            659.25, 523.25, 493.88, 440.00, 392.00, 523.25, 659.25, 783.99
        ];

        let noteIndex = 0;

        audioLoopInterval = setInterval(() => {
            if (!isAudioPlaying || !audioCtx) return;

            const freq = notes[noteIndex % notes.length];
            noteIndex++;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 1.2);

            bgOscillators.push(osc);
            if (bgOscillators.length > 10) bgOscillators.shift();
        }, 500);

    } catch (e) {
        console.log('Audio Playback error:', e);
    }
}

function stopFairytaleMelody() {
    if (audioLoopInterval) {
        clearInterval(audioLoopInterval);
        audioLoopInterval = null;
    }
}

/* ==========================================================================
   3. PARTICULAS (PÉTALAS DE ROSA E BRILHOS DOURADOS)
   ========================================================================== */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 45;

    // Types: 0 = Gold Sparkle, 1 = Pink Petal
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 8 + 3,
            speedY: Math.random() * 1.2 + 0.4,
            speedX: Math.random() * 0.8 - 0.4,
            rotation: Math.random() * 360,
            rotSpeed: Math.random() * 2 - 1,
            opacity: Math.random() * 0.7 + 0.3,
            type: Math.random() > 0.4 ? 1 : 0
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.y += p.speedY;
            p.x += Math.sin(p.y * 0.01) + p.speedX;
            p.rotation += p.rotSpeed;

            if (p.y > height + 20) {
                p.y = -20;
                p.x = Math.random() * width;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;

            if (p.type === 1) {
                // Pink Rose Petal
                ctx.fillStyle = '#f8b1c4';
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-p.size, -p.size, -p.size * 1.5, p.size, 0, p.size * 1.8);
                ctx.bezierCurveTo(p.size * 1.5, p.size, p.size, -p.size, 0, 0);
                ctx.fill();
            } else {
                // Gold Sparkle Star
                ctx.fillStyle = '#d4af37';
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 3, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = 'rgba(243, 229, 171, 0.8)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(-p.size, 0); ctx.lineTo(p.size, 0);
                ctx.moveTo(0, -p.size); ctx.lineTo(0, p.size);
                ctx.stroke();
            }

            ctx.restore();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   4. CONTAGEM REGRESSIVA (15/05/2027 às 19:30)
   ========================================================================== */
function initCountdown() {
    // Event Date: May 15, 2027 - 19:30:00 (7:30 PM)
    const targetDate = new Date('2027-05-15T19:30:00').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

/* ==========================================================================
   5. RSVP FORM & WHATSAPP INTEGRATION
   ========================================================================== */
function initRSVPForm() {
    const rsvpForm = document.getElementById('rsvpForm');
    if (!rsvpForm) return;

    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('guestName').value.trim();
        const attendance = document.querySelector('input[name="attendance"]:checked').value;
        const companions = document.getElementById('guestCompanions').value;
        const note = document.getElementById('guestNote').value.trim();

        if (!name) {
            showToast('Por favor, digite seu nome completo.');
            return;
        }

        // Generate WhatsApp Message
        let message = `👑 *CONFIRMAÇÃO DE PRESENÇA - 15 ANOS ALYCE*\n\n`;
        message += `👤 *Nome:* ${name}\n`;
        message += `✨ *Status:* ${attendance === 'sim' ? 'Com certeza irei celebrar com a Alyce! 🎉' : 'Infelizmente não poderei comparecer ❤️'}\n`;
        if (attendance === 'sim') {
            message += `👥 *Acompanhantes:* ${companions}\n`;
        }
        if (note) {
            message += `💌 *Recado Especial:* ${note}\n`;
        }

        // WhatsApp number of Alyce / Family
        const phone = "5533998374240";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

        showToast('👑 Redirecionando para o WhatsApp...');

        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 1200);
    });
}

/* Direct WhatsApp RSVP Link */
function openDirectWhatsApp() {
    const phone = "5533998374240";
    const message = encodeURIComponent('Olá Alyce! Gostaria de confirmar minha presença na sua festa de 15 Anos em Boston! ✨👑');
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank');
}

/* ==========================================================================
   6. MURAL DE RECADOS (WISHES WALL)
   ========================================================================== */
const defaultWishes = [
    {
        name: "Família Rios",
        text: "Alyce querida, ver você se tornar essa jovem incrível nos enche de orgulho! Que sua noite de 15 anos em Boston seja verdadeiramente mágica!",
        date: "15/05/2027"
    },
    {
        name: "Amigos de Escola",
        text: "Contando os dias para celebrar seus 15 anos na festa mais linda de Boston! Você merece todo o brilho do mundo, nossa princesa! ✨👑",
        date: "15/05/2027"
    }
];

function initWishesWall() {
    renderWishes();

    const wishForm = document.getElementById('wishForm');
    if (!wishForm) return;

    wishForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('wishAuthor');
        const textInput = document.getElementById('wishText');

        const name = nameInput.value.trim();
        const text = textInput.value.trim();

        if (!name || !text) {
            showToast('Preencha seu nome e mensagem com carinho.');
            return;
        }

        const newWish = {
            name: name,
            text: text,
            date: new Date().toLocaleDateString('pt-BR')
        };

        const wishes = getSavedWishes();
        wishes.unshift(newWish);
        localStorage.setItem('alyce_wishes', JSON.stringify(wishes));

        nameInput.value = '';
        textInput.value = '';

        renderWishes();
        showToast('💖 Seu recado foi publicado no mural da Alyce!');
    });
}

function getSavedWishes() {
    const saved = localStorage.getItem('alyce_wishes');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            return defaultWishes;
        }
    }
    return defaultWishes;
}

function renderWishes() {
    const container = document.getElementById('wishesGrid');
    if (!container) return;

    const wishes = getSavedWishes();
    container.innerHTML = '';

    wishes.forEach(w => {
        const card = document.createElement('div');
        card.className = 'wish-card';
        card.innerHTML = `
            <div class="wish-author"><i class="fas fa-crown" style="color: var(--primary-gold); font-size: 0.8rem;"></i> ${escapeHtml(w.name)}</div>
            <div class="wish-text">"${escapeHtml(w.text)}"</div>
            <div class="wish-date">${w.date}</div>
        `;
        container.appendChild(card);
    });
}

/* ==========================================================================
   7. UTILITÁRIOS (COPIAR ENDEREÇO & GOOGLE CALENDAR)
   ========================================================================== */
function copyAddress() {
    const addressText = "The Fairmont Copley Plaza - Grand Ballroom, 138 St James Ave, Boston, MA 02116, EUA";
    navigator.clipboard.writeText(addressText).then(() => {
        showToast('📍 Endereço de Boston copiado!');
    }).catch(() => {
        showToast('📍 The Fairmont Copley Plaza - 138 St James Ave, Boston');
    });
}

function addToGoogleCalendar() {
    const title = encodeURIComponent("15 Anos - Alyce Rios do Carmo 👑");
    const details = encodeURIComponent("Festa Inesquecível de 15 Anos da Princesa Alyce Rios do Carmo!");
    const location = encodeURIComponent("The Fairmont Copley Plaza, 138 St James Ave, Boston, MA 02116, EUA");

    // Dates formatted for Google Calendar API: YYYYMMDDTHHMMSSZ (2027-05-15 19:30 EDT = 23:30 UTC)
    const startDate = "20270515T233000Z";
    const endDate = "20270516T040000Z";

    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(calUrl, '_blank');
}

/* Toast Message Helper */
function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast-msg';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>${msg}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}
