const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3000;
const ENDPOINT_API_Terceros = 'https://fakestoreapi.com/products';

app.use(express.json());
app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get(ENDPOINT_API_Terceros);
    res.status(200).json({ status: 200, message: 'Success', data: response.data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: 500, message: 'Error obteniendo productos' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});