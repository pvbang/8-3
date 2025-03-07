const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 100000,
    disableOnInteraction: false,
  },
});

document.getElementById("nextSlideBtn").addEventListener("click", () => {
  swiper.slideNext();
});

const card = document.getElementById("card");
document.getElementById("openCardBtn").addEventListener("click", () => {
  card.classList.add("open");
});

function createHeart() {
  const heart = document.createElement("i");
  heart.classList.add("fa", "fa-heart", "heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.style.top = "100vh";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function createSparkle() {
  const sparkle = document.createElement("i");
  sparkle.classList.add("fa", "fa-star", "sparkle");
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.animationDuration = Math.random() * 3 + 2 + "s";
  sparkle.style.opacity = Math.random();
  document.querySelector(".sparkles").appendChild(sparkle);
  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

setInterval(createHeart, 150);
setInterval(createSparkle, 200);
