import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: #fff;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;
  font-family: 'Noto Sans', sans-serif;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;

  &:hover {
    color: #758ea7ff;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>ShopVerse</Logo>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/shop">Products</NavItem>
        <NavItem to="/cart">Cart</NavItem>
      </Nav>
    </HeaderContainer>
  );
}
