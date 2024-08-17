"use client";
import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function HomePage({ navigateToPage }) {
  const [currentTabUrl, setCurrentTabUrl] = useState();
  const [castText, setCastText] = useState();

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    setCurrentTabUrl(tabs[0].url);
    console.log(tabs[0].url)
  });

  const options = {
    method: 'GET',
    headers: {accept: 'application/json', api_key: 'NEYNAR_API_DOCS'}
  };

  useEffect(() => {
    fetch(`https://api.neynar.com/v2/farcaster/cast?identifier=${'https://warpcast.com/ether-fi/0x468b13ec'}&type=url`, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.cast.text)
        setCastText(json.cast.text);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [currentTabUrl]);

  const [isHovered, setIsHovered] = useState(false);

  const duolingoGreen = '#58CC02'; // Duolingo green color
  const blue = '#2e6cbf'; // Blue color for the border and button

  const containerStyle = {
    padding: '10px',
    height: '500px',
    width: '300px',
    backgroundColor: duolingoGreen,
    // border: `10px solid ${blue}`,
    // textAlign: 'center',
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
    textAlign: 'center',
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

      <div style={{ fontWeight: 'bold', fontSize: '30px', color: 'white', padding: '0px', margin: '10px 0px 0px 10px', fontFamily: "'Poppins', sans-serif" }}>Translation:</div>

      <div style={{ borderRadius: '10px', backgroundColor: 'white', height: '345px', fontSize: '18px', color: blue, padding: '6px 10px 10px 10px', margin: '5px 10px 0px 10px', overflowY: 'auto', overflowX: 'hidden', overflowWrap: 'break-word', fontFamily: "'Poppins', sans-serif" }}>{castText}</div>

      <div
        style={lastButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigateToPage('home')}
      >
        Back home
      </div>
    </div>
  );
}
