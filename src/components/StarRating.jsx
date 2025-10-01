import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

const StarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 1rem;
  margin: 0.3rem 0;
`;

export default function StarRating({ rating, maxRating = 5 }) {
  const filledColor = '#3a3a3c';
  const emptyColor = '#bbb';

  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color={filledColor} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color={filledColor} />);
    } else {
      stars.push(<FaRegStar key={i} color={emptyColor} />);
    }
  }

  return <StarsWrapper>{stars}</StarsWrapper>;
}
