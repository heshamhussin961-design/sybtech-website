// ============================================
// 3D TILT EFFECT SYSTEM
// Interactive perspective tilt on hover + glow
// ============================================

(function () {
    'use strict';

    const TILT_CONFIG = {
        maxTilt: 15,           // Maximum tilt angle in degrees
        perspective: 1000,     // CSS perspective value
        speed: 400,            // Transition speed in ms
        glowSize: 200,         // Glow radius in px
        scale: 1.05            // Scale on hover
    };

    // Selectors to apply tilt effect to
    const TILT_SELECTORS = [
        '.perf-card',
        '.service-card',
        '.project-card',
        '.info-box',
        '.stat-box',
        '.social-btn'
    ];

    function initTilt() {
        const selector = TILT_SELECTORS.join(', ');
        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
            // Set perspective on parent for 3D context
            el.style.transformStyle = 'preserve-3d';
            el.style.willChange = 'transform';

            // Create glow overlay
            const glow = document.createElement('div');
            glow.classList.add('tilt-glow-overlay');
            el.style.position = 'relative';
            el.style.overflow = 'hidden';
            el.appendChild(glow);

            // Mouse enter: enable tilt
            el.addEventListener('mouseenter', () => {
                el.style.transition = `transform ${TILT_CONFIG.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
                glow.style.opacity = '1';
            });

            // Mouse move: calculate tilt
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Calculate tilt angles
                const tiltX = ((y - centerY) / centerY) * -TILT_CONFIG.maxTilt;
                const tiltY = ((x - centerX) / centerX) * TILT_CONFIG.maxTilt;

                // Apply 3D transform
                el.style.transform = `perspective(${TILT_CONFIG.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${TILT_CONFIG.scale}, ${TILT_CONFIG.scale}, ${TILT_CONFIG.scale})`;

                // Move glow to cursor position
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 225, 255, 0.15) 0%, transparent 60%)`;
            });

            // Mouse leave: reset
            el.addEventListener('mouseleave', () => {
                el.style.transition = `transform ${TILT_CONFIG.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
                el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                glow.style.opacity = '0';
            });
        });
    }

    // ── 3D DEPTH FOR CHILD ELEMENTS ──
    function addDepthToChildren() {
        // Make card headings and icons "pop out" of the card plane
        const cards = document.querySelectorAll('.perf-card, .service-card');
        cards.forEach(card => {
            card.style.transformStyle = 'preserve-3d';

            const icon = card.querySelector('.perf-card-icon, i');
            if (icon) {
                icon.style.transform = 'translateZ(30px)';
                icon.style.transition = 'transform 0.4s ease';
            }

            const h3 = card.querySelector('h3');
            if (h3) {
                h3.style.transform = 'translateZ(20px)';
            }

            const p = card.querySelector('p');
            if (p) {
                p.style.transform = 'translateZ(10px)';
            }
        });
    }

    // ── SCROLL-TRIGGERED 3D ENTRANCE ──
    function init3DScrollReveal() {
        const sections = document.querySelectorAll('.perf-section, .app-showcase-section, .footer-cyber');
        const cards = document.querySelectorAll('.perf-card, .service-card');

        // Set initial state for sections
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'perspective(1200px) rotateX(-5deg) translateY(60px) translateZ(-50px)';
            section.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        });

        // Set initial state for cards with stagger
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'perspective(1000px) rotateY(15deg) translateZ(-80px) translateX(40px)';
            card.style.transition = `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'perspective(1200px) rotateX(0deg) translateY(0) translateZ(0) rotateY(0deg) translateX(0)';
                    // Don't unobserve — allows re-entry if needed
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        sections.forEach(s => observer.observe(s));
        cards.forEach(c => observer.observe(c));
    }

    // ── STARTUP ──
    function start() {
        initTilt();
        addDepthToChildren();
        init3DScrollReveal();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }

})();
