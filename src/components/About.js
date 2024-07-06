import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 40px;
  color: ${props => props.theme.colors.quantumGreen};
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutText = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
  line-height: 1.6;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.neuralGray};
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Realm Labs
      </SectionTitle>
      <AboutContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AboutText>
          Realm Labs is at the forefront of the AI and Web3 revolution. We forge a tribe of visionaries who harness these cutting-edge technologies to transcend current limitations and architect a revolutionary, decentralized future.
        </AboutText>
        <AboutText>
          Our mission is to empower individuals and businesses to become architects of a new reality, where AI-augmented, Web3-empowered solutions lead humanity's evolution, solving global challenges and unlocking unprecedented potential.
        </AboutText>
        <AboutText>
          Join us in shaping a future that is distributed, intelligent, and ours to create. Together, we'll push the boundaries of what's possible and redefine the very essence of human potential in the digital age.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default About;