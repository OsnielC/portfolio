document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar elementos del DOM
    const navbar = document.querySelector('.navbar');
    const mobileMenuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("navLinks");
    const hiddenText = document.querySelector(".hidden-text");
    const links = document.querySelectorAll('nav ul li a');
    const excludedLink = links[links.length - 1];
    const filteredLinks = Array.from(links).filter(link => link !== excludedLink);

    // Función para desplazarse suavemente a una sección
    function scrollToSection(targetId) {
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }

    // Mostrar el texto oculto después de un tiempo
    function showHiddenText() {
        hiddenText.classList.add("show-text");
    }

    // Alternar el menú móvil
    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle("active");
        navLinks.classList.toggle("show");
    }

    // Expandir o contraer elementos de la galería en dispositivos móviles
    function toggleGalleryItem(item) {
        if (window.innerWidth <= 768) {
            item.classList.toggle('expanded');
        }
    }

    // Manejar el clic en un enlace del menú de navegación
    function handleLinkClick(event, targetId) {
        event.preventDefault();
        scrollToSection(targetId);
    }

    // Manejar interacciones con elementos de la galería
    function handleGalleryInteraction(item) {
        toggleGalleryItem(item);
    }

    // Manejar el desplazamiento de la ventana
    function handleScroll() {
        const shouldAddScrollClass = window.scrollY > 0;
        navbar.classList.toggle('scroll', shouldAddScrollClass);
    }

    // Agregar manejadores de eventos a los enlaces del menú de navegación
    filteredLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        link.addEventListener('click', event => handleLinkClick(event, targetId));
    });

    // Mostrar el texto oculto después de un retraso
    setTimeout(showHiddenText, 1000);
    // Agregar un manejador de clic al botón de menú móvil
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
    // Agregar un manejador de desplazamiento de ventana
    window.addEventListener('scroll', handleScroll);

    // Obtener todos los elementos de la galería y agregar manejadores de eventos
    const galleryItems = document.querySelectorAll('.item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => handleGalleryInteraction(item));
        item.addEventListener('mouseover', () => handleGalleryInteraction(item));
        item.addEventListener('mouseout', () => handleGalleryInteraction(item));
    });
});
