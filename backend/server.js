const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer(); // sin guardar archivos, solo datos

const app = express();
app.use(cors());

// Ruta del formulario
app.post('/api/consulta', upload.none(), (req, res) => {
  const { nombre, telefono, consulta, descripcion } = req.body;

  console.log("Consulta recibida:", nombre, telefono, consulta, descripcion);

  res.status(200).send("Consulta recibida");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));