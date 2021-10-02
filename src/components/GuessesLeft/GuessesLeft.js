import React from 'react';
import styles from './GuessesLeft.module.css';

const GuessesLeft = ({ wrongGuesses }) => {
  return (
    <p className={styles.guesses}>Guesses left: {5 - wrongGuesses.length}</p>
  );
};

export default GuessesLeft;
