// src/StarBackground.jsx
import React from 'react';
import Particles from 'react-particles-js';

const StarBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: 'star',
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: 2,
          },
          move: {
            speed: 1,
          },
        },
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default StarBackground;
