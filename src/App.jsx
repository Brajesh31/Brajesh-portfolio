// src/App.jsx
// Main app component with theme management and layout

import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import LightweightInteractiveBackground from './components/LightweightInteractiveBackground';
import SolarSystem3D from './components/SolarSystem3D';
import Sections from './components/Sections';
import Achievements from './components/Achievements';
import Navigation from './components/Navigation';
import MagneticCursor from './components/MagneticCursor';
import HolographicElements from './components/HolographicElements';
import RippleEffect from './components/RippleEffect';
import QuantumParticles from './components/QuantumParticles';
import FloatingActionButton from './components/FloatingActionButton';
import CustomCursor from './components/CustomCursor';
import { disableDevTools, consoleWarning } from './utils/protection';
import GoogleAnalytics from './components/GoogleAnalytics';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  // Temporarily disabled protection to test Google Analytics
  // useEffect(() => {
  //   disableDevTools();
  //   consoleWarning();
  // }, []);

  const handlePlanetClick = (sectionId) => {
    console.log('Navigating to:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    } else {
      console.log('Element not found:', sectionId);
    }
  };

  return <AppContent />;
}

function AppContent() {
  const { isDark } = useTheme();
  const handlePlanetClick = (sectionId) => {
    console.log('Navigating to:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    } else {
      console.log('Element not found:', sectionId);
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white to-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
      {/* Google Analytics */}
      <GoogleAnalytics />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Enhanced interactive elements */}
      <CustomCursor />
      <MagneticCursor />
      <HolographicElements />
      <RippleEffect />
      <QuantumParticles />
      <LightweightInteractiveBackground />
      


      {/* Main content */}
      <main className="relative z-10">
        {/* Enhanced hero section */}
        <div className="relative">
          <Hero />
        </div>
        
        {/* Enhanced solar system navigator */}
        <section className="py-20 relative z-10">
          <SolarSystem3D onPlanetClick={handlePlanetClick} />
          {/* Professional navigation instructions */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black/70 backdrop-blur-lg px-8 py-4 rounded-lg border border-white/10 shadow-2xl hover:border-white/20 hover:bg-black/80 transition-all duration-500">
              <p className="text-sm text-gray-200 text-center mb-2 font-medium">
                Interactive Solar System Navigator
              </p>
              <p className="text-xs text-gray-400 text-center">
                Click planets to explore • Drag to rotate • Scroll to zoom
              </p>
            </div>
          </div>
        </section>
        
        {/* Enhanced content sections */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />
          <Sections />
        </div>
        
        {/* Achievements section */}
        <div className="relative">
          <Achievements />
        </div>
      </main>
      
      {/* Enhanced footer */}
      <footer className="relative z-10 py-12 backdrop-blur-lg bg-white/80 dark:bg-black/40 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to Connect?</h3>
            <p className="text-gray-600 dark:text-gray-300">Let's build something amazing together</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/brajesh31" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/brajesh-kumar-9b58651a8" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:bk117134@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065l-10-7.065h20zm0 2.13l-12-8.195v15h24v-15zm12-10.065v.065l-12 8.195-12-8.195v-.065h24z"/>
              </svg>
            </a>
            <a href="https://wa.me/917452971645" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16 2.938c-7.216 0-13.062 5.847-13.062 13.062 0 2.247.604 4.46 1.749 6.389l-2.328 6.61 6.818-2.24a13.003 13.003 0 0 0 6.823 1.907c7.216 0 13.062-5.847 13.062-13.062s-5.847-13.062-13.062-13.062zM16 27.005c-2.208 0-4.386-.6-6.265-1.732l-.447-.262-4.047 1.33 1.283-3.644-.292-.472a10.995 10.995 0 1 1 19.324-10.917c2.033 2.033 3.187 4.563 3.187 7.353 0 6.064-4.943 11.007-11.008 11.007zm7.49-6.122l-2.191-.625c-.303-.087-.656-.179-1.04-.309-.507-.175-.999-.085-1.362.291l-.995 1.022c-.172.177-.479.201-.724.1a9.332 9.332 0 0 1-4.564-4.562c-.1-.245-.075-.552.102-.723l1.019-1.002c.377-.364.47-.855.293-1.36a11.128 11.128 0 0 1-.312-1.042l-.62-2.192c-.151-.527-.609-.863-1.104-.863-.137 0-.272.021-.399.067a13.447 13.447 0 0 0-1.616.638c-.461.224-.773.765-.601 1.215 1.05 2.668 3.507 5.126 6.176 6.176.451.169.992-.14 1.215-.601.245-.492.467-.905.639-1.614.097-.366-.008-.818-.405-.969z"/>
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">&copy; 2024 Brajesh Kumar. All rights reserved.</p>
        </div>
      </footer>


      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
}