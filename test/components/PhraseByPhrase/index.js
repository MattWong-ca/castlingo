"use client";
import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function Phrases({ navigateToPage, ...props }) {
    const { phrase_translation } = props;

    const [isHovered, setIsHovered] = useState(false);

    const duolingoGreen = '#58CC02';
    const blue = '#2e6cbf';

    const containerStyle = {
        padding: '10px',
        height: '500px',
        width: '300px',
        backgroundColor: duolingoGreen,
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

    return (
        <div style={containerStyle}>
            <div style={{ lineHeight: 1.2, fontWeight: 'bold', fontSize: '26px', color: 'white', padding: '0px', margin: '10px 0px 0px 10px', fontFamily: "'Poppins', sans-serif" }}>Here's what each phrase means:</div>
            <div style={{ borderRadius: '10px', backgroundColor: 'white', height: '320px', fontSize: '18px', color: blue, padding: '6px 10px 10px 10px', margin: '10px 10px 0px 10px', overflowY: 'auto', overflowX: 'auto', overflowWrap: 'break-word', fontFamily: "'Poppins', sans-serif" }}>
                <div style={{ height: '320px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    {Object.entries(phrase_translation).map(([english, spanish]) => (
                        <div key={english}>
                            <strong style={{ overflowX: 'auto' }}>{english}:</strong> {spanish}
                        </div>
                    ))}
                </div>
            </div>
            <div
                style={lastButtonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigateToPage('quiztime', props)}
            >
                Next
            </div>
        </div>
    );
}
