import React, { useState, useEffect } from 'react';
import HomePage from '../components/Home';
import Translation from '../components/Translation';
import Phrases from '../components/PhraseByPhrase';
import QuizTime from '../components/QuizTime';
import QuestionOne from '../components/QuestionOne';
import QuestionTwo from '../components/QuestionTwo';

export default function Home() {
  const [activePage, setActivePage] = useState('home');
  const [pageProps, setPageProps] = useState({});

  const navigateToPage = (page, props = {}) => {
    setActivePage(page);
    setPageProps(props);
  };

  return (
    <>
      {activePage === 'home' && <HomePage navigateToPage={navigateToPage} />}
      {activePage === 'translation' && <Translation navigateToPage={navigateToPage} />}
      {activePage === 'phrases' && <Phrases navigateToPage={navigateToPage} {...pageProps} />}
      {activePage === 'quiztime' && <QuizTime navigateToPage={navigateToPage} {...pageProps} />}
      {activePage === 'q1' && <QuestionOne navigateToPage={navigateToPage} {...pageProps} />}
      {activePage === 'q2' && <QuestionTwo navigateToPage={navigateToPage} {...pageProps} />}
    </>
  );
}
