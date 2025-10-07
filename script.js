// ===== HERO CAROUSEL AUTO-SLIDE =====
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-carousel-slide');
    const dots = document.querySelectorAll('.hero-carousel-dot');
    const wrapper = document.querySelector('.hero-carousel-wrapper');

    if (slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'prev');

            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === (currentIndex + 1) % totalSlides) {
                slide.classList.add('next');
            } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
                slide.classList.add('prev');
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlides();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlides();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3500);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
    });

    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoSlide);
        wrapper.addEventListener('mouseleave', startAutoSlide);
    }

    let touchStartX = 0;
    let touchEndX = 0;

    if (wrapper) {
        wrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide();
        });

        wrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextSlide();
            }
            startAutoSlide();
        });
    }

    updateSlides();
    startAutoSlide();
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for shadow effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';

            // Trigger animation
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.shot-card, .feature-card, .theme-card, .why-item, .difficulty-item'
);

animateElements.forEach(el => {
    observer.observe(el);
});

// ===== THEME CARDS INTERACTION =====
const themeCards = document.querySelectorAll('.theme-card');

themeCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove active class from all cards
        themeCards.forEach(c => c.classList.remove('active-theme'));

        // Add active class to clicked card
        card.classList.add('active-theme');

        // Optional: Add a visual feedback
        const preview = card.querySelector('.theme-preview');
        preview.style.transform = 'scale(0.95)';
        setTimeout(() => {
            preview.style.transform = 'scale(1)';
        }, 150);
    });
});

// ===== DEMO ICONS INTERACTION =====
const demoIcons = document.querySelectorAll('.demo-icon');

demoIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();

        // Add bounce animation
        icon.style.transform = 'scale(1.3)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);

        // Show feedback based on icon
        const iconText = icon.textContent;
        let message = '';

        if (iconText === '❤️') {
            message = 'Ajouté aux favoris !';
        } else if (iconText === '📤') {
            message = 'Partager ce shot';
        } else if (iconText === '📖') {
            message = 'Accéder au quiz';
        }

        if (message) {
            showToast(message);
        }
    });
});

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    // Style toast
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(29, 29, 31, 0.95)',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        opacity: '0',
        transition: 'opacity 0.3s ease',
        backdropFilter: 'blur(10px)'
    });

    document.body.appendChild(toast);

    // Fade in
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    // Fade out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
}

// ===== QUIZ OPTION INTERACTION =====
const quizOptions = document.querySelectorAll('.quiz-option:not(.quiz-option-correct)');

quizOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Simulate selection
        quizOptions.forEach(opt => {
            opt.style.background = 'var(--color-background)';
            opt.style.borderColor = 'transparent';
        });

        option.style.background = 'rgba(95, 163, 208, 0.2)';
        option.style.borderColor = 'var(--color-primary)';

        showToast('Sélection enregistrée !');
    });
});

// ===== PARALLAX EFFECT ON HERO =====
// Disabled to prevent carousel from moving with scroll
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroImage = document.querySelector('.hero-image');

//     if (heroImage && scrolled < window.innerHeight) {
//         heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
//     }
// });

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 1000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (burger && nav) {
        // Toggle menu
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
            burger.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!burger.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                burger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ===== PAGE LOAD ANIMATIONS =====
window.addEventListener('load', () => {
    // Fade in hero content
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');

    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroText.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 100);
    }

    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroImage.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 300);
    }
});

// ===== PERFORMANCE: Debounce function =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event
const debouncedScroll = debounce(() => {
    // Your scroll logic here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== CONSOLE MESSAGE =====
console.log('%c🙏 BibleShot - Un shot de Parole vivante chaque jour',
    'font-size: 16px; font-weight: bold; color: #5FA3D0;');
console.log('%cDéveloppé avec ❤️ pour nourrir ta foi quotidiennement',
    'font-size: 12px; color: #7BC67E;');

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroCarousel();

    // Add loading class removal
    document.body.classList.add('loaded');
});
