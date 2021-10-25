import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
const { io } = require('socket.io-client')

const socket = io('http://localhost:3001')

function ProductCard({ product: {_id, nomeProduto, precoDeArremate, lanceAtual, arrematado, img} }) {
  const [currentPreco, setCurrentPreco] = useState(lanceAtual);

  useEffect(() => {
    socket.on('updateBids', (data) => {
      console.log('Atualizar os bids');
      console.log(data);
      if (_id === data._id) {
        setCurrentPreco(data.lanceAtual);
      }
    });

  }, [_id]);

  function onClick() {
    console.log('DEU BID');
    socket.emit('bid', _id);
    return null
  }

return (
  <Card style={{ width: '18rem' }}>
  <Card.Img style={{ width: '8rem' }} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{nomeProduto}</Card.Title>
    <Card.Text>
      {`Preço: R$${currentPreco}`}
    </Card.Text>
    <Button onClick={onClick} variant="primary">{arrematado ? 'Produto Arrematado' : 'Dar Lance de R$5,00'}</Button>
  </Card.Body>
</Card>
)
}

export default ProductCard;