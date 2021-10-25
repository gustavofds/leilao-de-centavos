import { Card, Button } from 'react-bootstrap';

function ProductCard({ product: {_id, nomeProduto, precoDeArremate, lanceAtual, arrematado, img} }) {
return (
  <Card style={{ width: '18rem' }}>
  <Card.Img style={{ width: '8rem' }} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{nomeProduto}</Card.Title>
    <Card.Text>
      {`Preço: R$${lanceAtual}`}
    </Card.Text>
    <Button disable={arrematado} variant="primary">{arrematado ? 'Produto Arrematado' : 'Dar Lance de R$5,00'}</Button>
  </Card.Body>
</Card>
)
}

export default ProductCard;