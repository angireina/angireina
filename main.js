/* =============================================
   SCROLL REVEAL
   ============================================= */
(function () {
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px 40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
})();

/* =============================================
   STICKY NAV
   ============================================= */
(function () {
    const nav = document.getElementById('nav');

    const onScroll = () => {
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
})();

/* =============================================
   MOBILE MENU
   ============================================= */
(function () {
    const toggle = document.getElementById('menuToggle');
    const menu   = document.getElementById('mobileMenu');
    const links  = menu.querySelectorAll('.mobile-nav-link');

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
   WHATSAPP LINKS
   ============================================= */
(function () {
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
   FOOTER YEAR
   ============================================= */
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* =============================================
   PORTFOLIO MODAL
   ============================================= */
(function () {
    const overlay   = document.getElementById('portfolioModal');
    const closeBtn  = document.getElementById('pmodalClose');
    const mediaEl   = document.getElementById('pmodalMedia');
    const numberEl  = document.getElementById('pmodalNumber');
    const typeEl    = document.getElementById('pmodalType');
    const yearEl    = document.getElementById('pmodalYear');
    const nameEl    = document.getElementById('pmodalName');
    const descEl    = document.getElementById('pmodalDesc');
    const tagsEl    = document.getElementById('pmodalTags');

    function openModal(item) {
        const name   = item.dataset.name   || '';
        const number = item.dataset.number || '';
        const type   = item.dataset.type   || '';
        const year   = item.dataset.year   || '';
        const desc   = item.dataset.desc   || '';
        const tags   = item.dataset.tags   ? item.dataset.tags.split(',') : [];
        const media  = item.dataset.media  ? JSON.parse(item.dataset.media) : [];

        // Poblar info
        numberEl.textContent = '/ ' + number;
        typeEl.textContent   = type;
        yearEl.textContent   = year;
        nameEl.textContent   = name;
        descEl.textContent   = desc;

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
                img.src   = first.src;
                img.alt   = first.alt || name;
                img.className = 'pmodal-media-img';
                mediaEl.appendChild(img);
            } else if (first.type === 'video') {
                const video = document.createElement('video');
                video.src      = first.src;
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
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    // Click en cada portfolio item
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            openModal(item);
        });
    });

    // Cerrar con botón X
    closeBtn.addEventListener('click', closeModal);

    // Cerrar al hacer click fuera del panel
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });

    // Cerrar con Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
})();
