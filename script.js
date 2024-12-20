document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const ctaButton = document.querySelector('.cta-button');
    const socialIcons = document.querySelectorAll('.social-icon img');
    const form = document.querySelector('.contact-form');
    const scrollButton = document.querySelector('.scroll-to-top');
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.style.display = 'none';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = '#2ecc71';
    notification.style.padding = '15px';
    notification.style.color = 'white';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    notification.textContent = 'Message envoyé avec succès !';
    document.body.appendChild(notification);

    // Rétrécir la barre de navigation lors du défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.8)';
        }

     

    // Animation au survol des icônes sociales
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1)';
            icon.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });

    // Animation du bouton "Contactez-moi"
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'scale(1.05)';
            ctaButton.style.transition = 'transform 0.3s ease';
        });
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'scale(1)';
        });
    }

    
    });

    // Ajouter un effet de défilement doux pour les liens d'ancrage
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,  // Décalage pour la barre de navigation fixe
                behavior: 'smooth'
            });
        });
    });

    // Animations au défilement
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    const animateOnScroll = () => {
        const windowHeight = window.innerHeight;
        elementsToAnimate.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop <= windowHeight - 100) {
                el.classList.add('visible');
            }
        });




