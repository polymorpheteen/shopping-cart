import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2.5rem 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  flex-wrap: wrap; /* Allows stacking on small screens */
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ProductGrid = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Summary = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  padding: 1.5rem;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  background-color: #f8f8f8;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #1a252f;
  }
`;

const Container = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const IconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) return <Wrapper>Your cart is empty.</Wrapper>;

  return (
    <Wrapper>
      <Title>Your Cart</Title>

      <Content>
        <ProductGrid>
          {cartItems.map((item) => (
            <Container key={item.id}>
              <ProductDetails>
                <ProductTitle>{item.title}</ProductTitle>
                <span>Price: ${item.price.toFixed(2)}</span>
              </ProductDetails>

              <QuantityControls>
                <IconButton
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path fill="#2c3e50" d="M19 13H5v-2h14v2z" />
                  </svg>
                </IconButton>

                <span>{item.quantity}</span>

                <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path fill="#2c3e50" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </IconButton>

                <IconButton onClick={() => removeFromCart(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ff4d4f"
                      d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1M18 7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7z"
                    />
                  </svg>
                </IconButton>
              </QuantityControls>
            </Container>
          ))}
        </ProductGrid>
        <Summary>
          <h3>Order Summary</h3>
          <SummaryItem>
            <span>Total Items:</span>
            <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Subtotal:</span>
            <span>
              ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </span>
          </SummaryItem>
          <SummaryItem style={{ fontWeight: 'bold' }}>
            <span>Total:</span>
            <span>
              ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </span>
          </SummaryItem>
          <CheckoutButton
            onClick={() => alert('Congratulations! You would have made a successful purchase!')}
          >
            Proceed to Checkout
          </CheckoutButton>
        </Summary>
      </Content>
    </Wrapper>
  );
}
