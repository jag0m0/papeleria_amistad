   // Obtener el parámetro de servicio de la URL
   document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const servicio = urlParams.get('servicio');
    document.getElementById('servicio').value = servicio;
});

// Enviar datos del formulario a WhatsApp
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const servicio = document.getElementById('servicio').value;
    const descripcion = document.getElementById('descripcion').value;
    
    const mensaje = `Hola, soy ${nombre}. Me gustaría solicitar una cotización para el servicio de ${servicio}. 
    Mi número de teléfono es ${telefono} y mi correo electrónico es ${correo}. Descripción de lo que necesito: ${descripcion}.`;

    const url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}


/* document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        // Activa el link correspondiente al archivo actual
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
 */