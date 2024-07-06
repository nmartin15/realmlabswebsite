import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.midnightBlack};
  color: ${props => props.theme.colors.neuralGray};
  padding: 40px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Copyright = styled.p`
  font-size: ${props => props.theme.fontSizes.caption};
  margin-bottom: 20px;
`;

const FooterNav = styled.nav`
  margin-bottom: 20px;
  
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 0 15px;
  }
  
  a {
    color: ${props => props.theme.colors.neuralGray};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.electricMagenta};
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.neuralGray};
  font-size: 24px;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.neonBlue};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterNav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </FooterNav>
        <SocialIcons>
          <SocialIcon 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-github"></i>
          </SocialIcon>
        </SocialIcons>
        <Copyright>
          &copy; {new Date().getFullYear()} Realm Labs. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;