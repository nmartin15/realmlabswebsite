import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import logoImage from '../assets/realm-labs-logo.png';  // Ensure the path is correct

const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.colors.midnightBlack};
`;

const Logo = styled(motion.img)`
  height: 100px;  // Adjust this value based on your logo's dimensions
  width: auto;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  li {
    margin-left: 20px;
  }
  a {
    color: ${props => props.theme.colors.starkWhite};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${props => props.theme.colors.electricMagenta};
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Logo
        src={logoImage}
        alt="Realm Labs Logo"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <Nav>
        <ul>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#home">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#services">Services</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#about">About</a>
          </motion.li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
