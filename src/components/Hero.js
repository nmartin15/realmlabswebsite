import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeroSection = styled(motion.section)`
  text-align: center;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
`;

const BackgroundAnimation = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, ${props => props.theme.colors.midnightBlack}, ${props => props.theme.colors.electricMagenta});
  opacity: 0.1;
`;

const Title = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: ${props => props.theme.fontWeights.black};
  margin-bottom: 20px;
  background: linear-gradient(45deg, ${props => props.theme.colors.electricMagenta}, ${props => props.theme.colors.neonBlue});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

const Subtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.h3};
  margin-bottom: 40px;
  color: ${props => props.theme.colors.neuralGray};
  position: relative;
`;

const CTAButton = styled(motion.a)`
  background-color: ${props => props.theme.colors.electricMagenta};
  color: ${props => props.theme.colors.starkWhite};
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: ${props => props.theme.fontWeights.bold};
  transition: background-color 0.3s ease;
  position: relative;
  &:hover {
    background-color: ${props => props.theme.colors.neonBlue};
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <BackgroundAnimation
        animate={{
          background: [
            'linear-gradient(45deg, #0A0A0A, #FF00FF)',
            'linear-gradient(45deg, #FF00FF, #00FFFF)',
            'linear-gradient(45deg, #00FFFF, #0A0A0A)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
      >
        AI & Web3 Vanguard
      </Title>
      <Subtitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}
      >
        Architects of the Decentralized Future
      </Subtitle>
      <CTAButton
        href="https://calendly.com/nathan-315/15min"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 0, 255, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Book Discovery Call
      </CTAButton>
    </HeroSection>
  );
};

export default Hero;
