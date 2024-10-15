import React from 'react';

const VoiceSelector = ({ voices, setVoice }) => {
  return (
    <select className="voice-selector" onChange={(e) => setVoice(voices[e.target.selectedIndex])}>
      <option value="">Select a voice</option>
      {voices.map((voice, index) => (
        <option key={index} value={voice.name}>
          {voice.name} ({voice.lang})
        </option>
      ))}
    </select>
  );
};

export default VoiceSelector;
