onst express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware para manejar datos en formato JSON y URL encoded
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint para recibir los datos del formulario
app.post('/api/consulta', (req, res) => {
  const { nombre, telefono, consulta, descripcion } = req.body;

  // Aquí puedes hacer lo que quieras con los datos (guardar en DB, enviar un correo, etc.)
  console.log('Formulario recibido:', { nombre, telefono, consulta, descripcion });

  // Responder con éxito o error
  res.json({ success: true, message: "Datos recibidos correctamente" });
});

// Configurar el puerto en el que el servidor escuchará
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});