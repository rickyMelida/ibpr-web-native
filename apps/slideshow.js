// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  // Función para mostrar la siguiente imagen
  function showNextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  // Iniciar el slideshow y configurar la transición
  slides[currentSlide].style.display = "block";
  setInterval(showNextSlide, 3000); // Cambiar la imagen cada 3 segundos (ajusta el tiempo según tus necesidades)
});
