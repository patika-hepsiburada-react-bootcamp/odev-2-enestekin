import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Layout/Header';
import HangmanFigure from './components/UI/HangmanFigure';
import Puzzle from './components/Puzzle/Puzzle';
import GuessesLeft from './components/GuessesLeft/GuessesLeft';
import WrongGuesses from './components/WrongGuesses/WrongGuesses';
import styles from './App.module.css';

const requestUrl = 'https://puzzle.mead.io/puzzle';
function App() {
  const [puzzle, setPuzzle] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const getPuzzle = async () => {
      try {
        const response = await axios(requestUrl);
        const { puzzle } = response.data;
        setPuzzle(puzzle.toUpperCase());
      } catch (error) {
        console.log(error);
      }
    };
    getPuzzle();
  }, []);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (isPlaying) {
        const guess = e.key.toUpperCase();
        if (puzzle.includes(guess)) {
          if (correctGuesses.includes(guess)) {
            console.log('buna zaten tıkladın');
          } else {
            setCorrectGuesses((prevGuesses) => [...prevGuesses, guess]);
          }
        } else {
          if (wrongGuesses.includes(guess)) {
            console.log('bu zaten yanlış');
          } else {
            setWrongGuesses((prevWrongGuesses) => [...prevWrongGuesses, guess]);
          }
        }
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [puzzle, correctGuesses, wrongGuesses, isPlaying]);

  useEffect(() => {
    if (wrongGuesses.length === 5) {
      setIsPlaying(false);
      setStatus('You Lost');
    } else {
      puzzle.split('').forEach((letter) => {
        if (!correctGuesses.includes(letter)) {
          setStatus('');
        }
      });
    }
  }, [correctGuesses, puzzle, wrongGuesses]);

  function reset() {
    setIsPlaying(true);
    setCorrectGuesses([]);
    setWrongGuesses([]);
    setStatus('');
  }

  return (
    <div>
      <Header />
      <HangmanFigure wrongGuesses={wrongGuesses} />
      <Puzzle puzzle={puzzle} correctGuesses={correctGuesses} />
      <WrongGuesses wrongGuesses={wrongGuesses} />
      <GuessesLeft wrongGuesses={wrongGuesses} />
      <div className={styles.status}>
        {status === 'You Lost' && (
          <div>
            <p className={styles.message}>
              {status} The hidden word was: {puzzle}
            </p>
            <p className={styles.reset} onClick={reset}>
              Try Again
            </p>
          </div>
        )}
        {status === 'You Won' && (
          <div>
            <p className={styles.message}>{status}</p>
            <p className={styles.reset} onClick={reset}>
              Do you want to play again ?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
