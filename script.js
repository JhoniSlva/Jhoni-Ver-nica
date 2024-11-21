// Configuração do Swiper.js
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Data inicial: 22 de julho de 2024
const startDate = new Date("2024-06-22T00:00:00");
const timerElement = document.getElementById("timer");

function updateTimer() {
    const now = new Date();

    // Diferença total em milissegundos
    let diff = now - startDate;

    // Cálculo dos anos
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * (1000 * 60 * 60 * 24 * 365.25);

    // Cálculo dos meses
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= months * (1000 * 60 * 60 * 24 * 30.44);

    // Cálculo dos dias
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    // Cálculo das horas
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    // Cálculo dos minutos
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    // Cálculo dos segundos
    const seconds = Math.floor(diff / 1000);

    // Atualiza o elemento HTML
    timerElement.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateTimer, 1000);
updateTimer(); // Atualização inicial

// Substitua pela URL real do seu site
const siteUrl = "https://jhonieveronica.netlify.app/";

// Elemento onde o QR Code será exibido
const qrcodeElement = document.getElementById("qrcode");

// Gera o QR Code no canvas
QRCode.toCanvas(qrcodeElement, siteUrl, function (error) {
    if (error) {
        console.error("Erro ao gerar QR Code:", error);
    } else {
        console.log("QR Code gerado com sucesso!");
    }
});

// Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");
const lampIcon = document.getElementById("lampIcon");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        lampIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/light-off.png";
    } else {
        lampIcon.src = "https://img.icons8.com/ios-filled/50/000000/light-on.png";
    }
});

// Referências ao áudio e botão
const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

// Estado inicial
let isPlaying = false;

// Alternar reprodução de música
musicToggle.addEventListener("click", () => {
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
});

// Força o navegador a permitir autoplay se possível
document.addEventListener("DOMContentLoaded", () => {
    music.play().catch((err) => {
        console.warn("A reprodução automática foi bloqueada pelo navegador:", err);
    });
});
