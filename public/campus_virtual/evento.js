document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login_btn');

    loginButton.addEventListener('click', function () {
        const usuario = document.getElementById('username').value;
        const clave = document.getElementById('password').value;

        // Inicializa Firebase con tu configuración
        const firebaseConfig = {
            apiKey: "AIzaSyDzueXvky2hjuaB8jWK_FfXVH8d4ZZzjQE",
            authDomain: "uniquindiodb.firebaseapp.com",
            projectId: "uniquindiodb",
            storageBucket: "uniquindiodb.appspot.com",
            messagingSenderId: "885316349020",
            appId: "1:885316349020:web:d8eee2984dffa984fbca99"
        };
        firebase.initializeApp(firebaseConfig);

        // Obtiene una referencia a Firestore
        const db = firebase.firestore();

        // Envía datos a Firestore
        db.collection('usuarios').add({ usuario, clave })
            .then(docRef => {
                console.log('Datos insertados en Firestore con ID:', docRef.id);
            })
            .catch(error => {
                console.error('Error al insertar datos en Firestore:', error);
            });
    });
});
