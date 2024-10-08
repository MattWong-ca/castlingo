"use client";
import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function QuestionFour({ navigateToPage, addPoints, ...props }) {
    const { true_false_questions } = props;

    const [hoveredIndex, setHoveredIndex] = useState();

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
        fontSize: '16px',
        color: 'white',
        width: '260px',
        textAlign: 'center',
        borderRadius: '15px',
        marginTop: '10px'
    };

    const handleAnswerClick = (selectedAnswer) => {
        addPoints(selectedAnswer === true_false_questions[1].correct_answer ? 100 : 0)
        navigateToPage('points', props);
    };

    return (
        <div style={containerStyle}>
            <div style={{ lineHeight: 1.2, fontWeight: 'bold', fontSize: '26px', color: 'white', padding: '0px', margin: '10px 0px 0px 10px', fontFamily: "'Poppins', sans-serif" }}>{true_false_questions[1].question}</div>

            <div style={{
                bottom: '20px',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
                <div
                    index={1}
                    style={{
                        ...lastButtonStyle,
                        backgroundColor: blue,
                        cursor: hoveredIndex === 1 ? 'pointer' : 'default'
                    }}
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleAnswerClick('true')}
                >
                    True
                </div>
                <div
                    index={2}
                    style={{
                        ...lastButtonStyle,
                        backgroundColor: blue,
                        cursor: hoveredIndex === 2 ? 'pointer' : 'default'
                    }}
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleAnswerClick('false')}
                >
                    False
                </div>
            </div>
        </div>
    );
}