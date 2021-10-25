import { Card, Button } from 'react-bootstrap';
const {io} = require('socket.io-client')

const socket = io('http://localhost/3001')

function ProductCard({ product: {_id, nomeProduto, precoDeArremate, lanceAtual, arrematado, img} }) {
function onClick() {
return null
}

return (
  <Card style={{ width: '18rem' }}>
  <Card.Img style={{ width: '8rem' }} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{nomeProduto}</Card.Title>
    <Card.Text>
      {`Preço: R$${lanceAtual}`}
    </Card.Text>
    <Button onClick={onClick} disable={arrematado} variant="primary">{arrematado ? 'Produto Arrematado' : 'Dar Lance de R$5,00'}</Button>
  </Card.Body>
</Card>
)
}

export default ProductCard;