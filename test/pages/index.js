import React, { useState, useEffect } from 'react';
import HomePage from '../components/Home';
import New from '../components/New';

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {activePage === 'home' && <HomePage navigateToPage={navigateToPage} />}
      {activePage === 'new' && <New navigateToPage={navigateToPage} />}
    </>
  );
}
