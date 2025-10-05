import styled from 'styled-components';
import StarRating from './StarRating';
import { useCart } from '../context/CartContext';
import React from 'react';

const Card = styled.div`
  border: 1px solid #e0e0e0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.7rem;
  width: 260px;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 120px;
  height: 130px;
  object-fit: contain;
  margin: 0.5rem 0;
`;

const ProductName = styled.h3`
  color: #1c1c1e;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  text-align: center;

  /* Multiline trucation */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em;
`;

const ProductCategory = styled.p`
  font-size: 0.8rem;
  color: #3a3a3c;
  font-style: italic;
`;

const ProductPrice = styled.p`
  color: #3a3a3c;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AddButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0 0.7rem;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.4);
  }
`;

function ProductCard({ product, hideAddtoCart }) {
  const { addToCart } = useCart();
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

      {!hideAddtoCart && (
        <ButtonWrapper>
          <AddButton onClick={() => addToCart(product)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#2c3e50"
                d="M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"
              />
            </svg>
          </AddButton>
        </ButtonWrapper>
      )}
    </Card>
  );
}

export default ProductCard;
