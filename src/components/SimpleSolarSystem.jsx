// src/components/SimpleSolarSystem.jsx
// Simple 2D solar system without Three.js

import React from 'react';

// Updated PLANETS to match modern portfolio sections:
const PLANETS = [
  { id: 'about',      label: 'About',           color: '#f5c36b' },
  { id: 'experience', label: 'Experience',      color: '#8a2be2' },
  { id: 'ai-skills',  label: 'AI Skills',       color: '#4169e1' },
  { id: 'web-skills', label: 'Web Dev',         color: '#228b22' },
  { id: 'blog',       label: 'Blog',            color: '#ffa500' },
  { id: 'projects',   label: 'Projects',        color: '#20b2aa' },
  { id: 'services',   label: 'Services',        color: '#2f4f4f' },
  { id: 'community',  label: 'Community',       color: '#ff6347' },
  { id: 'events',     label: 'Talks & Events',  color: '#dc143c' },
  { id: 'contact',    label: 'Contact',         color: '#9932cc' },
];

export default function SimpleSolarSystem({ onPlanetClick }) {
  return (
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gold-300 mb-4">Navigation</h3>
          <p className="text-gray-400">Click to navigate to sections</p>

          {/* Sun */}
          <button
              onClick={() => onPlanetClick('about')}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 mt-8 mx-auto flex items-center justify-center text-galaxy-900 font-bold text-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            BK
          </button>
        </div>

        {/* Planets grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {PLANETS.map((planet) => (
              <button
                  key={planet.id}
                  onClick={() => onPlanetClick(planet.id)}
                  className="relative group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <div
                    className="w-16 h-16 rounded-full mx-auto mb-3 shadow-lg"
                    style={{ backgroundColor: planet.color }}
                />
                <span className="text-sm text-gray-300 font-medium">{planet.label}</span>
              </button>
          ))}
        </div>
      </div>
  );
}
