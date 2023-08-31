// Espera a que el DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el elemento de la barra de navegación
    const navbar = document.querySelector('.navbar');
    // Botón de menú móvil y los enlaces de navegación
    const mobileMenuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("navLinks");
    // Texto oculto
    const hiddenText = document.querySelector(".hidden-text");
    // Todos los enlaces del menú de navegación
    const links = document.querySelectorAll('nav ul li a');
    // Excluye el último enlace del array de enlaces
    const excludedLink = links[links.length - 1];

    // Filtra los enlaces para excluir el último
    const filteredLinks = Array.from(links).filter(link => link !== excludedLink);

    // Agrega un evento de clic a cada enlace del menú de navegación (excepto el último)
    filteredLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // Obtiene el atributo 'href' del enlace
            const targetId = link.getAttribute('href');
            // Desplaza suavemente a la sección correspondiente
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Muestra el texto oculto después de 1 segundo
    setTimeout(() => {
        hiddenText.classList.add("show-text");
    }, 1000);

    // Agrega un evento de clic al botón de menú móvil
    mobileMenuToggle.addEventListener("click", () => {
        // Alterna la clase 'active' en el botón de menú móvil
        mobileMenuToggle.classList.toggle("active");
        // Muestra u oculta los enlaces de navegación
        navLinks.classList.toggle("show");
    });

    // Agrega un evento de desplazamiento de ventana
    window.addEventListener('scroll', function () {
        // Si el desplazamiento vertical de la ventana es mayor que 0
        if (window.scrollY > 0) {
            // Agrega la clase 'scroll' a la barra de navegación
            navbar.classList.add('scroll');
        } else {
            // Si el desplazamiento es 0, elimina la clase 'scroll' de la barra de navegación
            navbar.classList.remove('scroll');
        }
    });

    function toggleItem(item) {
        if (window.innerWidth <= 768) { // Dispositivo móvil
            item.classList.toggle('expanded');
        }
    }

    // Obtén todos los elementos con la clase 'item'
    const galleryItems = document.querySelectorAll('.item');

    // Agrega el evento de clic y el evento de paso del cursor (mouseover)
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            toggleItem(this);
        });
        item.addEventListener('mouseover', function () {
            toggleItem(this);
        });
        item.addEventListener('mouseout', function () {
            toggleItem(this);
        });
    });

});
