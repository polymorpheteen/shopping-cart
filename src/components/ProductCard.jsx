import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Card = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 250px;
  border-radius: 8px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 70%;
  height: auto;
`;

const ProductName = styled.h3`
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-weight: 600;
`;

const AddButton = styled.button`
  padding: 8px 12px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;

function ProductCard() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/2')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <ProductName>{product.title}</ProductName>
      <ProductPrice>{product.price}$</ProductPrice>
      <AddButton>Add to Cart</AddButton>
    </Card>
  );
}

export default ProductCard;
