import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import VoiceSelector from './components/VoiceSelector';
import PlaybackControls from './components/PlaybackControls';
import SpeechHistory from './components/SpeechHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  useEffect(() => {
    const synth = window.speechSynthesis;
    const fetchVoices = () => {
      setVoices(synth.getVoices());
    };
    synth.onvoiceschanged = fetchVoices;
    fetchVoices();
  }, []);

  const addToHistory = () => {
    if (text && !history.includes(text)) {
      const newHistory = [...history, text];
      setHistory(newHistory);
      localStorage.setItem('speechHistory', JSON.stringify(newHistory));
    }
  };

  const handleHistoryClick = (item) => {
    setText(item);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Text-to-Speech Converter</h1>
      <button onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <TextInput text={text} setText={setText} />
      <VoiceSelector voices={voices} setVoice={setVoice} />
      <PlaybackControls text={text} voice={voice} addToHistory={addToHistory} />
      <SpeechHistory history={history} onHistoryClick={handleHistoryClick} />
    </div>
  );
};

export default App;
