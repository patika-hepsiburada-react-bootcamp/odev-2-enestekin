import React from 'react';
import styles from './WrongGuesses.module.css';

const WrongGuesses = ({ wrongGuesses }) => {
  return (
    <div className={styles.wrong}>
      <p>
        Wrong Guesses:
        {wrongGuesses.reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, ',', curr]),
          null
        )}
      </p>
    </div>
  );
};

export default WrongGuesses;
