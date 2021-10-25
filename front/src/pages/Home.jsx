import { useState, useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';

function Home() {
  const [isLoading, setIsloading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
      })
  }, []);


  return (        
    <CardGroup>

    </CardGroup>
  );
}

export default Home;