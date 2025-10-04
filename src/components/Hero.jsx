import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const HeroSection = styled.section`
  width: 100%;
  height: 700px;
  overflow: hidden;

  .carousel .slide {
    position: relative;
  }

  .carousel .slide img {
    object-fit: cover;
    height: 700px;
    width: 100%;
  }
`;

const CaptionOverlay = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: #fff;
  max-width: 500px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000}>
        <div>
          <img src="/images/hero1.jpg" alt="Slide 1" />
          <CaptionOverlay>
            <h2>Discover Quality</h2>
            <p>Find High-quality products tailored to your lifestyle.</p>
          </CaptionOverlay>
        </div>
        <div>
          <img src="/images/hero2.jpg" alt="Slide 2" />
          <CaptionOverlay>
            <h2>Modern Essentials</h2>
            <p>Shop the latest trends in one place.</p>
          </CaptionOverlay>
        </div>
        <div>
          <img src="/images/hero3.jpg" alt="Slide 3" />
          <CaptionOverlay>
            <h2>Fast & Reliable</h2>
            <p>Experience a seamless shopping experience, every time.</p>
          </CaptionOverlay>
        </div>
      </Carousel>
    </HeroSection>
  );
}
