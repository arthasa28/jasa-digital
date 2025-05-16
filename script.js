// Tambahkan interaktivitas jika diperlukan di masa depan
console.log("Website Jasa Cek Digital siap digunakan.");

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
      }
    });
  }, options);

  elements.forEach((el) => {
    observer.observe(el);
  });
});
