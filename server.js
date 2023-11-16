const express = require('express');
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
const { db } = require('./public/firebaseconfig'); // Importa la instancia de Firestore
const { collection, addDoc } = require("firebase/firestore");

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/enviar-datos', async (req, res) => {
  const datos = req.body;

  try {
    // Guardar datos en Firestore
    const docRef = await addDoc(collection(db, 'usuarios'), datos);
    console.log('Datos insertados en Firestore con ID:', docRef.id);
    res.send('Datos recibidos y guardados correctamente en Firestore');
  } catch (error) {
    console.error('Error al insertar datos en Firestore:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
