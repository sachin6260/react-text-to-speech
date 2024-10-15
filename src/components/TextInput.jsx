import React from 'react';

const TextInput = ({ text, setText }) => {
  return (
    <textarea
      className="text-input"
      rows="4"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter text here..."
    />
  );
};

export default TextInput;
