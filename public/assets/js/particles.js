(() => {
    if (document.querySelector('.particle-background')) {
        return;
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
        return;
    }

    canvas.className = 'particle-background';
    canvas.setAttribute('aria-hidden', 'true');
    Object.assign(canvas.style, {
        position: 'fixed',
        inset: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '0',
    });

    const style = document.createElement('style');
    style.textContent = 'body > :not(.particle-background) { position: relative; z-index: 1; }';
    document.head.append(style);
    document.body.prepend(canvas);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let particles = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const createParticles = () => {
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const count = Math.min(65, Math.max(18, Math.floor((width * height) / 22000)));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.4 + 0.6,
            velocityX: (Math.random() - 0.5) * 0.25,
            velocityY: (Math.random() - 0.5) * 0.25,
        }));
    };

    const draw = (animate) => {
        context.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
            if (animate) {
                particle.x += particle.velocityX;
                particle.y += particle.velocityY;

                if (particle.x < 0 || particle.x > width) particle.velocityX *= -1;
                if (particle.y < 0 || particle.y > height) particle.velocityY *= -1;
            }

            context.beginPath();
            context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(237, 59, 59, 0.48)';
            context.fill();
        });

        particles.forEach((particle, index) => {
            for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
                const other = particles[otherIndex];
                const distance = Math.hypot(particle.x - other.x, particle.y - other.y);

                if (distance < 115) {
                    context.beginPath();
                    context.moveTo(particle.x, particle.y);
                    context.lineTo(other.x, other.y);
                    context.strokeStyle = `rgba(237, 59, 59, ${(1 - distance / 115) * 0.12})`;
                    context.lineWidth = 0.7;
                    context.stroke();
                }
            }
        });

        if (animate && !document.hidden) {
            animationFrame = window.requestAnimationFrame(() => draw(true));
        }
    };

    const start = () => {
        window.cancelAnimationFrame(animationFrame);
        draw(!reducedMotion.matches);
    };

    createParticles();
    start();
    window.addEventListener('resize', () => {
        createParticles();
        start();
    });
    document.addEventListener('visibilitychange', start);
    reducedMotion.addEventListener('change', start);
})();
