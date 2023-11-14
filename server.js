const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const json2xls = require('json2xls');
const fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/enviar-datos', (req, res) => {
    const datos = req.body; // Datos enviados desde el frontend

    // Guardar datos en un archivo Excel
    const xls = json2xls([datos]);
    fs.writeFileSync('datos.xlsx', xls, 'binary');

    res.send('Datos recibidos y guardados correctamente en Excel');
});

app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});