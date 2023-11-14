const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const json2xls = require('json2xls');
const fs = require('fs');
const mysql = require('mysql'); // Agregamos la librería MySQL

app.use(express.static('public'));
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'victor1999',
  database: 'datos',
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
  } else {
    console.log('Conexión a MySQL establecida');
  }
});

app.post('/enviar-datos', (req, res) => {
  const datos = req.body; // Datos enviados desde el frontend

  // Guardar datos en la base de datos MySQL
  connection.query('INSERT INTO usuarios SET ?', datos, (error, results) => {
    if (error) {
      console.error('Error al insertar datos en MySQL:', error);
      res.status(500).send('Error interno del servidor');
    } else {
      console.log('Datos insertados en MySQL:', results);
      res.send('Datos recibidos y guardados correctamente en MySQL');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});