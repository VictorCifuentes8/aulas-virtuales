document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login_btn');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const usuario = document.getElementById('username').value;
        const contraseña = document.getElementById('password').value;

        // Enviar datos al servidor
        enviarDatosAlServidor(usuario, contraseña);
    });

    function enviarDatosFirebase(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
      
        const usuario = document.getElementById('username').value;
        const contraseña = document.getElementById('password').value;
      
        fetch('http://localhost:3000/guardar-usuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: usuario, password: contraseña }),
        })
          .then(response => response.text())
          .then(data => {
            console.log('Respuesta del servidor:', data);
            // Puedes redirigir al usuario o realizar otras acciones aquí si es necesario
          })
          .catch(error => {
            console.error('Error al enviar datos:', error);
            // Maneja el error según tus necesidades
          });
      }
      
});