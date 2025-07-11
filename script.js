// Animate the button glow
const btn = document.querySelector('.contact-btn');
let mouseX = 0;
let mouseY = 0;

btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    const glow = btn.querySelector('.btn-glow');
    glow.style.left = `${mouseX}px`;
    glow.style.top = `${mouseY}px`;
});

// Make banner text repeat
const bannerText = document.querySelector('.banner-text');
bannerText.innerHTML = bannerText.innerHTML.repeat(4);




