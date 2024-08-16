import React from 'react';
import styled from "styled-components";


const HeaderContainer = styled.header`
  background-color: #003087;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  a {
    margin-left: 20px;
    color: white;
 transition: 0.3s;
    &:hover {
      color: yellow;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>GiftCardStore</Logo>
      <Nav>
   
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="mailto:ahmed.pruo@gmail.com?subject=Inquiry from AFG Website">Contact</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;