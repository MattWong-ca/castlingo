"use client";
import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';
import OpenAI from "openai/index.mjs";

export default function Translation({ navigateToPage }) {
  const [currentTabUrl, setCurrentTabUrl] = useState();
  const [castText, setCastText] = useState();
  const [openAIResponse, setOpenAIResponse] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const [props, setProps] = useState();

  const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

  const openAIPayload = `
  You're a translation bot that helps people learn Spanish, similar to Duolingo. In ONLY JSON, respond with:

1. Translation of the text to Spanish
2. Word/phrase by word/phrase translation (eg. give me a dictionary like "Hello" --> "Hola")
3. Generate 2 multiple choice questions (question in English, with 4 Spanish answers, no a/b/c/d in front of responses), and the correct answer (eg. it can be as simple as "Translate [word]" or "What does [word] mean")
4. Generate 2 true/false questions similar to the multiple choice (eg. [phrase] means [phrase] in Spanish), and the correct answer as a string (eg. "true"/"false")

Send me all of this in JSON. The sections should be "translation", "phrase_translation", "multiple_choice_questions", and "true_false_questions"

Here's the text:
  `;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    setCurrentTabUrl(tabs[0].url);
    console.log(tabs[0].url)
  });

  const options = {
    method: 'GET',
    headers: { accept: 'application/json', api_key: 'NEYNAR_API_DOCS' }
  };

  useEffect(() => {
    fetch(`https://api.neynar.com/v2/farcaster/cast?identifier=${currentTabUrl}&type=url`, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.cast.text)
        setCastText(json.cast.text);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [currentTabUrl]);

  useEffect(() => {
    if (castText) {
      const fetchTranslation = async () => {
        try {
          const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: openAIPayload + `\n${castText}` }],
            model: "gpt-3.5-turbo",
          });
          console.log(completion.choices[0].message.content)
          console.log(JSON.parse(completion.choices[0].message.content).translation);
          setOpenAIResponse(JSON.parse(completion.choices[0].message.content).translation);
          setProps(JSON.parse(completion.choices[0].message.content));
        } catch (error) {
          console.error('Error fetching translation:', error);
        }
      };

      fetchTranslation();
    }
  }, [castText]);

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
    backgroundColor: blue,
    fontSize: '18px',
    color: 'white',
    border: 'none',
    width: '260px',
    textAlign: 'center',
    borderRadius: '10px',
    cursor: isHovered ? 'pointer' : 'default',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)'
  };

  return (
    <div style={containerStyle}>
      <div style={{ fontWeight: 'bold', fontSize: '30px', color: 'white', padding: '0px', margin: '10px 0px 0px 10px', fontFamily: "'Poppins', sans-serif" }}>Translation:</div>
      <div style={{ whiteSpace: 'pre-wrap', borderRadius: '10px', backgroundColor: 'white', height: '345px', fontSize: '18px', color: blue, padding: '6px 10px 10px 10px', margin: '5px 10px 0px 10px', overflowY: 'auto', overflowX: 'hidden', overflowWrap: 'break-word', fontFamily: "'Poppins', sans-serif" }}>{openAIResponse ?? 'Loading...'}</div>
      <div
        style={lastButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigateToPage('phrases', props)}
      >
        Next
      </div>
    </div>
  );
}
