require('dotenv').config();
const express = require('express');
const app = express();
const scrap = require('./src/scrap.js');

app.use(express.json());
app.get('/recover-rut', async (req, res) => {
  const { ruts } = req.body;

  try {
    const data = await scrap.verifyRut(ruts);
    console.log('End of the request');
    console.log('====================================');
    res.send({ success: true, data: data, code: 'OK' });
  } catch (error) {
    console.error(error);
    res.send({ success: false, error: 'Fallo el chequeo del run', code: 500 })
  }
});

app.get('/ping', async (req, res) => {
  res.send('pong');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

exports = module.exports = app;
