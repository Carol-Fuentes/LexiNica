// Requerimos Express
const express = require('express');
const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Ruta de ejemplo para pruebas
app.get('/', (req, res) => {
    res.send('¡Hola desde Render!');
});

// Ruta para recibir consultas del frontend
app.post('/api/consulta', (req, res) => {
    const { mensaje } = req.body; // Recibe el mensaje desde el frontend

    // Aquí puedes agregar lógica para procesar la consulta, responder, etc.
    console.log('Consulta recibida:', mensaje);
    
    // Responde con un mensaje (esto puede ser lo que desees enviar de vuelta al frontend)
    res.json({ respuesta: `Gracias por tu consulta: "${mensaje}"` });
});

// Escucha en el puerto adecuado (Render lo asigna automáticamente)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});