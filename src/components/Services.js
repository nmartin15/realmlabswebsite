import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.neonBlue};
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 15px;
  color: ${props => props.theme.colors.cyberYellow};
`;

const ServiceDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.neuralGray};
`;

const services = [
  {
    title: 'Fractional Consulting',
    description: 'Expert guidance on AI and Web3 integration, tailored to your business needs.'
  },
  {
    title: 'Go-to-Market Strategies',
    description: 'Launch your AI or Web3 product successfully with our comprehensive strategies.'
  },
  {
    title: 'Product Development',
    description: 'Build innovative AI and Web3 solutions from concept to launch.'
  },
  {
    title: 'Digital Transformation',
    description: 'Revolutionize your operations with cutting-edge AI and blockchain technologies.'
  }
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </SectionTitle>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesSection>
  );
};

export default Services;