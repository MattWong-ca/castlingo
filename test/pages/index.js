import React, { useState, useEffect } from 'react';
import HomePage from '../components/Home';
import New from '../components/New';

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
      const url = tabs[0].url;
      console.log(url)
    });
  });

  return (
    <>
      {activePage === 'home' && <HomePage navigateToPage={navigateToPage} />}
      {activePage === 'new' && <New navigateToPage={navigateToPage} />}
    </>
  );
}
