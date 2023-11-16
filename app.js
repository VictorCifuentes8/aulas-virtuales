const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./firebase-admin');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = admin.firestore();
const usersCollection = db.collection('users');

app.post('/guardar-usuario', async (req, res) => {
  const { username, id } = req.body;

  try {
    await usersCollection.add({ username, id });
    res.send('Usuario guardado correctamente en Firestore');
  } catch (error) {
    console.error('Error al guardar en Firestore:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
