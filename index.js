const express = require('express');
const bodyParser = require('body-parser');
const { runDialogFlowQuery } = require('./dialogflowClient');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await runDialogFlowQuery(userMessage);
    res.json({ reply: response.fulfillmentText });
  } catch (error) {
    console.error('Error en webhook:', error);
    res.status(500).json({ error: 'Error en el webhook' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});