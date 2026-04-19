/* =============================================
   SCROLL REVEAL
   ============================================= */
(function() {
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                    const el = entry.target;
                    const onDone = (e) => {
                        if (e.target !== el) return; // ignorar burbujas de hijos
                        el.classList.add('reveal-complete');
                        el.removeEventListener('transitionend', onDone);
                    };
                    el.addEventListener('transitionend', onDone);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px 40px 0px'
        }
    );

    revealEls.forEach((el) => observer.observe(el));
})();

/* =============================================
   THEME TOGGLE
   ============================================= */
(function() {
    const THEME_KEY = 'reina-theme';
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');

    if (!toggle) return;

    const getTheme = () => root.dataset.theme === 'dark' ? 'dark' : 'light';

    const syncToggle = (theme) => {
        const nextActionLabel = theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro';
        toggle.setAttribute('aria-label', nextActionLabel);
        toggle.setAttribute('title', nextActionLabel);
        toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    };

    const applyTheme = (theme) => {
        root.dataset.theme = theme;
        syncToggle(theme);
    };

    applyTheme(getTheme());

    toggle.addEventListener('click', () => {
        const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);

        try {
            localStorage.setItem(THEME_KEY, nextTheme);
        } catch (error) {
            // Silently ignore storage issues and keep the in-memory theme.
        }
    });
})();

/* =============================================
   STICKY NAV
   ============================================= */
(function() {
    const nav = document.getElementById('nav');
    const desktopViewport = window.matchMedia('(min-width: 768px)');

    if (!nav) return;

    const syncNavState = () => {
        if (!desktopViewport.matches) {
            nav.classList.remove('scrolled');
            return;
        }

        nav.classList.toggle('scrolled', window.scrollY > 20);
    };

    syncNavState();
    window.addEventListener('scroll', syncNavState, {
        passive: true
    });

    if (typeof desktopViewport.addEventListener === 'function') {
        desktopViewport.addEventListener('change', syncNavState);
    } else if (typeof desktopViewport.addListener === 'function') {
        desktopViewport.addListener(syncNavState);
    }
})();

/* =============================================
   MOBILE MENU
   ============================================= */
(function() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    const links = menu ? menu.querySelectorAll('.mobile-nav-link') : [];

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
    });

    links.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
})();

/* =============================================
   MOBILE SCROLL TO TOP
   ============================================= */
(function() {
    const button = document.getElementById('mobileScrollTop');
    const mobileViewport = window.matchMedia('(max-width: 767px)');

    if (!button) return;

    const syncButtonState = () => {
        const isVisible = mobileViewport.matches && window.scrollY > 360;
        button.classList.toggle('is-visible', isVisible);
        button.setAttribute('aria-hidden', String(!isVisible));
        button.tabIndex = isVisible ? 0 : -1;
    };

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    syncButtonState();
    window.addEventListener('scroll', syncButtonState, {
        passive: true
    });

    if (typeof mobileViewport.addEventListener === 'function') {
        mobileViewport.addEventListener('change', syncButtonState);
    } else if (typeof mobileViewport.addListener === 'function') {
        mobileViewport.addListener(syncButtonState);
    }
})();

/* =============================================
   MOBILE MODAL HISTORY
   ============================================= */
const mobileModalHistory = (() => {
    const MODAL_STATE_KEY = '__reinaModal';
    const mobileViewport = window.matchMedia('(max-width: 767px)');
    const registry = new Map();
    let activeModalId = null;

    const canUseHistory = () => mobileViewport.matches && window.history && typeof window.history.pushState === 'function';

    const getCurrentState = () => {
        if (!history.state || typeof history.state !== 'object' || Array.isArray(history.state)) {
            return {};
        }

        return {
            ...history.state
        };
    };

    function register(id, api) {
        registry.set(id, api);
    }

    function open(id) {
        activeModalId = id;

        if (!canUseHistory()) return;

        const nextState = getCurrentState();
        nextState[MODAL_STATE_KEY] = id;
        history.pushState(nextState, '', window.location.href);
    }

    function requestClose(id) {
        const entry = registry.get(id);
        if (!entry) return;

        const hasModalState = canUseHistory() && history.state && history.state[MODAL_STATE_KEY] === id;

        if (hasModalState) {
            history.back();
            return;
        }

        if (entry.isOpen()) {
            entry.close({
                fromHistory: true
            });
        }

        if (activeModalId === id) {
            activeModalId = null;
        }
    }

    window.addEventListener('popstate', () => {
        if (!activeModalId) return;

        const entry = registry.get(activeModalId);
        activeModalId = null;

        if (entry && entry.isOpen()) {
            entry.close({
                fromHistory: true
            });
        }
    });

    return {
        register,
        open,
        requestClose
    };
})();

/* =============================================
   WHATSAPP LINKS
   ============================================= */
(function() {
    const WA_NUMBER = '5493417836449';

    document.querySelectorAll('.wa-link').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        link.addEventListener('click', e => {
            e.preventDefault();
            const msg = link.dataset.waMsg || 'Hola Angi, te escribo desde tu web.';
            window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
        });
    });
})();

/* =============================================
   SERVICES MODAL
   ============================================= */
(function() {
    const overlay = document.getElementById('serviceModal');
    const panel = document.getElementById('smodalPanel');
    const closeBtn = document.getElementById('smodalClose');
    const infoPanel = panel ? panel.querySelector('.smodal-info') : null;
    const numberEl = document.getElementById('smodalNumber');
    const typeEl = document.getElementById('smodalType');
    const hookEl = document.getElementById('smodalHook');
    const previewEl = document.getElementById('smodalPreview');
    const includesEl = document.getElementById('smodalIncludes');
    const nameEl = document.getElementById('smodalName');
    const descEl = document.getElementById('smodalDesc');
    const idealEl = document.getElementById('smodalIdeal');
    const approachEl = document.getElementById('smodalApproach');
    const tagsEl = document.getElementById('smodalTags');
    const ctaEl = document.getElementById('smodalCta');
    const cards = document.querySelectorAll('.service-card');
    let lastTrigger = null;

    mobileModalHistory.register('serviceModal', {
        isOpen: () => overlay.classList.contains('is-open'),
        close: closeModal
    });

    function resetModalScroll() {
        overlay.scrollTop = 0;

        if (panel) {
            panel.scrollTop = 0;
        }

        if (infoPanel) {
            infoPanel.scrollTop = 0;
        }
    }

    function renderList(listEl, items) {
        listEl.innerHTML = '';
        items.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            listEl.appendChild(li);
        });
    }

    function getServiceModalTemplate(card) {
        const template = card.nextElementSibling;
        return template && template.matches('.service-modal-template') ? template.content : null;
    }

    function getTemplateText(template, selector, fallback = '') {
        const value = template?.querySelector(selector)?.textContent.trim();
        return value || fallback;
    }

    function getTemplateList(template, selector, fallback = []) {
        const items = Array.from(template?.querySelectorAll(`${selector} li`) || [])
            .map((item) => item.textContent.trim())
            .filter(Boolean);

        return items.length ? items : fallback;
    }

    function openModal(card) {
        const modalTemplate = getServiceModalTemplate(card);
        const number = card.querySelector('.service-number')?.textContent.trim() || '';
        const fallbackName = card.querySelector('.service-title')?.textContent.trim() || '';
        const fallbackDesc = card.querySelector('.service-desc')?.textContent.trim() || '';
        const fallbackTags = Array.from(card.querySelectorAll('.service-tags li')).map((tag) => tag.textContent.trim());
        const fallbackIncludes = card.dataset.serviceIncludes ?
            card.dataset.serviceIncludes.split(',').map((item) => item.trim()).filter(Boolean) :
            [];
        const name = getTemplateText(modalTemplate, '[data-service-modal-name]', fallbackName);
        const desc = getTemplateText(modalTemplate, '[data-service-modal-desc]', fallbackDesc);
        const tags = getTemplateList(modalTemplate, '[data-service-modal-tags]', fallbackTags);
        const includes = getTemplateList(modalTemplate, '[data-service-modal-includes]', fallbackIncludes);
        const visual = card.dataset.serviceVisual || 'branding';

        lastTrigger = card;
        numberEl.textContent = number;
        typeEl.textContent = getTemplateText(modalTemplate, '[data-service-modal-type]', card.dataset.serviceType || '');
        hookEl.textContent = getTemplateText(modalTemplate, '[data-service-modal-hook]', card.dataset.serviceHook || '');
        nameEl.textContent = name;
        descEl.textContent = desc;
        idealEl.textContent = getTemplateText(modalTemplate, '[data-service-modal-ideal]', card.dataset.serviceIdeal || '');
        approachEl.textContent = getTemplateText(modalTemplate, '[data-service-modal-approach]', card.dataset.serviceApproach || '');
        ctaEl.dataset.waMsg = getTemplateText(
            modalTemplate,
            '[data-service-modal-wa-msg]',
            card.dataset.serviceWaMsg || `Hola Angi, quiero consultar por ${name}.`
        );

        renderList(includesEl, includes);
        renderList(tagsEl, tags);
        previewEl.querySelectorAll('.smodal-preview-visual').forEach((item) => {
            item.classList.toggle('is-active', item.dataset.visual === visual);
        });

        overlay.setAttribute('aria-hidden', 'false');
        overlay.classList.add('is-open');
        document.body.classList.add('modal-open');
        resetModalScroll();
        mobileModalHistory.open('serviceModal');
        closeBtn.focus({
            preventScroll: true
        });
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        lastTrigger?.focus();
        lastTrigger = null;
    }

    cards.forEach((card) => {
        card.addEventListener('click', () => openModal(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(card);
            }
        });
    });

    closeBtn.addEventListener('click', () => mobileModalHistory.requestClose('serviceModal'));

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            mobileModalHistory.requestClose('serviceModal');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            mobileModalHistory.requestClose('serviceModal');
        }
    });
})();

/* =============================================
   CASE STUDY VIDEO MODAL
   ============================================= */
(function() {
    const overlay = document.getElementById('caseVideoModal');
    const closeBtn = document.getElementById('cvmodalClose');
    const videoEl = document.getElementById('cvmodalVideo');
    const kickerEl = document.getElementById('cvmodalKicker');
    const titleEl = document.getElementById('cvmodalTitle');
    const cards = document.querySelectorAll('.cv-card[data-video-src]');
    let lastTrigger = null;

    if (!overlay || !closeBtn || !videoEl || !kickerEl || !titleEl || !cards.length) return;

    mobileModalHistory.register('caseVideoModal', {
        isOpen: () => overlay.classList.contains('is-open'),
        close: closeModal
    });

    function encodeSvg(svg) {
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }

    function escapeSvgText(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function buildPoster(card) {
        const isBefore = card.classList.contains('cv-card--before');
        const title = isBefore ?
            card.querySelector('.cv-filename')?.textContent.trim() || 'Video' :
            card.querySelector('.cv-reel-title')?.textContent.trim() || 'Reel';
        const detail = isBefore ?
            card.querySelector('.cv-filemeta')?.textContent.trim() || '' :
            card.querySelector('.cv-reel-dur')?.textContent.trim() || '';
        const kicker = isBefore ? 'ANTES' : 'DESPUES';
        const accent = isBefore ? '#7d7d8f' : '#cbd83b';
        const bgStart = isBefore ? '#0d0d18' : '#6b4e2e';
        const bgEnd = isBefore ? '#23233a' : '#c9ab86';
        const body = isBefore ? 'Captura sin edicion' : 'Reel con direccion de arte';

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1600" viewBox="0 0 900 1600">
                <defs>
                    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stop-color="${bgStart}"/>
                        <stop offset="100%" stop-color="${bgEnd}"/>
                    </linearGradient>
                    <radialGradient id="glow" cx="75%" cy="22%" r="40%">
                        <stop offset="0%" stop-color="rgba(255,255,255,0.85)"/>
                        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
                    </radialGradient>
                </defs>
                <rect width="900" height="1600" fill="url(#bg)"/>
                <rect width="900" height="1600" fill="url(#glow)" opacity="${isBefore ? '0.18' : '0.3'}"/>
                <circle cx="720" cy="220" r="110" fill="${accent}" opacity="${isBefore ? '0.16' : '0.28'}"/>
                <rect x="66" y="82" width="190" height="42" rx="21" fill="rgba(255,255,255,0.12)"/>
                <text x="96" y="110" fill="rgba(255,255,255,0.76)" font-size="22" font-family="Poppins, Arial, sans-serif" letter-spacing="5">${escapeSvgText(kicker)}</text>
                <text x="66" y="1240" fill="#fffeec" font-size="74" font-family="Playfair Display, Georgia, serif">${escapeSvgText(title)}</text>
                <text x="66" y="1304" fill="rgba(255,255,255,0.7)" font-size="28" font-family="Poppins, Arial, sans-serif" letter-spacing="3">${escapeSvgText(detail)}</text>
                <text x="66" y="1380" fill="rgba(255,255,255,0.58)" font-size="24" font-family="Poppins, Arial, sans-serif">${escapeSvgText(body)}</text>
                <circle cx="450" cy="760" r="82" fill="rgba(255,255,255,0.9)"/>
                <polygon points="430,720 510,760 430,800" fill="#1a1a2e"/>
            </svg>
        `;

        return encodeSvg(svg);
    }

    function getTitle(card) {
        return card.querySelector('.cv-reel-title')?.textContent.trim() ||
            card.querySelector('.cv-filename')?.textContent.trim() ||
            'Video';
    }

    function getPoster(card) {
        return card.dataset.videoPoster || buildPoster(card);
    }

    function openModal(card, trigger) {
        const src = card.dataset.videoSrc;
        if (!src) return;

        const side = card.classList.contains('cv-card--after') ? 'Despues' : 'Antes';
        const detail = card.closest('.cv-side')?.querySelector('.cv-side-desc')?.textContent.trim() || '';

        lastTrigger = trigger;
        kickerEl.textContent = detail ? `${side} · ${detail}` : side;
        titleEl.textContent = getTitle(card);

        videoEl.pause();
        videoEl.removeAttribute('src');
        videoEl.load();
        videoEl.poster = getPoster(card);
        videoEl.src = src;
        videoEl.currentTime = 0;
        videoEl.controls = true;
        videoEl.muted = false;
        videoEl.volume = 0.35;

        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        mobileModalHistory.open('caseVideoModal');
        requestAnimationFrame(() => closeBtn.focus());

        const playPromise = videoEl.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    }

    function closeModal() {
        if (!overlay.classList.contains('is-open')) return;

        videoEl.pause();
        videoEl.removeAttribute('src');
        videoEl.load();
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');

        if (lastTrigger) {
            lastTrigger.focus();
            lastTrigger = null;
        }
    }

    cards.forEach((card) => {
        const button = card.querySelector('.cv-play');
        if (!button) return;

        const cover = document.createElement('span');
        cover.className = 'cv-cover';
        cover.style.backgroundImage = `url("${getPoster(card)}")`;
        card.insertBefore(cover, card.firstChild);

        button.setAttribute('aria-label', 'Abrir video');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openModal(card, button);
        });
    });

    closeBtn.addEventListener('click', () => mobileModalHistory.requestClose('caseVideoModal'));

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            mobileModalHistory.requestClose('caseVideoModal');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            mobileModalHistory.requestClose('caseVideoModal');
        }
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && overlay.classList.contains('is-open')) {
            videoEl.pause();
        }
    });
})();

/* =============================================
   FOOTER YEAR
   ============================================= */
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* =============================================
   PORTFOLIO MODAL
   ============================================= */
(function() {
    const overlay = document.getElementById('portfolioModal');
    const panel = document.getElementById('pmodalPanel');
    const closeBtn = document.getElementById('pmodalClose');
    const mediaEl = document.getElementById('pmodalMedia');
    const infoPanel = panel ? panel.querySelector('.pmodal-info') : null;
    const numberEl = document.getElementById('pmodalNumber');
    const typeEl = document.getElementById('pmodalType');
    const yearEl = document.getElementById('pmodalYear');
    const nameEl = document.getElementById('pmodalName');
    const descEl = document.getElementById('pmodalDesc');
    const tagsEl = document.getElementById('pmodalTags');
    let lastTrigger = null;

    mobileModalHistory.register('portfolioModal', {
        isOpen: () => overlay.classList.contains('is-open'),
        close: closeModal
    });

    function resetModalScroll() {
        overlay.scrollTop = 0;

        if (panel) {
            panel.scrollTop = 0;
        }

        if (infoPanel) {
            infoPanel.scrollTop = 0;
        }
    }

    function openModal(item, trigger = item) {
        const name = item.dataset.name || '';
        const number = item.dataset.number || '';
        const type = item.dataset.type || '';
        const year = item.dataset.year || '';
        const desc = item.dataset.desc || '';
        const tags = item.dataset.tags ? item.dataset.tags.split(',') : [];
        const media = item.dataset.media ? JSON.parse(item.dataset.media) : [];

        lastTrigger = trigger;

        // Poblar info
        numberEl.textContent = '/ ' + number;
        typeEl.textContent = type;
        yearEl.textContent = year;
        nameEl.textContent = name;
        descEl.textContent = desc;

        // Tags
        tagsEl.innerHTML = tags.map(t =>
            `<li>${t.trim()}</li>`
        ).join('');

        // Media: recorre el array — por ahora soporta type "image" y "video"
        mediaEl.innerHTML = '';
        if (media.length > 0) {
            const first = media[0];
            if (first.type === 'image') {
                const img = document.createElement('img');
                img.src = first.src;
                img.alt = first.alt || name;
                img.className = 'pmodal-media-img';
                mediaEl.appendChild(img);
            } else if (first.type === 'video') {
                const video = document.createElement('video');
                video.src = first.src;
                video.controls = true;
                video.autoplay = false;
                video.className = 'pmodal-media-img';
                mediaEl.appendChild(video);
            }
        } else {
            mediaEl.innerHTML = '<div class="pmodal-media-placeholder">Sin imágenes aún</div>';
        }

        // Mostrar
        overlay.setAttribute('aria-hidden', 'false');
        overlay.classList.add('is-open');
        document.body.classList.add('modal-open');
        resetModalScroll();
        mobileModalHistory.open('portfolioModal');
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        lastTrigger?.focus();
        lastTrigger = null;
    }

    // Click en cada portfolio item
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            openModal(item, item);
        });
    });

    // Cerrar con botón X
    closeBtn.addEventListener('click', () => mobileModalHistory.requestClose('portfolioModal'));

    // Cerrar al hacer click fuera del panel
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            mobileModalHistory.requestClose('portfolioModal');
        }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            mobileModalHistory.requestClose('portfolioModal');
        }
    });
})();
