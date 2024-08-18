import React, { useState, useEffect } from 'react';
import HomePage from '../components/Home';
import Translation from '../components/Translation';
import Phrases from '../components/PhraseByPhrase';
import QuizTime from '../components/QuizTime';
import QuestionOne from '../components/QuestionOne';
import QuestionTwo from '../components/QuestionTwo';
import QuestionThree from '../components/QuestionThree';
import QuestionFour from '../components/QuestionFour';
import Points from '../components/Points';

export default function Home() {
  const [activePage, setActivePage] = useState('home');
  const [pageProps, setPageProps] = useState({});
  const [pointss, setPoints] = useState(0);

  const navigateToPage = (page, props = {}) => {
    setActivePage(page);
    setPageProps(props);
  };

  const addPoints = (newPoints) => {
    setPoints(prevPoints => prevPoints + newPoints);
  };

  useEffect(() => {
    console.log("Updated Points: ", pointss);
  }, [pointss]);

  return (
    <>
      {activePage === 'home' && <HomePage navigateToPage={navigateToPage} />}
      {activePage === 'translation' && <Translation navigateToPage={navigateToPage} />}
      {activePage === 'phrases' && <Phrases navigateToPage={navigateToPage} {...pageProps} />}
      {activePage === 'quiztime' && <QuizTime navigateToPage={navigateToPage} {...pageProps} />}
      {activePage === 'q1' && <QuestionOne navigateToPage={navigateToPage} {...pageProps} addPoints={addPoints} />}
      {activePage === 'q2' && <QuestionTwo navigateToPage={navigateToPage} {...pageProps} addPoints={addPoints}/>}
      {activePage === 'q3' && <QuestionThree navigateToPage={navigateToPage} {...pageProps} addPoints={addPoints} />}
      {activePage === 'q4' && <QuestionFour navigateToPage={navigateToPage} {...pageProps} addPoints={addPoints} />}
      {activePage === 'points' && <Points navigateToPage={navigateToPage} {...pageProps} points={pointss} />}
    </>
  );
}
