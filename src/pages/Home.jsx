import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedItems from '../components/FeaturedItems';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Hero />
      <FeaturedItems products={products} />
    </>
  );
}
