const { db } = require('./public/firebaseconfig'); // Importa la instancia de Firestore
const { collection, addDoc } = require("firebase/firestore");

// Elimina las líneas relacionadas con Express
const port = 8081;

// Elimina el uso de bodyParser (no necesario con fetch en el cliente)
// Elimina la configuración de Express
// Elimina las rutas de Express

// Mantén solo la lógica que guarda datos en Firestore
const guardarDatosEnFirestore = async (datos) => {
  try {
    // Guardar datos en Firestore
    const docRef = await addDoc(collection(db, 'usuarios'), datos);
    console.log('Datos insertados en Firestore con ID:', docRef.id);
    return 'Datos recibidos y guardados correctamente en Firestore';
  } catch (error) {
    console.error('Error al insertar datos en Firestore:', error);
    throw new Error('Error interno del servidor');
  }
};

// Exponer la función de guardarDatosEnFirestore si es necesario
module.exports = { guardarDatosEnFirestore };