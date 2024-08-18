import styles from '../../styles/Pages.module.css';
import React, { useState } from 'react';

export default function QuizTime({ navigateToPage }) {
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

    return (
        <div style={containerStyle}>
            <div style={{ fontWeight: 'bold', fontSize: '45px', color: 'white', padding: '0px', margin: '120px 0px 0px 0px', fontFamily: "'Poppins', sans-serif" }}>Quiz Time!</div>
            <div style={{ fontSize: '18px', color: 'white', padding: '0px', margin: '5px 0px 0px 0px', fontFamily: "'Poppins', sans-serif" }}>4 questions</div>
            <div
                style={lastButtonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigateToPage('translation')}
            >
                Start
            </div>
        </div>
    );
}
