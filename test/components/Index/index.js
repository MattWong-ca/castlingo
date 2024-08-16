import styles from '../../styles/Pages.module.css';
import React, { useState } from 'react';

export default function Index({ navigateToPage }) {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <div style={{ padding: 10, height: '400px', width: '300px', backgroundColor: 'lightgreen' }}>
      <h1>Castlingo</h1>
      <div>Language learning on Warpcast</div>
      {/* <div onClick={() => onClick}>click me</div> */}
      {/* <div>{currentTabUrl}</div> */}
      <span>{counter}</span>
          <button onClick={incrementCounter}>+</button>

      <button onClick={() => onClick()}>click here!</button>
    </div>
  );
}
