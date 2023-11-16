function procesarFormulario(event) {
    event.preventDefault();
  
    // Obtiene los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Guarda los datos en Firestore
    guardarDatosEnFirestore(username, password);
  
    // Envía el formulario original (si es necesario)
    document.getElementById('miFormulario').submit();
  }
  
  function guardarDatosEnFirestore(username, password) {
    // Guarda los datos en la colección 'usuarios' de Firestore
    db.collection('usuarios').add({
      username: username,
      password: password,
    });
  }
  