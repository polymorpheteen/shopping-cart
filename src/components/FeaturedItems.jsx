import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #2c3e50;
`;

const ProductGrid = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeaturedItems = ({ products }) => {
  return (
    <Section>
      <Title>Featured Items</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} hideAddtoCart />
        ))}
      </ProductGrid>
    </Section>
  );
};

export default FeaturedItems;
