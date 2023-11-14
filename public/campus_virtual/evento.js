document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login_btn');

    loginButton.addEventListener('click', function () {
        const usuario = document.getElementById('username').value;
        const contraseña = document.getElementById('password').value;

        // Enviar datos al servidor
        enviarDatosAlServidor(usuario, contraseña);
    });

    function enviarDatosAlServidor(usuario, contraseña) {
        fetch('http://localhost:3000/enviar-datos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario, contraseña }),
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