import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function HomePage({ navigateToPage }) {
  const [isHovered, setIsHovered] = useState(false);

  const duolingoGreen = '#58CC02';
  const blue = '#2e6cbf';

  const containerStyle = {
    padding: '10px',
    height: '500px',
    width: '300px',
    backgroundColor: duolingoGreen,
    textAlign: 'center',
    position: 'relative',
    boxSizing: 'border-box'
  };

  const lastButtonStyle = {
    fontFamily: "'Poppins', sans-serif",
    padding: '10px 20px',
    backgroundColor: blue,
    fontSize: '18px',
    color: 'white',
    border: 'none',
    width: '260px',
    borderRadius: '10px',
    cursor: isHovered ? 'pointer' : 'default',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)'
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginTop: '30px'
  };

  return (
    <div style={containerStyle}>
      <img
        src="/icons/duolingo.png"
        alt="Duolingo Icon"
        style={imageStyle}
      />
      <div style={{ fontWeight: 'bold', fontSize: '30px', color: 'white', padding: '0px', margin: '10px 0px 0px 0px', fontFamily: "'Poppins', sans-serif" }}>Castlingo</div>
      <div style={{ fontSize: '18px', color: 'white', padding: '0px', margin: '5px 0px 0px 0px', fontFamily: "'Poppins', sans-serif" }}>Language learning on Warpcast!</div>
      <div style={{ marginTop: '25px', width: '115px', margin: '20px auto 0 auto', backgroundColor: '#F1BF00', color: 'black', padding: '2px 3px 3px 2px', borderRadius: '5px', fontSize: '14px', fontFamily: "'Poppins', sans-serif" }}>Spanish 🇪🇸</div>
      <div
        style={lastButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigateToPage('translation')}
      >
        Start Learning!
      </div>
    </div>
  );
}
