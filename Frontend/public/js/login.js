document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const loginForm = document.getElementById('loginForm');
    const btnAcceder = document.getElementById('btnAcceder');
    const btnCrear = document.getElementById('btnCrear');
    
    // En la página de registro
    const btnRegistrar = document.getElementById('btnRegistrar');
    const btnVolver = document.getElementById('btnVolver');

    // Evento para el botón Acceder
    if (btnAcceder) {
        btnAcceder.addEventListener('click', function() {
            // Aquí puedes agregar la validación del formulario
            window.location.href = '/principal.html';
        });
    }

    // Evento para el botón Crear Cuenta
    if (btnCrear) {
        btnCrear.addEventListener('click', function() {
            window.location.href = '/registro.html';
        });
    }

    // Eventos para la página de registro
    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', function() {
            // Aquí irá la lógica de registro
            window.location.href = '/principal.html';
        });
    }

    if (btnVolver) {
        btnVolver.addEventListener('click', function() {
            window.location.href = '/index.html';
        });
    }

    // Evento submit del formulario
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí irá la lógica de autenticación cuando la implementes
        });
    }
});