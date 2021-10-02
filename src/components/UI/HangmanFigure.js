import React from 'react';
import styles from './HangmanFigure.module.css';

const HangmanFigure = ({ wrongGuesses }) => {
  const pieces = wrongGuesses.length;
  return (
    <svg height='250' width='200' className={styles['hangman-container']}>
      {/* <!-- Rod --> */}
      <line x1='60' y1='20' x2='140' y2='20' />
      <line x1='140' y1='20' x2='140' y2='50' />
      <line x1='60' y1='20' x2='60' y2='230' />
      <line x1='20' y1='230' x2='100' y2='230' />

      {/* <!-- Head --> */}
      {pieces > 0 && <circle cx='140' cy='70' r='20' />}
      {/* <!-- Body --> */}
      {pieces > 1 && <line x1='140' y1='90' x2='140' y2='150' />}
      {/* <!-- Arms --> */}
      {pieces > 2 && <line x1='140' y1='120' x2='120' y2='100' />}
      {pieces > 2 && <line x1='140' y1='120' x2='160' y2='100' />}
      {/* <!-- Legs --> */}
      {pieces > 3 && <line x1='140' y1='150' x2='120' y2='180' />}
      {pieces > 4 && <line x1='140' y1='150' x2='160' y2='180' />}
    </svg>
  );
};

export default HangmanFigure;
