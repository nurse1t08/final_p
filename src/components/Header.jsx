import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #f5f5dc;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #f5f5dc;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>nur.shop</Logo>
    <Nav>
      <Link to="/">Главная</Link>
      <Link to="/product">Товары</Link>
    </Nav>
  </HeaderContainer>
);

export default Header;
