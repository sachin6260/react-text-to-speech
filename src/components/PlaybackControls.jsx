import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

const PlaybackControls = ({ text, voice, addToHistory }) => {
  const speak = () => {
    if (text && voice) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
      addToHistory(); // Add text to history after speaking
    }
  };

  return (
    <div>
      <button onClick={speak}>
        <FontAwesomeIcon icon={faVolumeUp} /> Speak
      </button>
      <button onClick={() => window.speechSynthesis.pause()}>
        <FontAwesomeIcon icon={faPause} /> Pause
      </button>
      <button onClick={() => window.speechSynthesis.resume()}>
        <FontAwesomeIcon icon={faPlay} /> Resume
      </button>
      <button onClick={() => window.speechSynthesis.cancel()}>
        <FontAwesomeIcon icon={faStop} /> Stop
      </button>
    </div>
  );
};

export default PlaybackControls;
