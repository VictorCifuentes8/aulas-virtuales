const admin = require('firebase-admin');

const serviceAccount = {
    apiKey: "AIzaSyBjG1LWzbmJi-pcukcTqA28geHlPSuoEKA",
    authDomain: "campus-virtual-84728.firebaseapp.com",
    databaseURL: "https://campus-virtual-84728-default-rtdb.firebaseio.com",
    projectId: "campus-virtual-84728",
    storageBucket: "campus-virtual-84728.appspot.com",
    messagingSenderId: "970169307248",
    appId: "1:970169307248:web:f68a81302024a2087a64b5",
    measurementId: "G-Q5ZQT7NTNX"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://campus-virtual-84728-default-rtdb.firebaseio.com',
});

module.exports = admin;


