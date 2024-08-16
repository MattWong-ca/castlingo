import React, { useState, useEffect } from 'react';
import Index from '../components/Index';
import New from '../components/New';

export default function Home() {
  const [activePage, setActivePage] = useState('index');

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
      {activePage === 'index' && <Index navigateToPage={navigateToPage} />}
      {activePage === 'new' && <New navigateToPage={navigateToPage} />}
    </>
  );
}
