"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import ScrollBackground from "./components/Background/ScrollBackground";

const Images = [
  "/exodia_logo.svg",
  "/assets/red-planet.webp",
  "/assets/city-center.webp",
  "/assets/city-left.webp",
  "/assets/city-right.webp",
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      const promises = Images.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject();
        });
      });

      try {
        Promise.all(promises);
      } catch (error) {
        console.error("Error preloading images", error);
      }
    };

    preloadImages();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <ScrollBackground />
          <Navbar />
          <Hero />
          <About />
          <Stack />
          <FAQ />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
