import styled from 'styled-components';
import StarRating from './StarRating';
import React from 'react';

const Card = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 1rem;
  width: 220px;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 120px;
  height: 140px;
  object-fit: contain;
  margin: 0.5rem 0;
`;

const ProductName = styled.h3`
  color: #1c1c1e;
  font-size: 1.1rem;
  margin: 0;
  text-align: center;
  padding: 0.5rem 0;

  /* Multiline trucation */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em;
`;

const ProductCategory = styled.p`
  font-size: 0.8rem;
  font-family: 'Merriweather', sans-serif;
  color: #3a3a3c;
  font-style: italic;
`;

const ProductPrice = styled.p`
  color: #3a3a3c;
  margin: 0;
`;

const AddButton = styled.button`
  padding: 0.5rem 0.7rem;
  font-size: 0.9rem;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e;
  }
`;

function ProductCard({ product }) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <ProductName title={product.title}>{product.title}</ProductName>
      <ProductCategory>{product.category}</ProductCategory>
      <ProductPrice>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(product.price)}
      </ProductPrice>
      <StarRating rating={product.rating?.rate || 0} />
      <AddButton>Add to Cart</AddButton>
    </Card>
  );
}

export default ProductCard;
