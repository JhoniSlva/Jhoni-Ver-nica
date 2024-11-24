document.addEventListener("DOMContentLoaded", () => {
    initializeCarousel();
    initializeTimer();
    initializeQRCode("https://jhonieveronica.netlify.app/");
    setupDarkModeToggle();
    setupMusicPlayer();
});

// Função para configurar o carrossel
function initializeCarousel() {
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
}


// Data de início
const startDate = new Date("2024-07-22T00:00:00");

// Atualiza os elementos no HTML
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
    );
    const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza os valores no HTML sem reiniciar animações
    document.getElementById("years").textContent = `${years} anos`;
    document.getElementById("months").textContent = `${months} meses`;
    document.getElementById("days").textContent = `${days} dias`;
    document.getElementById("hours").textContent = `${hours} horas`;
    document.getElementById("minutes").textContent = `${minutes} minutos`;
    document.getElementById("seconds").textContent = `${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Atualiza imediatamente ao carregar
updateCounter();
// Função para configurar o QR Code
function initializeQRCode(url) {
    const qrcodeElement = document.getElementById("qrcode");
    QRCode.toCanvas(qrcodeElement, url, error => {
        if (error) console.error("Erro ao gerar QR Code:", error);
    });
}

// Função para configurar o modo escuro
function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const lampIcon = document.getElementById("lampIcon");

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        lampIcon.src = document.body.classList.contains("dark-mode")
            ? "https://img.icons8.com/ios-filled/50/ffffff/light-off.png"
            : "https://img.icons8.com/ios-filled/50/000000/light-on.png";
    });
}

// Referências ao áudio e botão
const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

// Estado inicial
let isPlaying = false;

// Função para alternar a reprodução de música
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicToggle.textContent = "🎵 Tocar Música";
    } else {
        music.play().catch((err) => {
            console.error("Erro ao tocar música:", err);
        });
        musicToggle.textContent = "🔇 Pausar Música";
    }
    isPlaying = !isPlaying;
}

// Adiciona evento de clique ao botão de música
musicToggle.addEventListener("click", toggleMusic);

// Força o navegador a permitir autoplay se possível
document.addEventListener("DOMContentLoaded", () => {
    music.play().catch((err) => {
        console.warn("Reprodução automática bloqueada pelo navegador:", err);
    });
});

// Obtém o elemento do carrossel
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Gera dinamicamente as imagens do carrossel
for (let i = 1; i <= 10; i++) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="image/${String(i).padStart(2, '0')}.jpeg" alt="Foto ${i}">`;
    swiperWrapper.appendChild(slide);
}
