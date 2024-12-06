document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const close = document.querySelector(".close");
    const menu = document.querySelector("nav ul");

    // Mostrar y ocultar el menú
    hamburger.addEventListener("click", () => {
        menu.classList.add("active");  // Mostrar el menú
        hamburger.classList.add("active");  // Ocultar la hamburguesa
        close.classList.add("active");  // Mostrar la X
    });

    close.addEventListener("click", () => {
        menu.classList.remove("active");  // Ocultar el menú
        hamburger.classList.remove("active");  // Mostrar la hamburguesa
        close.classList.remove("active");  // Ocultar la X
    });
});

window.addEventListener("scroll", function(){
    var img = document.querySelectorAll('.fade-image');
    img.forEach(function(image){
        var imagePosition = image.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if(imagePosition < windowHeight){
            image.closest('.image-container').classList.add('visible');
        }
    });
});