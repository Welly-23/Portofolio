/**
 * Portfolio JavaScript Logic
 * Willy Alfalfa S - Professional Portfolio Website
 * 
 * Features implemented:
 * 1. Toast Notification System
 * 2. Quick Copy to Clipboard (Email & WhatsApp)
 * 3. Loading Screen & Fade Transition
 * 4. Dark/Light Mode Theme Toggle with localStorage persistence
 * 5. Sticky Navbar & Scroll Progress Bar
 * 6. Mobile Hamburger Menu with Overlay & ESC key accessibility
 * 7. Active Navigation Link Scroll Highlight
 * 8. Fade-In Scroll Animations (Intersection Observer API)
 * 9. Back To Top Button
 * 10. Interactive Form Feedback
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. TOAST NOTIFICATION SYSTEM
    // ==========================================================================
    const toastContainer = document.getElementById('toast-container');

    const showToast = (message, title = 'Informasi') => {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.setAttribute('role', 'alert');
        
        toast.innerHTML = `
            <div class="toast-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="toast-body">
                <span>${message}</span>
            </div>
        `;

        toastContainer.appendChild(toast);

        // Trigger entrance animation
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Auto remove after 3.5s
        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => {
                toast.remove();
            });
        }, 3500);
    };

    // Global event handler for buttons marked with .placeholder-action
    document.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('.placeholder-action');
        if (actionBtn) {
            e.preventDefault();
            const msg = actionBtn.getAttribute('data-msg') || 'Ini adalah fitur placeholder. Anda dapat menyesuaikan kodenya di VS Code.';
            showToast(msg);
        }
    });

    // ==========================================================================
    // 2. QUICK COPY TO CLIPBOARD
    // ==========================================================================
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const textToCopy = btn.getAttribute('data-copy');
            const label = btn.getAttribute('data-label') || 'Teks';

            if (textToCopy) {
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    showToast(`${label} (${textToCopy}) telah disalin ke clipboard!`);
                } catch (err) {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = textToCopy;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    showToast(`${label} (${textToCopy}) telah disalin ke clipboard!`);
                }
            }
        });
    });

    // ==========================================================================
    // 3. LOADING SCREEN
    // ==========================================================================
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.classList.add('fade-out');
            }
        }, 400);
    });

    // Fallback timer
    setTimeout(() => {
        if (loadingScreen && !loadingScreen.classList.contains('fade-out')) {
            loadingScreen.classList.add('fade-out');
        }
    }, 2500);

    // ==========================================================================
    // 4. DARK / LIGHT MODE THEME TOGGLE
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (userPrefersDark) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            showToast(`Mode tampilan diubah ke ${newTheme === 'dark' ? 'Gelap (Dark Mode)' : 'Terang (Light Mode)'}`);
        });
    }

    initTheme();

    // ==========================================================================
    // 5. STICKY NAVBAR & SCROLL PROGRESS BAR
    // ==========================================================================
    const header = document.getElementById('header');
    const scrollBar = document.getElementById('scroll-bar');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (header) {
            if (scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        if (scrollBar) {
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (documentHeight > 0) {
                const scrolledPercent = (scrollY / documentHeight) * 100;
                scrollBar.style.width = `${scrolledPercent}%`;
            } else {
                scrollBar.style.width = '0%';
            }
        }
    });

    // ==========================================================================
    // 6. MOBILE HAMBURGER MENU & OVERLAY
    // ==========================================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    const openMenu = () => {
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('active');
        if (mobileOverlay) mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        if (menuToggle && navMenu) {
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on screen resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // ==========================================================================
    // 7. ACTIVE NAVIGATION LINK HIGHLIGHTER
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');
    
    const highlightActiveLink = () => {
        const scrollY = window.scrollY;
        
        sections.forEach(currentSection => {
            const sectionHeight = currentSection.offsetHeight;
            const sectionTop = currentSection.offsetTop - 130;
            const sectionId = currentSection.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
            
            if (correspondingNavLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', highlightActiveLink);

    // ==========================================================================
    // 8. FADE-IN SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // ==========================================================================
    const animElements = document.querySelectorAll('.fade-in-element');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animElements.forEach(element => {
        animateOnScroll.observe(element);
    });

    // ==========================================================================
    // 9. BACK TO TOP BUTTON
    // ==========================================================================
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================================================
    // 10. CONTACT FORM FEEDBACK
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value.trim() : 'Pengunjung';
            
            showToast(`Terima kasih, ${name}! Pesan Anda telah terkirim (fitur simulasi).`);
            contactForm.reset();
        });
    }

    // ==========================================================================
    // 11. LIGHTBOX IMAGE PREVIEW MODAL LOGIC
    // ==========================================================================
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    const openImageModal = (imgSrc, title) => {
        if (!imageModal || !modalImage) return;
        modalImage.src = imgSrc;
        if (modalTitle && title) {
            modalTitle.textContent = title;
        }
        imageModal.classList.add('active');
        imageModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeImageModal = () => {
        if (!imageModal) return;
        imageModal.classList.remove('active');
        imageModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (modalImage) modalImage.src = '';
        }, 350);
    };

    // Delegation listener for preview triggers
    document.addEventListener('click', (e) => {
        const previewBtn = e.target.closest('.btn-preview-modal, .btn-preview-trigger');
        if (previewBtn) {
            e.preventDefault();
            const imgSrc = previewBtn.getAttribute('data-img');
            const title = previewBtn.getAttribute('data-title') || 'Tampilan Landingpage';
            if (imgSrc) {
                openImageModal(imgSrc, title);
            }
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeImageModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeImageModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
            closeImageModal();
        }
    });

});
