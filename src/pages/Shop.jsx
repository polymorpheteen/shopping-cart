import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Wrapper = styled.section`
  padding: 0.5rem 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const TitleGroup = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
`;

const ItemCount = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #666;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
`;

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <SectionHeader>
            <TitleGroup>
              <Title>Items</Title>
              <ItemCount>({products.length})</ItemCount>
            </TitleGroup>
          </SectionHeader>
          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </Container>
      </Wrapper>
    </>
  );
}
