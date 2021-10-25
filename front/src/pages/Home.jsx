import { useState, useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

function Home() {
  const [isLoading, setIsloading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
        setIsloading(false);
      })
  }, []);


  return (        
    <CardGroup>
      {isLoading ? <h2>Carregando Produtos...</h2>
      : products.map((product) => (
        <ProductCard key={product._id} product={product}/>
      ))}
    </CardGroup>
  );
}

export default Home;