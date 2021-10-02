import React from 'react';
import styles from './Puzzle.module.css';

const Puzzle = ({ puzzle, correctGuesses }) => {
  return (
    <div className={styles.puzzle}>
      {puzzle.split('').map((letter, index) => {
        return letter === ' ' ? (
          <span key={index}></span>
        ) : (
          <span className={styles['puzzle-space']} key={index}>
            {correctGuesses.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default Puzzle;
