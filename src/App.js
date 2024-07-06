import React from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.midnightBlack};
  color: ${props => props.theme.colors.starkWhite};
  font-family: ${props => props.theme.fonts.primary};
  min-height: 100vh;
`;

const MainContent = styled(motion.main)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <MainContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Services />
          <About />
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;