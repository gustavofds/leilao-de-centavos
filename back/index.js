const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);

app.use(cors());

app.get('/products', async (req, res) => {

});



server.listen(3001, () => {
  console.log('Server escutando na porta 3001');
});
