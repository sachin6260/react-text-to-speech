import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const SpeechHistory = ({ history, onHistoryClick }) => {
  return (
    <div>
      <h2>
        <FontAwesomeIcon icon={faHistory} /> Speech History
      </h2>
      <ul>
        {history.map((item, index) => (
          <li key={index} onClick={() => onHistoryClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpeechHistory;
