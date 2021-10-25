const express = require('express');
const cors = require('cors');
const Product = require ('./models/Product');

const app = express();
const server = require('http').createServer(app);

app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
  }
});

io.on('connection', (socket) =>  {
  console.log(`Conexão- ${socket.id}`);
});

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.get('/products', async (req, res) => {
  const products = await Product.getAll();

  res.status(200).json(products);
});



server.listen(3001, () => {
  console.log('Server escutando na porta 3001');
});
