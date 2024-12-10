import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <HeaderLink to="/">Início</HeaderLink>
        <HeaderLink to="/math">Math</HeaderLink>
        <HeaderLink to="/date">Date</HeaderLink>
        <HeaderLink to="/array">Array</HeaderLink>
        <HeaderLink to="/object">Object</HeaderLink>
        <HeaderLink to="/localstorage">LocalStorage</HeaderLink>
        <HeaderLink to="/api">API</HeaderLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
