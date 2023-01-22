import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import swanLogo from '../../assets/swan-logo.svg';

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px;
  grid-template-areas: "logo name auth nav links";
  background-color: #1a1a1a; /* dark gray */
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 50px);
    grid-template-areas: 
    "logo"
    "name"
    "auth"
    "nav"
    "links";
  }

  @media (min-width: 601px) and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px;
    grid-template-areas: 
    "logo name"
    "auth nav"
    "links .";
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px;
    grid-template-areas: 
    "logo name auth"
    "nav links .";
  }
`;

const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const AuthContainer = styled.div`
  grid-area: auth;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AuthLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;

    &:hover {
      color: #ccc;
    }
  }
`;


const CompanyName = styled.div`
  grid-area: name;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// const NavContainer = styled.nav`
//   grid-area: nav;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

const NavLinks = styled.nav`
  grid-area: links;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;

    &:hover {
      color: #ccc;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Link to="/contact">
        <img src={swanLogo} alt="Swan Logo" />
      </Link>
    </LogoContainer>
    <CompanyName>
      <Link to="/">SwanStudios</Link>
    </CompanyName>
    <AuthContainer>
      <AuthLinks>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      </AuthLinks>
    </AuthContainer>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
  </HeaderContainer>
);

export default Header;