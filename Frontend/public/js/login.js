document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const loginForm = document.getElementById('loginForm');
    const btnAcceder = document.getElementById('btnAcceder');
    const btnCrear = document.getElementById('btnCrear');
    
    // Evento para el botón Acceder
    if (btnAcceder) {
        btnAcceder.addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí puedes agregar la validación del formulario
            window.location.href = 'principal.html';
        });
    }

    // Evento para el botón Crear Cuenta
    if (btnCrear) {
        btnCrear.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'registro.html';
        });
    }

    // Evento submit del formulario
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí irá la lógica de autenticación cuando la implementes
            window.location.href = 'principal.html';
        });
    }
});