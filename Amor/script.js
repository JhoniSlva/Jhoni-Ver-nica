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
const startDate = new Date("2024-07-22T00:00:00");
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


// QR Code da URL
const currentUrl = window.location.href;
const qrcodeElement = document.getElementById("qrcode");

QRCode.toCanvas(qrcodeElement, currentUrl, function (error) {
    if (error) console.error(error);
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
