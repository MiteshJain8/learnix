'use client';

import { useState, useEffect } from 'react';

const wordsData = [
  { id: 1, word: 'Apple' },
  { id: 2, word: 'Banana' },
  { id: 3, word: 'Cherry' },
  { id: 4, word: 'Date' },
  { id: 5, word: 'Elderberry' },
  { id: 6, word: 'Fig' },
];

export default function MemoryChallenge() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const shuffledCards = [...wordsData, ...wordsData].sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      setFlippedCards((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].word === cards[second].word) {
        setMatchedCards((prev) => [...prev, first, second]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
      setMoves((prev) => prev + 1);
    }
  }, [flippedCards, cards]);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Memory Challenge</h2>
      <p className="mb-4">Match the pairs of cards with the fewest moves possible.</p>
      <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 rounded-lg cursor-pointer shadow-md flex items-center justify-center ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-gray-300 text-black dark:bg-black dark:text-white'
            }`}
          >
            {(flippedCards.includes(index) || matchedCards.includes(index)) && (
              <span>{card.word}</span>
            )}
          </div>
        ))}
      </div>
      <div className="col-span-3 text-center mt-6">
        <p className="text-gray-600 dark:text-gray-300">Moves: <span className="font-bold">{moves}</span></p>
        {matchedCards.length === cards.length && (
          <p className="text-green-600 dark:text-green-400 text-lg font-bold mt-4">Congratulations! You've matched all the cards!</p>
        )}
      </div>
    </div>
  );
}