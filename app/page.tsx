"use client";
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Stack from './components/Stack/Stack';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
