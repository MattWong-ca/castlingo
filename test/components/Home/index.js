import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function HomePage({ navigateToPage }) {
  // const [counter, setCounter] = useState(0);
  // const incrementCounter = () => setCounter(counter + 1);

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     });
  // }, []);


  const duolingoGreen = '#58CC02'; // Duolingo green color
  const blue = '#2e6cbf'; // Blue color for the border and button

  const containerStyle = {
    padding: '10px',
    height: '500px',
    width: '300px',
    backgroundColor: duolingoGreen,
    // border: `10px solid ${blue}`,
    textAlign: 'center',
    position: 'relative',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: blue,
    color: 'white',
    border: 'none',
    marginTop: '10px',
    cursor: isHovered ? 'pointer' : 'default',
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
  const clickMe = () => {
    console.log("Button clicked!");
  }
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
      {/* {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>No data found</p>
      )} */}
      <div style={{ fontSize: '18px', color: 'white', padding: '0px', margin: '5px 0px 0px 0px', fontFamily: "'Poppins', sans-serif" }}>Language learning on Warpcast!</div>
      {/* <span>{counter}</span>
      <br />
      <button style={buttonStyle} onClick={incrementCounter}>+</button>
      <br />
      <button style={buttonStyle} onClick={clickMe}>click here!</button>
      <br /> */}
      <div
        style={lastButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigateToPage('new')}
      >
        Start Learning!
      </div>
    </div>
  );
}
