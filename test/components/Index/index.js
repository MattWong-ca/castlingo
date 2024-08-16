import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function Index({ navigateToPage }) {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to track loading status

  const [isHovered, setIsHovered] = useState(false);

  // const buttonStyle = {
  //   cursor: isHovered ? 'pointer' : 'default',
  //   padding: '10px',
  //   backgroundColor: '#2e6cbf',
  // };

  useEffect(() => {
    // useEffect to fetch data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        setData(json); // Set the fetched data to state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  const duolingoGreen = '#58CC02'; // Duolingo green color
  const blue = '#2e6cbf'; // Blue color for the border and button

  const containerStyle = {
    padding: '10px',
    height: '400px',
    width: '300px',
    backgroundColor: duolingoGreen,
    border: `10px solid ${blue}`,
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
    padding: '10px 20px',
    backgroundColor: blue,
    color: 'white',
    border: 'none',
    // marginTop: '10px',
    borderRadius: '15px',
    cursor: isHovered ? 'pointer' : 'default',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  const clickMe = () => {
    console.log("Button clicked!");
  }

  return (
    <div style={containerStyle}>
      <h1 style={{ padding: '0px', margin: '0px' }}>Castlingo</h1>
      {/* {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>No data found</p>
      )} */}
      <div>Language learning on Warpcast</div>
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
        onClick={clickMe}
      >
        Click Me!
      </div>
    </div>
  );
}
