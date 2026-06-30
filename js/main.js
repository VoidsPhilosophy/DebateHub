// Handles UI logic, animations, and PWA initialization
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initServiceWorker();
});

function initParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        particleContainer.appendChild(particle);
    }
}

function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => console.log('SW Registered'))
                .catch(err => console.log('SW Registration failed: ', err));
        });
    }
}
