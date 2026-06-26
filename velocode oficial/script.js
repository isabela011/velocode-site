const phoneNumber = "5544984341380";
const message = encodeURIComponent("Olá, vim pelo site da Velocode e gostaria de solicitar um orçamento.");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

document.getElementById("whatsappHero").href = whatsappUrl;
document.getElementById("whatsappContato").href = whatsappUrl;
document.getElementById("floatWhatsapp").href = whatsappUrl;

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  window.open(whatsappUrl, "_blank");
});


// Carrossel lateral do portfólio
const portfolioTrack = document.getElementById("portfolioTrack");
const portfolioPrev = document.querySelector(".portfolio-prev");
const portfolioNext = document.querySelector(".portfolio-next");

function scrollPortfolio(direction) {
  if (!portfolioTrack) return;
  const card = portfolioTrack.querySelector(".portfolio-card");
  const gap = 18;
  const cardWidth = card ? card.offsetWidth + gap : 360;
  portfolioTrack.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
}

if (portfolioPrev && portfolioNext) {
  portfolioPrev.addEventListener("click", () => scrollPortfolio(-1));
  portfolioNext.addEventListener("click", () => scrollPortfolio(1));
}
