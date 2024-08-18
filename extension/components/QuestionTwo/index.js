"use client";
import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function QuestionTwo({ navigateToPage, addPoints, ...props }) {
    const { multiple_choice_questions } = props;

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
        fontSize: '14px',
        color: 'white',
        width: '260px',
        textAlign: 'center',
        borderRadius: '15px',
        marginTop: '10px'
    };

    const handleAnswerClick = (selectedAnswer) => {
        addPoints(selectedAnswer === multiple_choice_questions[1].correct_answer ? 100 : 0)
        navigateToPage('q3', props);
    };
    return (
        <div style={containerStyle}>
            <div style={{ lineHeight: 1.2, fontWeight: 'bold', fontSize: '26px', color: 'white', padding: '0px', margin: '10px 0px 0px 10px', fontFamily: "'Poppins', sans-serif" }}>{multiple_choice_questions[1].question}</div>

            <div style={{
                bottom: '20px',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
                {multiple_choice_questions[1].answers.map((answer, index) => (
                    <div
                        key={index}
                        style={{
                            ...lastButtonStyle,
                            backgroundColor: blue,
                            cursor: hoveredIndex === index ? 'pointer' : 'default'
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleAnswerClick(answer)}
                    >
                        {answer}
                    </div>
                ))}
            </div>
        </div>
    );
}