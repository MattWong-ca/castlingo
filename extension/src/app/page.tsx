"use client";

import Image from "next/image";
import React, { useState } from 'react';

export default function Home() {
  // const [currentTabUrl, setCurrentTabUrl] = useState<string>("Loading...");
  const [counter, setCounter] = useState<number>(0);
  const incrementCounter = () => setCounter(counter + 1);
  // useEffect(() => {
    // setCurrentTabUrl('it works?');
    // Ensure the Chrome API is available before querying
    // if (typeof chrome !== "undefined" && chrome.tabs) {
    //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //     if (chrome.runtime.lastError) {
    //       console.error('Runtime error:', chrome.runtime.lastError.message);
    //       setCurrentTabUrl('Error: ' + chrome.runtime.lastError.message);
    //     } else if (tabs && tabs[0].url) {
    //       setCurrentTabUrl(tabs[0].url);
    //     } else {
    //       setCurrentTabUrl('No active tab found');
    //     }
    //   });
    // } else {
    //   setCurrentTabUrl("Chrome API not available");
    // }
  // }, []);
 
  // const [message, setMessage] = useState<string>("Loaadsfding...");

  // useEffect(() => {
  //   // Simulate an asynchronous action (like fetching a URL)
  //   setTimeout(() => {
  //     setMessage("Hello from useEffect");
  //     console.log("useEffect triggered");
  //   }, 1000);
  // }, []);

  const onClick = () => {
    console.log("it works")
  }
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
