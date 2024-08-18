"use client";
import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function Points({ navigateToPage, ...props }) {
    const [isHovered, setIsHovered] = useState(false);
    const duolingoGreen = '#58CC02';
    const blue = '#2e6cbf';

    const containerStyle = {
        padding: '10px',
        height: '500px',
        width: '300px',
        backgroundColor: duolingoGreen,
        position: 'relative',
        boxSizing: 'border-box',
        textAlign: 'center',
    };

    const circleStyle = {
        backgroundColor: blue,
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        margin: '80px auto 0',  // Center the circle horizontally
        fontFamily: "'Poppins', sans-serif",
    };

    const pointsTextStyle = {
        fontWeight: 'bold',
        fontSize: '48px',
        margin: '0px',
        lineHeight: 1
    };

    const subTextStyle = {
        fontSize: '20px',
        margin: '5px 0px 0px 0px',
    };

    const lastButtonStyle = {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '12px',
        color: blue,
        border: 'none',
        cursor: isHovered ? 'pointer' : 'default',
        position: 'absolute',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        textDecoration: 'underline'
      };

    return (
        <div style={{ ...containerStyle, backgroundImage: 'url(/icons/confetti.gif)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div style={circleStyle}>
                <div style={pointsTextStyle}>+300</div>
                <div style={subTextStyle}>points!</div>
            </div>
            <div
        style={lastButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigateToPage('home')}
      >
        Home
      </div>
        </div>
    );
}
